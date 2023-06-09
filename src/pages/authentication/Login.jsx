import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useGlobleAuth} from "../../contexts";

const Login = () => {
    const {signinHandler, loginFormChange, loginFormInput, loginToken} = useGlobleAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
        if (loginToken)
            navigate(-1);
    },[loginToken])

    return (
        <div className={'login-main pt-16 min-h-[90vh] flex justify-center items-center'}>
            <div className="login-form-card w-[90vw] xs:w-[400px] backdrop-sepia-0 bg-white/10 p-6 rounded-lg">
                <h1 className={'text-center text-3xl pb-4'}>Login</h1>
                <form className={'flex flex-col gap-3'} onSubmit={signinHandler}>
                    <label htmlFor="email" className={'flex flex-col'}>
                        Email Address
                        <input required type="text" name={'email'} id={'email'} value={loginFormInput.email} placeholder={'johndoe@email.com'} className={'rounded-lg py-2 px-3 text-black'} onChange={loginFormChange}/>
                    </label>
                    <label htmlFor="password" className={'flex flex-col'}>
                        Password
                        <input required type="password" name={'password'} id={'password'} value={loginFormInput.password} placeholder={'*******'} className={'rounded-lg py-2 px-3 text-black'} onChange={loginFormChange}/>
                    </label>
                    <label className="checkbox flex gap-2 items-center cursor-pointer">
                        <input type="checkbox" name="remember" id="remember" className={'w-4 h-4'}/>
                        Remember Me
                    </label>
                    <button type={'submit'} className={'bg-[#0EA5E9FF] p-3 rounded-lg'}>Submit</button>
                </form>
                <div className="signup mt-4 text-lg">
                    Not have Account ? <Link to={'/authentication/signup'} className={'text-indigo-400 hover:underline'}>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;