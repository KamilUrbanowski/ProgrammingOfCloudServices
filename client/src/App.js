import { Fragment } from "react";
import { Container, Div, Row, Col, Text } from "atomize";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainComponent from "./MainComponent";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const App = () => {
  const { error, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <Router>
        <Fragment>
          <Container maxW={{ xs: "auto", sm: "575px" }} >
            <Row justify="center">
              <Col size="12">
                <Div p="80px 0">
                  {/* <div>Message APP!</div>
                  <Link to="/">Home</Link>
                  <Link to="/otherpage">Other page</Link> */}
                  <Div d="flex" justify="space-between" p={{ md: '0.5rem' }}>
                    <Text m={{ r: "0.8rem" }}>
                      Hello, {user.name}
                    </Text>
                    <LogoutButton></LogoutButton>
                  </Div>
                  <Div
                    border="1px solid"
                    borderColor="gray200"
                    rounded="xl"
                    background="white"
                    shadow="4"
                    overflow="hidden"
                    p="32px"
                    m="0 0 40px 0"
                  >
                    <Route exact path="/" component={MainComponent} />
                    <Route path="/login" component={LoginPage} />
                  </Div>
                </Div>
              </Col>
            </Row>
          </Container>
        </Fragment>
      </Router>
    );
  } else {
    return (
      <LoginPage></LoginPage>
    );
  }
};

export default App;
