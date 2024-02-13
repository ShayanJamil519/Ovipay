import React from 'react';
import img from '../assets/img/authentication-logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Authentications() {
    return (

        // Outer div
        <div className='bg-[#FED52A] h-screen relative'>

            <div className=''>
                <img src={img} alt="logo" className='mx-auto pt-52' />
                <p className='text-center text-white font-bold text-[24px]'> 모든 일상을 </p>
                <p className='text-center font-bold text-[24px]'>   오비페이와 함께</p>

                <div className='flex flex-col absolute w-[90%] bottom-4 mx-6'>
                    <Link to='/login'  className='text-[#373535] hover:no-underline hover:text-black mb-2'><button className='flex justify-center py-3 mx-auto mb-2 bg-white rounded-[50px] w-full'>로그인</button></Link> 
                    <Link to='/signup' className='text-white hover:no-underline hover:text-white'> <button className='flex justify-center mb-2 py-3 bg-[#353737]  w-full mx-auto rounded-[50px]'>회원가입</button></Link> 
                </div>
            </div>
        </div>
    )
}
