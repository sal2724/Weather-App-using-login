import React, {useState} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dash from './Dashboard';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";


export default function Login() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin =() => {
      
        if(Username === "user" && Password ==="1234") {
            setLoggedIn(true);
            navigate("/dashboard");
        }
        else{
            alert("Invalid username or password or both")
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({
        Username : Username,
        Password : Password,
        isLoggedIn : false,

      }));
    };

    return (
      <>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {/* form */}
            <div className='login'>
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
              <h1> LOGIN FORM </h1>
              <div class="mb-3">
                <label for="Username" class="form-label">
                  Username
                
                <input
                  type="text"
                  placeholder="Enter username..."
                  value= {Username}
                  onChange={(e) => setUsername(e.target.value)}
                  class="form-control"
                />
                </label>
              </div>
              <div class="mb-3">
                <label for="Password" class="form-label">
                  Password
                
                <input
                  type="password"
                  placeholder="Enter password..."
                  value= {Password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
                </label>
              </div>
              
                
              <br></br>
            
              <button onClick={handleLogin} type="submit" class="btn btn-success">
                Login
              </button>
            </form>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </>
    );
  }
  