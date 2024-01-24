import React, { useState } from 'react'
import ConfirmationDone from '../../components/modals/ConfirmationDone';
import ConfirmationModal from '../../components/modals/ConfirmationModal';
import Header from './Header';

export default function BarPage() {
    const [confirm, setConfirm] = useState(false)
    const [done, setDone] = useState(false)
    const [balance, setBalance] = useState(100682);

    const handleBalanceChange = (event) => {
        setBalance(parseInt(event.target.value, 10));
    };

    const toggleConfirm = () =>
    {
        setConfirm(!confirm)
    }
    const toggleDone = () =>
    {
        setConfirm(false)
        setDone(!done)
    }
    return (
        
        // This is the outer div of the bar page
        <>
        <Header />
        <div className='h-screen'>

            {/* This dic is for Card */}

            <div className='bg-[#FED52A] rounded-xl mt-5 mx-4 shadow-xl border-b-3'>
                <div className='flex justify-center w-full pt-3 gap-x-1'>
                    {/* Inner div for 3 buttons */}
                    <button className='bg-white font-bold text-[11px] rounded-[10px] px-[10px] py-1 m-1'>충 전 내 역</button>
                    <button className='bg-white font-bold text-[11px] rounded-[10px] px-[10px] py-1 m-1'>출 금 내 역</button>
                    <button className='bg-white font-bold text-[11px] rounded-[10px] px-[10px] py-1 m-1'>선 물 내 역</button>

                </div>

                {/* Last div for the cash */}

                <div className='flex items-center justify-around w-full px-1 pt-4 pb-2'>
                    <p className='font-bold'>잔 액</p>
                    <p className='font-bold text-[24px]'>100,682 원</p>
                </div>
            </div>

            {/* middle of the page */}
            <div className='flex justify-between px-3 py-2 mx-4 mt-5 mb-4 border-2 border-blue-300 rounded-md'>
                <p className='font bold text-[22px]'>100,000</p>
                <p className='font-bold text-[18px]'>원</p>
            </div>


            {/* this div is for bar */}
            {/* Bar */}
            <div className="items-center justify-center w-full px-4 my-4 text-black ">

                <div className='flex justify-between'>
                    <p>10,000 원</p>
                    <p>500,000 원</p>
                </div>
                <input
                    type="range"
                    min="0"
                    max="200000"
                    step="100"
                    value={balance}
                    onChange={handleBalanceChange}
                    className="w-full"
                />

                {/* <p className="text-[18px] font-bold">{balance.toLocaleString()} 원</p> */}

                
                </div>
                {/* The last button of the page */}

                <div className='mx-3 mt-72 bot'>
                    <button onClick={toggleConfirm} className='bg-[#FED52A] py-2 px-3 bottom-1 rounded-md font-bold text-[22px] w-full'>
                    충전하기
                    </button>
                </div>
        </div>
        
        <ConfirmationDone isOpen={done} toggle={toggleDone} />
        <ConfirmationModal isOpen={confirm} toggle={toggleConfirm} toggleConfirm={toggleDone} />
    </>
        )
}
