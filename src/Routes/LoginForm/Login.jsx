import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    

    try {
      const response = await fetch(
        "https://slattlive-com.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (response.ok) {
        // Login successful
        // alert("Login successful!");
        const data = await response.json();
        const token = data.token;

        // Save token to localStorage
        localStorage.setItem("token", token);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            navigate("/forums");
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } else {
        // Handle error
        // console.error("Login failed!");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, try again Slat!",
        });
      }
    } catch (error) {
        console.error("An error occurred:", error);
        setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    {error && <div className="alert alert-danger">{error}</div>}
      <p>
        <input
          className="form-control"
          type="text"
          placeholder="@instagram handle"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <p>
        <input
          className="form-control"
          type="password"
          placeholder="code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <p>
        <button
          className="btn btn-outline-secondary btn-rounded btn-block mt-3"
          data-mdb-ripple-init
          data-mdb-ripple-color="dark"
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          Login to Party{" "}
          <i className="text-warning fas fa-face-grin smileysBtn"></i>
        </button>
      </p>
    </form>
  );
};

export default Login;
