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
    signInWithGoogle,
    signUpWithEmail_Password,
} from "../store/actions/authAction";
import { useHistory } from "react-router-dom";

const FindUser = () => {
    // states that used in this compoent

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPasscode, setShowPasscode] = useState(false);
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

    const handleNumber = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            number: parseInt(e.target.value, 10),
        }));
    };
    const handleNumber2 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            number2: parseInt(e.target.value, 10),
        }));
    };
    const handleDigit1 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            digit1: parseInt(e.target.value, 10),
        }));
    };
    const handleDigit2 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            digit2: parseInt(e.target.value, 10),
        }));
    };
    const handleDigit3 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            digit3: parseInt(e.target.value, 10),
        }));
    };
    const handlePasscode = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            passcode: e.target.value,
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        // For numeric inputs, parse the value to a number
        const updatedValue =
            name.includes("digit") || name === "number"
                ? parseInt(value)
                : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: updatedValue,
        }));

        // console.log("Data: ", formData);
    };

    // Form submit function

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        } else {
            const obj = {
                username: formData.username,
                email: formData.email,
                number: formData.number,
                number2: formData.number2,
                profile: formData.profile,
                digit1: formData.digit1,
                digit2: formData.digit2,
                digit3: formData.digit3,
                passcode: formData.passcode,
            };
            // console.log('data gone: ', obj)
            dispatch(
                signUpWithEmail_Password(obj, formData?.password, () => {
                    localStorage.setItem("isRegistered", true);
                    history.push("/saved-login");
                })
            );
        }
        // console.log("Form submitted:", formData);
    };

    return (
        <Container>
            <Row className="pt-8 pb-16">
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    
                    <div className="flex items-center justify-center mb-6 relative">
                        <img src="/back.svg" alt="" className="absolute left-0 top-1" />
                        <p className="text-[17px] font-[700] text-black">아이디ㆍ비밀번호 찾기</p>
                    </div>

                    <div className="flex items-center justify-center mt-16">
                        <p>휴대전화번호 정보와 일치하는 아이디입니다.</p>
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

                    <div className='flex flex-col pt-[80%]'>
                        <Link to='/login'  className='text-black hover:no-underline hover:text-black mb-2'><button className='flex justify-center py-3 mx-auto mb-2 bg-[#FED52A] rounded-[50px] w-full text-[18px] font-[600]'>다 음</button></Link> 
                        <Link to='/forgot' className='text-white hover:no-underline hover:text-white'> <button className='flex justify-center mb-2 py-3 bg-[#353737]  w-full mx-auto rounded-[50px] text-[18px] font-[600]'>비밀번호 찾기</button></Link> 
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default FindUser;
