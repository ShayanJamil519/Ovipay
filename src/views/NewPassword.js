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
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

import {
    signUpWithEmail_Password,
} from "../store/actions/authAction";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const NewPassword = () => {
    // states that used in this compoent
    const [showPassword, setShowPassword] = useState(false);
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

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
            <Row className="pt-8 pb-16 relative h-screen">
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    
                    <Header />
                    
                    {/* Form start from here */}
                    <Form onSubmit={handleSubmit} className="px-3 mx-auto mt-12">
                        {/* Input fields one by one */}
                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="password"
                                className="font-[700] text-[14px]"
                            >
                                새 비밀번호 입력
                            </Label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="비밀번호"
                                    className="rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none pr-12"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? (
                                        <FiEyeOff size={20} />
                                    ) : (
                                        <FiEye size={20} />
                                    )}
                                </span>
                            </div>
                        </FormGroup>
                        <FormGroup className="md:w-[75%] mx-auto mt-4">
                            <Label
                                for="password"
                                className="font-[700] text-[14px]"
                            >
                                비밀번호 다시 입력
                            </Label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="비밀번호"
                                    className="rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none pr-12"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? (
                                        <FiEyeOff size={20} />
                                    ) : (
                                        <FiEye size={20} />
                                    )}
                                </span>
                            </div>
                        </FormGroup>
                    </Form>

                    <div className='flex flex-col absolute bottom-1 w-[92%]'>
                        <Link to='/forgot/find'  className='text-black hover:no-underline hover:text-black mb-2'><button className='flex justify-center py-3 mx-auto mb-2 bg-[#FED52A] rounded-[50px] w-full text-[18px] font-[600]'>로그인</button></Link> 
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default NewPassword;
