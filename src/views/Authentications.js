import React from 'react';
import img from '../assets/img/authentication-logo.png';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Authentications() {
    return (

        // Outer div
        <div className='bg-[#FED52A] min-h-[100vh]'>

            <div className=''>
                <img src={img} alt="logo" className='mx-auto pt-52' />
                <p className='text-center text-white'> 모든 일상을 </p>
                 <p className='text-center'>   오비페이와 함께</p>

                 <div className='flex flex-col pt-48'>
                 <Link to='/login'  className='text-black hover:no-underline hover:text-black'><button className='flex justify-center py-2 mx-auto mb-2 bg-white rounded-sm w-75 '>로그인</button></Link> 
                 <Link to='/signup' className='text-white hover:no-underline hover:text-white'> <button className='flex justify-center mb-2 py-2 bg-[#353737]  w-75 mx-auto rounded-sm'>회원가입</button></Link> 
                 </div>

                 
            </div>
        </div>
    )
}
