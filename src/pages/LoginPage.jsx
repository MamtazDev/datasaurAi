import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const data = {
      email,
      password,
    };

    console.log(data, "login");
  };
  return (
    <section className="flex justify-center items-center">
      <form
        className="p-10 border my-[200px] rounded lg:w-[500px]"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center font-bold text-3xl mb-8">Login Here</h3>
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
            New user?{" "}
            <Link to="/register">
              <span className="text-[#3383ff]">Register here!</span>
            </Link>
          </p>
        </div>
        <div className="text-center">
          <button
            className="btn bg-[#3383ff] text-white font-semibold px-5 py-1 rounded-sm mt-10"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
