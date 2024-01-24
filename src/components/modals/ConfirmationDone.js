import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import logo from '../../assets/img/Vector.png';

const ConfirmationDone = ({toggle, isOpen}) => {


    return (
        <Container>
            <Row>
                <Col className='rounded-lg'>

                    <Modal isOpen={isOpen} className='modal-border'>
                        <ModalHeader className='pt-2 pb-1 mx-auto border-0'>

                            <img
                                src={logo}
                                alt="Logo"
                                className=" w-[50px] my-3"

                            />


                        </ModalHeader>
                        <ModalBody className='py-0 text-center border-0'>
                            <p className='mb-2 text-[10px]'>오비페이를 이용해주셔서 감사합니다..</p>
                            <h5 className='font-bold text-[18px]'>충전완료!</h5>

                        </ModalBody>
                        <ModalFooter className='flex justify-between pt-3 pb-3 border-0'>
                            <Button
                                className='bg-[#FED52A] font-[14px] text-black px-5 py-2 mx-auto w-[70%] border-0 rounded-md'
                                onClick={toggle}>
                                닫 기
                            </Button>

                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmationDone;
