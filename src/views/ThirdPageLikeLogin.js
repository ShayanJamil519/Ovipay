import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IoLogoGoogle } from 'react-icons/io';
import { RiKakaoTalkFill } from 'react-icons/ri';
import logo from '../assets/img/authentication-logo.png';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authAction';

const ThirdPageLikeLogin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

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
    dispatch(login(formData, ()=> {}));
};

  return (
    <Container>
      <Row className='pt-8 pb-16'>
        <Col sm='12' md={{ size: 6, offset: 3 }} className='px-0'>
          <img src={logo} alt='logo' className='mx-auto' />

          <p className='bg-[#FED52A] font-bold text-[24px] py-3 w-full md:w-[75%] mx-auto text-center text-black rounded-lg mt-3 mb-5'>회원가입 완료!</p>

          {/* Form start from here */}
          <Form onSubmit={handleSubmit} className='px-3'>

            {/* Input fields one by one */}
            <FormGroup className='md:w-[75%] mx-auto'>
              <Label for='username' className='font-extrabold text-[18px]'>아이디</Label>
              <Input
                type='text'
                name='username'
                id='username'
                placeholder='qmes6871'
                className='rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none'
                value={formData.username}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup className='md:w-[75%] mx-auto'>
              <Label for='password' className='font-extrabold text-[18px]'>비밀번호</Label>
              <div className='relative'>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='비밀번호'
                  className='rounded-xl py-4  border-[#FED52A] bg-[#F4F4F4] focus:outline-none pr-12'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </span>
              </div>
            </FormGroup>
            <p className='text-right my-3 md:w-[75%]'>
              <a href="#" className='font-bold'> 아이디ㆍ비밀번호 찾기</a>
            </p>



            {error && <Alert color='danger'>{error}</Alert>}

            {/* Sign in button */}
            <div className='mt-12 text-center'>
              <Button
                type='submit'
                className='bg-[#FED52A] text-black  hover:bg-[#f2ce3e] font-bold text-[18px] px-24 py-[12px] rounded-full'>
                로그인
              </Button>
            </div>



          </Form>

          {/* other methods for sign in */}
          <div className='flex justify-center items-center md:w-[75%] mx-auto'>

            <span className='w-[50%]  border'></span>
            <p className='text-center my-3 md:w-[5%] mx-2'> or  </p>
            <span className='w-[50%]  border'></span>

          </div>



          {/* Google Button  for sign up*/}
          <div className='text-center '>
            <Button
              type='submit'
              className=' font-bold text-[18px] hover:text-black text-black px-[18px] py-[10px] rounded-full'>
              <IoLogoGoogle size={20} className='inline mx-2 mb-2' />구글 계정으로 로그인
            </Button>
          </div>

          <p className='mt-5 mb-2 text-center'>
            <a href="#" className='text-[#062275] font-bold text-[13px]'> <span className='text-black'>  아직 계정이 없으신가요?</span> 회원가입 하기</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdPageLikeLogin;
