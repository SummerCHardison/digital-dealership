const { Car, Category, Order, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Use environment variable
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    categories: async () => {
      try {
        return await Category.find();
      } catch (error) {
        throw new Error("Error fetching categories");
      }
    },
    cars: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      try {
        return await Car.find(params).populate("category");
      } catch (error) {
        throw new Error("Error fetching cars");
      }
    },
    car: async (parent, { _id }) => {
      try {
        return await Car.findById(_id).populate("category");
      } catch (error) {
        throw new Error("Error fetching car");
      }
    },
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        throw new Error("Error fetching users");
      }
    },
    user: async (_, { id }) => {
      try {
        return await User.findById(id);
      } catch (error) {
        throw new Error("Error fetching user");
      }
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        try {
          const user = await User.findById(context.user._id).populate({
            path: "orders.cars",
            populate: "category",
          });

          return user.orders.id(_id);
        } catch (error) {
          throw new Error("Error fetching order");
        }
      }

      throw new AuthenticationError("Not authenticated");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      await Order.create({ cars: args.cars.map(({ _id }) => _id) });
      const line_items = [];

      for (const car of args.cars) {
        line_items.push({
          price_data: {
            currency: "usd",
            product_data: {
              name: car.model,
              description: `${car.year}`,
              images: [`${car.image}`],
            },
            unit_amount: car.pricePerDay * 100,
          },
          quantity: car.purchaseQuantity,
        });
      }

      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items,
          mode: "payment",
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`,
        });

        return { session: session.id };
      } catch (error) {
        throw new Error("Error creating checkout session");
      }
    },
  },
  Mutation: {
    register: async (_, { name, email, password }) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = signToken(user);

        return { token, user };
      } catch (error) {
        throw new Error("Error registering user");
      }
    },
    addOrder: async (parent, { cars }, context) => {
      if (context.user) {
        try {
          const order = new Order({ cars });

          await User.findByIdAndUpdate(context.user._id, {
            $push: { orders: order },
          });

          return order;
        } catch (error) {
          throw new Error("Error adding order");
        }
      }

      throw new AuthenticationError("Not authenticated");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        try {
          return await User.findByIdAndUpdate(context.user._id, args, {
            new: true,
          });
        } catch (error) {
          throw new Error("Error updating user");
        }
      }

      throw new AuthenticationError("Not authenticated");
    },
    updateCar: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      try {
        return await Car.findByIdAndUpdate(
          _id,
          { $inc: { quantity: decrement } },
          { new: true }
        );
      } catch (error) {
        throw new Error("Error updating car");
      }
    },
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found");
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          throw new Error("Invalid password");
        }

        const token = signToken(user);

        return { token, user };
      } catch (error) {
        throw new Error("Error logging in");
      }
    },
  },
};

module.exports = resolvers;