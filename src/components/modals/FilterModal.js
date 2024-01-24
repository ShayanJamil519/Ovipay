import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IoChevronBackSharp } from "react-icons/io5";
import { useHistory } from 'react-router-dom';
export default function FilterModal({isOpen, toggle}) {

  const history = useHistory();

  const handleBackClick = () => {
    // Go back to the previous page
    history.goBack();
  };

  return (
    <div>

      <Modal isOpen={isOpen} className='mx-3 rounded-xl'>
        <ModalHeader className='border-0'>
          <IoChevronBackSharp
            size={30}
            className='p-1 bg-gray-200 rounded-full cursor-pointer'
            onClick={toggle}
          />
          <h1 className='font-bold text-[20px] mt-4'>Filter</h1>
        </ModalHeader>
        <ModalBody className='border-0'>

          {/* THis is the first row of three buttons */}
          <h2 className='font-semibold text-[14px]'>카테고리</h2>
          <div className='flex flex-wrap justify-center mt-2'>
            <Button className='bg-[#fed52a] text-black  rounded-xl border-1 border-gray-200 px-3 mr-2 my-2'> 테스트 </Button>
            <Button className='px-3 mx-3 my-2 text-gray-400 bg-white border-gray-200 rounded-xl border-1'> 테스트 </Button>
            <Button className='px-3 mx-2 my-2 text-gray-400 bg-white border-gray-200 rounded-xl border-1' > 테스트 </Button>
          </div>

          {/* This is the second row of next 5 buttons */}

          <h1 className='font-bold text-[20px] mt-4 mb-3'>두번째 필터</h1>

          <div className='flex flex-wrap gap-x-3 gap-y-2'>
            <Button className='px-3 mx-2 mt-1 text-gray-400 bg-white border-gray-200 rounded-xl border-1'>이것도 테스트</Button>
            <Button className='bg-[#fed52a] text-black  rounded-xl border-1 border-gray-200 px-3 mx-2 mt-1'>테스트</Button>
            <Button className='px-3 mx-2 mt-1 text-gray-400 bg-white border-gray-200 rounded-xl border-1'>테스트</Button>
            <Button className='px-3 mx-2 mt-1 text-gray-400 bg-white border-gray-200 rounded-xl border-1'>테스트</Button>
            <Button className='px-3 mx-2 mt-1 text-gray-400 bg-white border-gray-200 rounded-xl border-1'>테스트</Button>
          </div>
        </ModalBody>
        <div className='mx-4 mb-5'>
          <h1 className='font-bold text-[18px] mt-3'>금액 필터</h1>
          <div className='flex justify-between mt-4'>
            <p>1,000원</p>
            <p>2,000,000원</p>
          </div>
          <div className='flex mt-2'>
            <input
              type="range"
              id="amountFilterRange"
              name="amountFilterRange"
              min="0"
              max="100"
              className='w-full range-input'
            />

            <input
              type="range"
              id="amountFilterRange"
              name="amountFilterRange"
              min="0"
              max="100"
              className='w-full -ml-2 range-input'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}


