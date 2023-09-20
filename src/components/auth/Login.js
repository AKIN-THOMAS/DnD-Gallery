import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user.email);

      // Handle successful login
      onLogin();
    } catch (error) {
      // Handle login error
      setError(error.message);
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="login-section">
      <form onSubmit={handleSubmit}>
        {error && (
          <div className={`${error ? "submit-error-msg" : "hide-error"}`}>
            {error}
          </div>
        )}
        <div className="login-form">
          <div className="input-box">
            <label>Email</label>
            <Input
              variant={"filled"}
              placeholder="user@example.com"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              outline={"none"}
              width={"300.37px"}
              autoFocus
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <InputGroup>
              <Input
                variant={"filled"}
                placeholder="1Password"
                value={password}
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightAddon>
                <button>Show</button>
              </InputRightAddon>
            </InputGroup>
          </div>

          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
