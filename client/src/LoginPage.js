import { Link } from "react-router-dom";
import { Div, Text } from "atomize";

const LoginPage = () => {
  return (
    <>
      <Div>
        <Text tag="h1"
          textSize="display1"
          m={{ b: "1rem" }}
          textAlign="center">
            Login
            </Text>
      </Div>
      <Div>
        Login panel
      </Div>
  </>
  );
};

export default LoginPage;
