import { Fragment } from "react";
import { Container, Div, Row, Col, Button, Icon, Text } from "atomize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
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
                  Hello, Janusz 
                  </Text>

                  <Button
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
                    Logout
                  </Button>
                </Div>

                <Div className="main">
                  <Route exact path="/" component={MainComponent} />
                  <Route path="/otherpage" component={OtherPage} />
                </Div>


              </Div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    </Router>
  );
};

export default App;
