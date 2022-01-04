import React from "react";
import { Container, Div, Row, Col, Button, Icon, Text } from "atomize";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button
  onClick={() => loginWithRedirect()}
  prefix={
    <Icon
      name="Logout"
      size="16px"
      color="info700"
      m={{ r: "0.5rem" }}
    />
  }
  textSize="caption"
  textColor="info700"
  hoverTextColor="info900"
  bg="white"
  hoverBg="info200"
  border="1px solid"
  borderColor="info700"
  hoverBorderColor="info900"
  rounded="circle"
  h="1.7rem"
  p={{ x: "0.75rem" }}
>
  Login
</Button>;
};

export default LoginButton;