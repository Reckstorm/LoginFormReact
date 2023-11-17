import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("ee");
    const [password, setPassword] = useState("ee");

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('Id', 0);
        formData.append('FirstName', '');
        formData.append('LastName', '');
        formData.append('Email', email);
        formData.append('Password', password);
        formData.append('AvatarImg', '');

        axios
            .post("https://localhost:7014/api/user/login", formData)
            .then((response) => {
                const token = response.data;
                localStorage.setItem("token", token);

                if (token) {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                }

                navigate("/weather");
            })
            .catch((err) => console.log(err));
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordhange(event) {
        setPassword(event.target.value);
    }

    function registerClickHandler(){
        navigate('register');
    }

    return (
        <div>
            Login Page
            <form onSubmit={handleSubmit}>
                <label>
                    User Name:
                    <input type="text" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={handlePasswordhange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button className='btn btn-primary m-1' onClick={registerClickHandler} >Register</button>
        </div>
    );
}

export default LoginPage;