import { useCallback, useState, useEffect } from "react";
import { Button, Input, Icon, Text, Div, Row, Col } from "atomize";
import axios from "axios";

const MainComponent = () => {
  const [values, setMessages] = useState(["hello1"]);
  const [value, setValue] = useState("");
  const values2 = ["This", "section", "is", "inside", "collapse", "This", "section", "is", "inside", "collapse", "This", "section", "is", "inside", "collapse"];

  const getAllMessages = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get("/api/messages/all");
    setMessages(data.data.rows.map(row => row.data));

  }, []);

  const saveMessage = useCallback(
    async event => {
      event.preventDefault();

      await axios.post("/api/messages", {
        value
      });

      setValue("");
    },
    [value]
  );

  useEffect(() => {
    getAllMessages();
  }, []);



  return (
    <>
      <Div d="flex" justify="space-between">
        <Div>
          <Text tag="h1" textSize="display1" m={{ b: "1rem" }}>Messages</Text>
        </Div>
        <Div m={{ t: '0.7rem' }}>
          <Button
            prefix={
              <Icon
                name="Refresh"
                size="16px"
                color="white"
                m={{ r: "0.5rem" }}
              />
            }
            bg="warning700"
            hoverBg="warning800"
            rounded="circle"
            p={{ r: "1.5rem", l: "1rem" }}
            h="2rem"
            shadow="3"
            hoverShadow="4"
            onClick={getAllMessages}
          >
            Refresh
          </Button>
        </Div>
      </Div>

      <Div
        bg="gray100"
        border="1px solid"
        borderColor="gray400"
        rounded="lg"
        maxH="500px"
        overflow="visible scroll"
      >
        {values2.map(
          (name, index) => (
            <Div
              p={{ x: "1rem", y: "0.75rem" }}
              border={{ b: index !== values2.length-1 && "1px solid" }}
              borderColor="gray400"
            >
              {name}
            </Div>
          )
        )}

              {/* {values.size > 0
          ? values.map(value => (<div className="message">{value}</div>))
          : <Text
            m={{ t: '4rem', b: '4rem' }}
            textAlign="center"
            textSize="body"
            textColor="gray900">
            Message feed is empty
          </Text>} */}
      </Div>

      <form className="form" onSubmit={saveMessage}>
        <Input
          placeholder="Enter your message"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
          m={{ t: "1.5rem" }}
          suffix={
            <Button
              pos="absolute"
              bg="info700"
              hoverBg="info800"
              w="3rem"
              top="0"
              right="0"
              rounded={{ r: "md" }}
            >
              <Icon
                name="RightArrow"
                size="20px"
                color="white"
                cursor="pointer"
              />
            </Button>
          }
        />
      </form>
    </>
  );
};

export default MainComponent;
