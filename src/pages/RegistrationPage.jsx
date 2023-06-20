import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const RegistrationPage = () => {
  const [error, setError] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      name,
      email,
      password,
    };

    fetch("http://localhost:8000/api/users/signup", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 403) {
          setError(data.message);
        }
        if (data.status === 200) {
          const auth = {
            email: data.user.email,
            userID: data.user._id,
            name: data.user.name,
          };
          localStorage.setItem("dataSaurAuth", JSON.stringify(auth));
          setUser(auth);
          setError("");
          navigate("/");
        }
        console.log(data);
      });
  };
  return (
    <section className="flex justify-center items-center">
      <form
        className="p-10 border my-[200px] rounded lg:w-[500px]"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center font-bold text-3xl mb-8">Register Here</h3>
        <div className="mb-4">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-[1.5px] p-3 rounded mt-2"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-[1.5px] p-3 rounded mt-2"
            name="email"
            required
          />
        </div>
        <div>
          <label className="font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border-[1.5px] p-3 rounded mt-2"
            name="password"
            required
          />
          <p className="text-xs text-end mt-1">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-[#3383ff]">Login here!</span>
            </Link>
          </p>
        </div>
        <p className="text-red-600 text-center mt-2">{error}</p>
        <div className="text-center">
          <button
            className="btn bg-[#3383ff] text-white font-semibold px-5 py-1 rounded-sm mt-10"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationPage;
