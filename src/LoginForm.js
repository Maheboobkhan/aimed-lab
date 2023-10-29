import React, { useState } from "react";
import styled from "styled-components";
import { BiShow, BiHide } from "react-icons/bi";
import Image from "./Image.svg";

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  justify-content: space-around;
  padding: 50px 30px;
  align-items: center;
  text-align: center; /* Center align text for mobile layout */

  @media (max-width: 600px) {
    /* Media query for all mobile screens */
    flex-direction: column;
    text-align: left; /* For mobile layout */
    align-items: center;
  }

  @media (max-width: 900px) {
    /* Media query for all mobile screens */
    flex-direction: column;
    text-align: left; /* For mobile layout */
    align:items: center;
  }
`;

const SvgImage = styled.img`
  display: block;
  width: 30%;
  max-width: 200px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    /* Media query for all mobile screens */
    width: 90%; /* Adjust width for mobile layout */
  }

  @media (max-width: 900px) {
    /* Media query for all mobile screens */
    width: 90%; /* Adjust width for mobile layout */
  }
`;

const LoginForm = styled.div`
  width: 60%;
  padding: 50px 70px 50px 50px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: 600px) {
    /* Media query for all mobile screens */
    width: 90%; /* Adjust width for mobile layout */
    padding: 30px 55px 25px 30px; /* Adjust padding for mobile layout */
  }

  @media (max-width: 900px) {
    /* Media query for all mobile screens */
    width: 90%; /* Adjust width for mobile layout */
    padding: 30px 55px 25px 30px; /* Adjust padding for mobile layout */
  }
`;

const Title = styled.h2`
  color: #04072f;
  text-align: center;
  font-family: system-ui;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;

  @media (max-width: 600px) {
    /* Media query for all mobile screens */
    font-size: 32px; /* Adjust font size for mobile layout */
  }

  @media (max-width: 900px) {
    /* Media query for all mobile screens */
    font-size: 32px; /* Adjust font size for mobile layout */
  }
`;

const Label = styled.label`
  color: #04072f;
  font-family: system-ui;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;

  @media (max-width: 600px) {
    /* Media query for all mobile screens */
    font-size: 16px; /* Adjust font size for mobile layout */
  }

  @media (max-width: 900px) {
    /* Media query for all mobile screens */
    font-size: 16px; /* Adjust font size for mobile layout */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: 600px) {
    /* Media query for all mobile screens */
    font-size: 16px; /* Adjust font size for mobile layout */
  }

  @media (max-width: 900px) {
    /* Media query for all mobile screens */
    font-size: 16px; /* Adjust font size for mobile layout */
  }
`;

const PasswordInput = styled.div`
  position: relative;

  input[type="password"],
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 8px;
    border: 1px solid rgba(4, 7, 47, 0.4);
    background: #fff;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  }
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #737b86;
  margin-top: 15px;
  font-size: 18px;

  input[type="checkbox"] {
    margin-right: 5px;
  }
`;

const Button = styled.button`
  width: 60%;
  border-radius: 8px;
  background: #1575a7;
  color: #fff;
  padding: 10px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #e6e6fa;
    color: #1575a7;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
`;

const ChangePass = styled.a`
  color: #f78719;
  font-size: 18px;
  width: fit-content;
`;

const RememberChangeP = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media (max-width: 360px) {
    font-size: 8px;
  }
`;

const TermsandCon = styled.span`
  color: #f78719;
  font-size: 18px;
  text-decoration-line: underline;
  margin-left: 10px;
  cursor: pointer;
`;

const RegisterAccount = styled.p`
  color: #04072f;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    /* Media query for all mobile screens */
    margin-top: 25px; /* Adjust font size for mobile layout */
    font-size: 15px;
  }

  @media (max-width: 900px) {
    /* Media query for all mobile screens */
    margin-top: 25px; /* Adjust font size for mobile layout */
  }
`;

const RegisterAccountSpan = styled.span`
  color: #f78719;
  font-size: 18px;
  text-decoration-line: underline;
  cursor: pointer;
  margin-left: 10px;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyles = {
    backgroundColor: isHovered ? "lightblue" : "white",
    color: isHovered ? "blue" : "black",
    cursor: "pointer",
  };

  return (
    <Container>
      <SvgImage src={Image} />
      <LoginForm>
        <Title>Login</Title>
        <Label>Login ID</Label>
        <Input type="text" placeholder="Enter Login ID" />

        <Label>Password</Label>
        <PasswordInput>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <BiShow
                size={20}
                style={hoverStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <BiHide
                size={20}
                style={hoverStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </ShowPasswordButton>
        </PasswordInput>
        <RememberChangeP>
          <CheckboxLabel>
            <input type="checkbox" />
            Remember Me
          </CheckboxLabel>

          <ChangePass href="#">Change Password</ChangePass>
        </RememberChangeP>

        <CheckboxLabel>
          <input type="checkbox" />
          Agree to <TermsandCon>Terms & Conditions</TermsandCon>
        </CheckboxLabel>

        <ButtonDiv>
          <Button>Login</Button>
        </ButtonDiv>

        <RegisterAccount>
          Don’t have an account?
          <RegisterAccountSpan>Register Here</RegisterAccountSpan>
        </RegisterAccount>
      </LoginForm>
    </Container>
  );
};

export default Login;
