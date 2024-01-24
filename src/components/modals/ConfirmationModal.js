import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import logo from '../../assets/img/authentication-logo.png';

const ConfirmationModal = ({toggle, isOpen, toggleConfirm}) => {


    return (
        <Container>
            <Row>
                <Col className='rounded-lg'>

                    <Modal isOpen={isOpen} className='modal-border'>
                        <ModalHeader className='pt-2 pb-1 mx-auto border-0'>
                        
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="img-fluid w-[60px]"
                                   
                                />
                            

                        </ModalHeader>
                        <ModalBody className='py-0 text-center border-0'>
                            <p className='mb-2 text-[12px]'>실시간 계좌이체로 충전됩니다.</p>
                            <h5 className='font-bold text-[18px]'>결제창으로 이동됩니다.</h5>

                        </ModalBody>
                        <ModalFooter className='flex justify-between pt-3 pb-3 border-0'>
                            <Button
                                className='bg-[#FED52A] text-black px-5 py-2 border-0 rounded-md'
                                onClick={toggleConfirm}>
                                네!
                            </Button>
                            <Button
                                className='bg-[#292929]  px-5 py-2 border-0 rounded-md'
                                onClick={toggle}>
                                취 소
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmationModal;
