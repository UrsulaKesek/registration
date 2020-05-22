import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Input from "./components/Input";
function App() {
  const [userData, setUserData] = useState({});
  const onChangeInput = (event) =>
    setUserData({ ...userData, [event.target.id]: event.target.value });
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };
  const validateForm = () => {
    return userData.password && userData.password === userData.confirmPassword;
  };
  return (
    <div className="app">
      <Form onSubmit={validateForm() ? onFormSubmit : null}>
        <header className="h">Registration Form</header>

        <Input
          id="name"
          label="Your Name:"
          onChange={onChangeInput}
          type="text"
          placeholder="Your Name"
          value={userData.name}
        />
        <Input
          id="email"
          label="Your email:"
          onChange={onChangeInput}
          type="email"
          placeholder="Your Email"
          value={userData.email}
        />
        <Input
          id="password"
          label="Your password:"
          onChange={onChangeInput}
          type="password"
          placeholder="Must have at least 8 characters"
          value={userData.password}
        />
        <Input
          id="confirmPassword"
          label="Confirm password:"
          onChange={onChangeInput}
          type="password"
          placeholder=" Confirm Your Password"
          value={userData.confirmPassword}
        />
      </Form>
    </div>
  );
}

export default App;
