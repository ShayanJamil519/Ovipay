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
import { signInWithGoogle, signUpWithEmail_Password } from "../store/actions/authAction";
import { useHistory } from "react-router-dom";

const Signup = () => {
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
        profile: '',
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
    }
    const handleNumber2 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            number2: parseInt(e.target.value, 10),
        }));
    }
    const handleDigit1 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            digit1: parseInt(e.target.value, 10),
        }));
    }
    const handleDigit2 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            digit2: parseInt(e.target.value, 10),
        }));
    }
    const handleDigit3 = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            digit3: parseInt(e.target.value, 10),
        }));
    }
    const handlePasscode = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            passcode: e.target.value,
        }));
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        // For numeric inputs, parse the value to a number
        const updatedValue = name.includes("digit") || name === "number" ? parseInt(value) : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: updatedValue,
        }));

        // console.log("Data: ", formData);
    };
    // Show or hide password
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    // show and hide confirm password
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const toggleShowPassCode = () => {
        setShowPasscode(!showPasscode);
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
                passcode: formData.passcode

            };
            // console.log('data gone: ', obj)
            dispatch(
                signUpWithEmail_Password(obj, formData?.password, () => {
                    history.push("/saved-login");
                })
            );
        }
        // console.log("Form submitted:", formData);
    };

    // this is for to add image in user icon
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: file,
        }));
    };


    return (
        <Container>
            <Row className="pt-8 pb-16">
                <Col sm="12" md={{ size: 6, offset: 3 }}>

                    {/* Form start from here */}
                    <Form onSubmit={handleSubmit} className="px-3 py-3">
                        {/* Input fields one by one */}

                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="email"
                                className="font-extrabold text-[18px]"
                            >
                                이메일 주소
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="password"
                                className="font-extrabold text-[18px]"
                            >
                                비밀번호
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
                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="confirmpassword"
                                className="font-extrabold text-[18px]"
                            >
                                비밀번호 확인
                            </Label>
                            <div className="relative">
                                <Input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    id="confirmpassword"
                                    placeholder="비밀번호 확인"
                                    className="rounded-xl py-4 border-[#FED52A] bg-[#F4F4F4] focus:outline-none pr-12"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={toggleShowConfirmPassword}
                                >
                                    {showConfirmPassword ? (
                                        <FiEyeOff size={20} />
                                    ) : (
                                        <FiEye size={20} />
                                    )}
                                </span>
                            </div>
                        </FormGroup>

                        {error && <Alert color="danger">{error}</Alert>}

                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="username"
                                className="font-extrabold text-[18px]"
                            >
                                닉네임
                            </Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="UserName"
                                className="rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="username"
                                className="font-extrabold text-[18px]"
                            >
                                6자리 간편 비밀번호 설정
                            </Label>
                            <div className="relative">
                                <Input
                                    type={showPasscode ? "text" : "password"}
                                    name="passcode"
                                    id="passcode"
                                    placeholder="비밀번호"
                                    className="rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none pr-12"
                                    value={formData.passcode}
                                    onChange={handlePasscode}
                                    required
                                />
                                <span
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={toggleShowPassCode}
                                >
                                    {showPasscode ? (
                                        <FiEyeOff size={20} />
                                    ) : (
                                        <FiEye size={20} />
                                    )}
                                </span>
                            </div>
                        </FormGroup>

                        {/* Four Buttons */}



                        <div className="my-4 md:w-[75%] mx-auto">
                            <h2 className="mb-2 font-bold text-[18px]">전화번호 인증</h2>

                            <div className="flex justiy-between">
                                <input

                                    type="number"
                                    className="mx-1  bg-[#F4F4F4] hover:bg-gray-200 border-[#FED52A] text-black rounded-xl py-[10px] w-[20%] md:w-[10%] px-[12px]"
                                    value={formData.digit1}
                                    onChange={handleDigit1}
                                    placeholder="000"
                                />
                                <input

                                    type="number"
                                    className="mx-1 bg-[#F4F4F4] hover:bg-gray-200 focuse:outline-none border-[#FED52A] text-black rounded-xl py-[10px] w-[20%] md:w-[10%] px-[12px]"
                                    value={formData.digit2}
                                    onChange={handleDigit2}
                                    placeholder="000"
                                />
                                <input

                                    type="number"
                                    className="mx-1 bg-[#F4F4F4] hover:bg-gray-200 border-[#FED52A] text-black rounded-xl py-[10px] w-[20%] md:w-[10%] px-[12px]"
                                    value={formData.digit3}
                                    onChange={handleDigit3}
                                    placeholder="000"
                                />

                            </div>
                        </div>


                        {/* Below 4 buttons  like a swapable thing half blue color half gray */}
                        <div className="border-[#FED52A] md:w-[75%] mx-auto mt-3 mb-2">
                            <label className="block font-bold">인증번호</label>
                            <input
                                type="number"
                                className="bg-[#F4F4F4] border-[#FED52A] relative pl-[12px]  focus:outline-none py-2  rounded-xl"
                                placeholder="00000"
                                value={formData.number}
                                onChange={handleNumber}
                            />
                            <button className="bg-[#FED52A] text-sm  px-[16px]  md:px-8 py-[10px] relative right-12 rounded-2xl">
                                확인
                            </button>
                        </div>

                        <div className="border-[#FED52A] md:w-[75%] mx-auto mb-5">
                            <label className="block font-bold">추천인 닉네임</label>
                            <input
                                type="number"
                                className="bg-[#F4F4F4] border-[#FED52A] relative pl-[12px]  focus:outline-none py-2  rounded-xl"
                                placeholder="00000"
                                value={formData.number2}
                                onChange={handleNumber2}
                            />
                            <button className="bg-[#FED52A] text-sm  px-[16px]  md:px-8 py-[10px] relative right-12 rounded-2xl">
                                확인
                            </button>
                        </div>

                        {/* Sign up button */}
                        <div className="mt-12 text-center">
                            <Button
                                type="submit"
                                className="bg-[#FED52A] font-bold text-[18px] px-[85px] py-[12px] rounded-full hover:bg-[#f2ce3e]"
                            >
                                회원가입
                            </Button>
                        </div>
                    </Form>

                    {/* other methods for sign up */}
                    <div className="flex justify-center items-center md:w-[75%] mx-auto">
                        <span className="w-[50%]  border"></span>
                        <p className="text-center my-3 md:w-[5%] mx-2"> or </p>
                        <span className="w-[50%]  border"></span>
                    </div>

                    {/* Google Button  for sign up*/}
                    <div className="text-center ">
                        <Button
                            onClick={() => dispatch(signInWithGoogle()) }
                            type="submit"
                            className=" font-bold text-[18px] hover:bg-gray-200 hover:text-black text-black px-[18px] py-[10px] rounded-full"
                        >
                            <IoLogoGoogle
                                size={20}
                                className="inline mx-2 mb-2"
                            />
                            구글 계정으로 로그인
                        </Button>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
