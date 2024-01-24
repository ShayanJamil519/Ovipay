import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';
import ConfirmationDone from '../../components/modals/ConfirmationDone';
import ConfirmationModal from '../../components/modals/ConfirmationModal';
import Header from './Header';

export default function FieldsPage() {
    const [options, setOptions] = useState('');
    const [name, setName] = useState('');

    const handleOptionsChange = (event) => {
        setOptions(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const [confirm, setConfirm] = useState(false)
    const [done, setDone] = useState(false)



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
        <>
        <Header/>
        <div className='h-screen'>
            {/* Card */}
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

            {/* Middle of the page */}

            <div className='mx-4 mt-5 mb-4 '>
                <p className='py-2 font-bold'>출금 금액</p>
                <div className='flex justify-between px-3 py-2 border-2 border-blue-300 rounded-md'>
                    <p className='font bold text-[22px]'>100,000</p>
                    <p className='font-bold text-[18px]'>원</p>
                </div>
            </div>

            {/* Input Fields */}
            <div className='flex flex-col px-4 my-4 text-black'>
                <Label for='은행선택' className='font-bold'>은행선택</Label>
                <select
                    id='options'

                    className='w-full mb-3 py-[10px] px-2 border-2 border-blue-300 rounded'
                >
                    <option value='' disabled>Select a country</option>
                    <option value='South Korea'>우리은행</option>
                    <option value='United States'>우리은행</option>
                    <option value='United Kingdom'>우리은행</option>
                </select>
                <Label for='계좌번호' className='font-bold'>계좌번호</Label>
                <Input
                    type='text'
                    placeholder='계좌번호'
                    value={name}
                    onChange={handleNameChange}
                    className='w-full mb-3 font-bold py-[21px] px-2 border-2 border-blue-300 rounded'
                />

                <Label for='예금주' className='font-bold'>예금주</Label>
                <Input
                    type='text'
                    placeholder='선지연'
                    value={name}
                    onChange={handleNameChange}
                    className='w-full mb-3 font-bold py-[21px] px-2 border-2 border-blue-300 rounded'
                />
            </div>

            {/* The last button of the page */}
            <div className='mx-3 mt-[90px]  bot'>
                <button onClick={toggleConfirm} className='bg-[#FED52A] py-2 px-3 mb-[50px] rounded-md font-bold text-[22px] w-full'>
                    충전하기
                </button>
            </div>
        </div>
         <ConfirmationDone isOpen={done} toggle={toggleDone} />
         <ConfirmationModal isOpen={confirm} toggle={toggleConfirm} toggleConfirm={toggleDone} />
         </>
    );
}
