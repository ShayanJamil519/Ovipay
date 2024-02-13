import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

import {
    signUpWithEmail_Password,
} from "../store/actions/authAction";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const ForgotPassword = () => {
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
                    
                    <Header />
                    
                    {/* Form start from here */}
                    <Form onSubmit={handleSubmit} className="px-3 py-3">
                        {/* Input fields one by one */}

                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="username"
                                className="font-extrabold text-[18px]"
                            >
                                이름
                            </Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="신지연"
                                className="rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>

                        {/* Four Buttons */}

                        <div className="my-4 md:w-[75%] mx-auto">
                            <h2 className="mb-2 font-bold text-[18px]">
                                전화번호 인증
                            </h2>

                            <div className="flex justiy-between">
                                <input
                                    type="number"
                                    className="mx-1 bg-[#F4F4F4] hover:bg-gray-200 border-2 border-[#FED52A] text-black rounded-xl py-[10px] w-[22%] md:w-[10%] px-[10px]"
                                    value={formData.digit1}
                                    onChange={handleDigit1}
                                    placeholder="000"
                                />
                                <input
                                    type="number"
                                    className="mx-1 bg-[#F4F4F4] hover:bg-gray-200 focus:outline-none border-2 border-[#FED52A] text-black rounded-xl py-[10px] w-[22%] md:w-[10%] px-[10px]"
                                    value={formData.digit2}
                                    onChange={handleDigit2}
                                    placeholder="000"
                                />
                                <input
                                    type="number"
                                    className="mx-1 bg-[#F4F4F4] hover:bg-gray-200 border-2 border-[#FED52A] text-[#373535] rounded-xl py-[8px] w-[22%] md:w-[10%] px-[10px]"
                                    value={formData.digit3}
                                    onChange={handleDigit3}
                                    placeholder="000"
                                />
                                <button
                                    className="mx-1 bg-[#FED52A] text-[12px] min-w-[75px] focuse:outline-none border-[#FED52A] text-[#373535] rounded-xl py-[10px] w-[24%] md:w-[10%] px-[12px]"
                                >
                                    인증번호
                                </button>
                            </div>
                        </div>

                        {/* Below 4 buttons  like a swapable thing half blue color half gray */}
                        <div className="border-[#FED52A] md:w-[75%] mx-auto mt-3 mb-2">
                            <label className="block font-bold">인증번호</label>
                            <input
                                type="number"
                                className="bg-[#F4F4F4] border-[#FED52A] border-2 relative pl-[12px]  focus:outline-none py-2  rounded-xl"
                                placeholder="34322"
                                value={formData.number}
                                onChange={handleNumber}
                            />
                            <button className="bg-[#FED52A] text-sm  px-[16px]  md:px-8 py-[12px] relative right-12 rounded-xl">
                                확인
                            </button>
                        </div>

                    </Form>

                    <div className='flex flex-col pt-[80px]'>
                        <Link to='/forgot/find' ><button className='flex justify-center py-3 mx-auto mb-3 bg-[#FED52A] rounded-[50px] w-full text-[18px] font-[600]'>아이디 찾기</button></Link> 
                        <Link to='/forgot/newpassword'> <button className='flex justify-center mb-2 py-3 bg-[#353737] text-white  w-full mx-auto rounded-[50px] text-[18px] font-[600]'>비밀번호 찾기</button></Link> 
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;
