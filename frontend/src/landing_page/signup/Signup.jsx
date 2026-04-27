import React from "react";

function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Signup</h1>
      <p>Click below to continue to signup page</p>

      <a
        href="https://zerodha-signup.onrender.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Go to Signup
        </button>
      </a>
    </div>
  );
}

export default Signup;