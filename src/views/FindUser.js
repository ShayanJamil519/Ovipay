import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert,
} from "reactstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import talk from "../assets/img/talk.svg";

import {
    signUpWithEmail_Password,
} from "../store/actions/authAction";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const FindUser = () => {
    // states that used in this compoent

    const [error, setError] = useState("");

    // Redux integration
    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profile: "",
        number: null,
        number2: null,
        digit1: null,
        digit2: null,
        digit3: null,
        passcode: null,
    });


    return (
        <Container>
            <Row className="pt-8 pb-16 relative h-screen">
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    
                    <Header />

                    <div className="flex items-center justify-center mt-16">
                        <p className="font-[700] text-[14px]">휴대전화번호 정보와 일치하는 아이디입니다.</p>
                    </div>

                    <div className="flex items-center justify-center flex-col py-6 mt-6 border-2 border-[#FED52A] rounded-xl text-[12px] font-[400]">
                        <div className="flex gap-3">
                            <span>아이디:</span>
                            <span className="">
                                <img src={talk} alt="" className="inline" />
                                {" "} qmes1234
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span>가입일: </span>
                            <span>2024. 01. 01</span>
                        </div>
                    </div>               

                    <div className='flex flex-col absolute bottom-1 w-[92%]'>
                        <Link to='/login'><button className='flex justify-center py-3 mx-auto text-black hover:no-underline hover:text-black mb-3 bg-[#FED52A] rounded-[50px] w-full text-[18px] font-[600]'>다 음</button></Link> 
                        <Link to='/forgot'> <button className='flex justify-center mb-2 py-3 bg-[#353737] text-white hover:no-underline hover:text-white w-full mx-auto rounded-[50px] text-[18px] font-[600]'>비밀번호 찾기</button></Link> 
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default FindUser;
