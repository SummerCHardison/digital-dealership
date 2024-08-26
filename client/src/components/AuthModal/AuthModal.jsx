import React, { useState } from "react";
import Modal from "react-modal";
import "./AuthModal.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

const AuthModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = (isLogin) => {
    setIsLogin(isLogin);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Login logic here (similar to the registration logic, using GraphQL)
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      query: `
            mutation {
                register(username: "${formData.get(
                  "name"
                )}", email: "${formData.get(
        "email"
      )}", password: "${formData.get("password")}") {
                    token
                    user {
                        username
                        email
                    }
                }
            }
        `,
    };

    try {
      const response = await fetch(process.env.MONGODB_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Registration successful:", result);

        // Store the token in localStorage
        localStorage.setItem("token", result.data.register.token);

        // Optionally, update the UI or redirect the user
        // For example, you could close the modal and show a success message
        closeModal();
        // Redirect or update the state as needed
      } else {
        console.error("Registration failed:", response.statusText);
        // Handle registration failure (e.g., show error message)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network or other errors
    }
  };

  return (
    <div>
      <button onClick={() => openModal(true)}>Login</button>
      <button onClick={() => openModal(false)}>Register</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Auth Modal"
      >
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
          {!isLogin && (
            <div>
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
          )}
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AuthModal;
