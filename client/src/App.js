import { Fragment } from "react";
import { Container, Div, Row, Col, Button, Icon, Text } from "atomize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainComponent from "./MainComponent";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

<<<<<<< HEAD
const App = () => {
  const { error, user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if(isAuthenticated){
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
  }
  else{
    return (
      <LoginPage></LoginPage>
    );
  }
};
=======
function App() {
    return (
        <Router>
            <Fragment>
                <header className="header">
                    <div>Message APP!</div>
                    <Link to="/">Home</Link>
                    <Link to="/otherpage">Other page</Link>
                </header>
                <div className="main">
                    <Route exact path="/" component={MainComponent} />
                    <Route path="/otherpage" component={OtherPage} />
                </div>
            </Fragment>
        </Router>
    );
}
>>>>>>> 306a8295ea2eb9be360365b0b1b3ef8ece417bae

export default App;
