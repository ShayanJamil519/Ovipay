import React, { useEffect, useState } from "react";
import logo from "../assets/img/authentication-logo.png";
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
import talk from "../assets/img/talk.svg";

import { RiKakaoTalkFill } from "react-icons/ri";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { login, signInWithGoogle } from "../store/actions/authAction";

const Login = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        // console.log("Form submitted:", formData);
        dispatch(login(formData, () => {}));
    };

    useEffect(() => {
        return () => {
            console.log("Component will unmount! (Cleanup)");
            localStorage.removeItem("isRegistered");
        };
    }, []);

    return (
        <Container>
            <Row className="pt-8 pb-16 ">
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <img src={logo} alt="logo" className="pt-5 pb-2 mx-auto" />

                    {localStorage.getItem("isRegistered") && (
                        <div className="bg-[#FED52A] w-[100%] rounded-md py-[25px] text-center my-4">
                            <p className="text-[#373535] font-bold text-base">
                                회원가입 완료!
                            </p>
                        </div>
                    )}

                    {/* Form start from here */}
                    <Form onSubmit={handleSubmit} className="px-3 mx-auto">
                        {/* Input fields one by one */}
                        <FormGroup className="md:w-[75%] mx-auto">
                            <Label
                                for="username"
                                className="font-extrabold text-[18px]"
                            >
                                아이디
                            </Label>
                            <Input
                                type="email"
                                name="username"
                                id="username"
                                placeholder="qmes6871"
                                className="rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none"
                                value={formData.username}
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
                        <p className="text-right my-3 md:w-[85%]">
                            <Link to="/signup" className="font-bold">
                                {" "}
                                아이디ㆍ비밀번호 찾기
                            </Link>
                        </p>

                        {error && <Alert color="danger">{error}</Alert>}

                        {/* Sign in button */}
                        <div className="mt-12 text-center">
                            <Button
                                type="submit"
                                className="bg-[#FED52A] font-bold text-[18px] px-24 py-[12px] rounded-full hover:bg-[#f2ce3e] text-black"
                            >
                                로그인
                            </Button>

                            <Button
                                type="submit"
                                className="bg-[#FED52A] font-bold text-[18px] px-14 mt-3 py-[12px] rounded-full hover:bg-[#f2ce3e] text-black "
                            >
                                PIN 번호 로그인
                            </Button>
                        </div>
                    </Form>

                    <div className="flex justify-center items-center md:w-[75%] mx-auto">
                        <span className="w-[50%]  border"></span>
                        <p className="text-center my-3 md:w-[5%] mx-2"> or </p>
                        <span className="w-[50%]  border"></span>
                    </div>

                    <div className="flex flex-col gap-5">
                        {/* Google Button for sign in */}
                        <div className="text-center ">
                            <Button
                                onClick={() => {
                                    dispatch(signInWithGoogle());
                                }}
                                className=" font-bold text-[18px] hover:bg-gray-200 hover:text-black text-black px-[22px] py-[12px] rounded-full"
                            >
                                <IoLogoGoogle
                                    size={20}
                                    className="inline mx-2 mb-2"
                                />
                                구글 계정으로 로그인
                            </Button>
                        </div>

                        {/* Button for sign in with KakaoTalk */}
                        <div className="text-center ">
                            <Button
                                // onClick={() => {
                                //     dispatch(signInWithGoogle());
                                // }}
                                className=" font-bold text-[18px] bg-[#FEE800]  hover:text-black text-black px-[22px] py-[12px] rounded-full"
                            >
                                {/* <IoLogoGoogle
                                size={20}
                                className="inline mx-2 mb-2"
                            /> */}
                                <img src={talk} className="inline mx-2 mb-2" />
                                카카오톡으로 로그인
                            </Button>
                        </div>
                    </div>

                    {/* Talk button for sign in */}

                    <p className="text-center mt-5 text-[#062275] font-bold text-[14px]">
                        <span className="text-black">
                            아직 계정이 없으신가요?
                        </span>{" "}
                        <Link to="signup" className="">
                            회원가입 하기
                        </Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
