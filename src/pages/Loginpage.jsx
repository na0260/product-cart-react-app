import React, {useState} from 'react';
import Layout from "../layout/Layout.jsx";
import {useNavigate} from "react-router-dom";
import userLogin from "../utils/userLogin.js";

const Loginpage = () => {
    const [email, setEmail] = useState("");
    const navigator = useNavigate();
    const handleLogin = () => {
        userLogin(email)
            .then(data => {
                if (data?.msg === "success") {
                    navigator(`/varification?email=${email}`);
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <Layout>
            <div className="relative flex flex-col justify-center py-60 overflow-hidden">
                <div
                    className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg dark:bg-base-100 shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">Welcome Back</h1>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Enter Email Address to get the verification code"
                                   className="w-full input input-bordered input-primary"/>
                        </div>
                        <div>
                            <button onClick={handleLogin} className="btn btn-primary mt-5">Next</button>
                        </div>
                </div>
            </div>
        </Layout>
    );
};

export default Loginpage;