import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useGlobleAuth} from "../../contexts";

const Signup = () => {
    const {signupHandler, loginToken} = useGlobleAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
        if (loginToken)
            navigate(-1);
    },[loginToken])

    return (
        <div className={'signup-main pt-16 min-h-[90vh] flex justify-center items-center'}>
            <div className="signup-form-card w-[90vw] xs:w-[400px] backdrop-sepia-0 bg-white/10 p-6 rounded-lg">
                <h1 className={'text-center text-3xl pb-4'}>Signup</h1>
                <form className={'flex flex-col gap-3'} onSubmit={signupHandler}>
                    <label htmlFor="firstName" className={'flex flex-col'}>
                        First Name
                        <input required type="text" name={'firstName'} id={'firstName'} placeholder={'John'} className={'rounded-lg py-2 px-3 text-black'}/>
                    </label>
                    <label htmlFor="lastName" className={'flex flex-col'}>
                        Last Name
                        <input required type="text" name={'lastName'} id={'lastName'} placeholder={'Doe'} className={'rounded-lg py-2 px-3 text-black'}/>
                    </label>
                    <label htmlFor="email" className={'flex flex-col'}>
                        Email Address
                        <input required type="text" name={'email'} id={'email'} placeholder={'johndoe@email.com'} className={'rounded-lg py-2 px-3 text-black'}/>
                    </label>
                    <label htmlFor="password" className={'flex flex-col'}>
                        Password
                        <input required type="password" name={'email'} id={'password'} placeholder={'*******'} className={'rounded-lg py-2 px-3 text-black'}/>
                    </label>
                    <label className="checkbox flex gap-2 items-center cursor-pointer">
                        <input required type="checkbox" name="remember" id="remember" className={'w-4 h-4'}/>
                        Accept Terms & Conditions
                    </label>
                    <button type={'submit'} className={'bg-[#0EA5E9FF] p-3 rounded-lg'}>Submit</button>
                </form>
                <div className="signup mt-4 text-lg">
                    Already have an Account ? <Link to={'/authentication/login'} className={'text-indigo-400 hover:underline'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;