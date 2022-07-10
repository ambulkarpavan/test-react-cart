
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  //eve.holt@reqres.in
  //cityslicka

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("sucess");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/shoppingcart");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="email"
            value={formdata.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={formdata.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
