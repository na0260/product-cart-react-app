import React, {useState} from 'react';
import Layout from "../layout/Layout.jsx";
import verifyLogin from "../utils/verifyLogin.js";
import {useNavigate, useSearchParams} from "react-router-dom";

const Otp = () => {
    const [pin, setPin] = useState("");
    const navigator = useNavigate();
    const [params] = useSearchParams();
    const email = params.get('email');
    const handleVerify = ()=>{
        verifyLogin(email,pin)
            .then(data=>{
                if (data?.msg === 'success'){
                    localStorage.setItem("token",data.data);
                    navigator("/");
                }
            })
            .catch(err=>console.log(err))
    }
    return (
        <Layout>
            <div className="relative flex flex-col justify-center py-60 overflow-hidden">
                <div
                    className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg dark:bg-base-100 shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">OTP Varification</h1>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">A 4 digit pin has been sent to your email</span>
                            </label>
                            <input type="text" value={pin} onChange={(e)=>setPin(e.target.value)}
                                   placeholder="Enter the OTP here"
                                   className="w-full input input-bordered input-primary"/>
                        </div>
                        <div>
                            <button onClick={handleVerify} className="btn btn-primary mt-5">Next</button>
                        </div>
                </div>
            </div>
        </Layout>
    );
};

export default Otp;