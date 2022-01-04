import { Link } from "react-router-dom";
import { Div, Text } from "atomize";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Div onclick= {loginWithRedirect()}>
        <Text 
        tag="h1"
          textSize="display1"
          m={{ b: "1rem" }}
          textAlign="center">
            Redirecting to login page...
            </Text>
      </Div>
  </>
  );
};

export default LoginPage;
