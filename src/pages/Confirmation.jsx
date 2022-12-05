import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <main className="text-center mt-5">
      <p>congratulations</p>
      <p>your account created successfully</p>

      <Link to={"/login"}>Back to Login</Link>
    </main>
  );
};

export default Confirmation;
