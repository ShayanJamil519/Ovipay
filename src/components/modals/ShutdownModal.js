import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Col,
} from "reactstrap";
import logo from "../../assets/img/Group 950.png";

const ShutdownModal = ({ toggle, isOpen }) => {
    return (
        <Container>
            <Row>
                <Col className="rounded-lg">
                    <Modal isOpen={isOpen} className="modal-border ">
                        <ModalHeader className="pt-2 pb-1 mx-auto border-0">
                            <img
                                src={logo}
                                alt="Logo"
                                className="img-fluid w-[60px]"
                            />
                        </ModalHeader>
                        <ModalBody className="py-0 text-center border-0">
                            <p className="mb-2 text-[12px]">
                                정말 로그아웃 하실 건가요?
                            </p>
                            <h5 className="font-bold text-[18px]">
                                로그아웃 됩니다.
                            </h5>
                        </ModalBody>
                        <ModalFooter className="flex justify-between pt-3 pb-3 border-0">
                            <Button
                                className="bg-[#FED52A] text-black px-5 py-2 border-0 rounded-md"
                                onClick={toggle}
                            >
                                로그아웃!
                            </Button>
                            <Button
                                className="bg-[#292929]  px-5 py-2 border-0 rounded-md"
                                onClick={toggle}
                            >
                                돌아가기
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default ShutdownModal;
