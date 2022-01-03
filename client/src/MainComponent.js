import { useCallback, useState, useEffect } from "react";
import { Button, Input, Icon, Text, Div, Row, Col } from "atomize";
import axios from "axios";

const MainComponent = () => {
  const [values, setMessages] = useState([]);
  const [value, setValue] = useState("");

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
      <Div d="flex" justify="space-between" m={{ b: '2rem' }}>
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

      <div className="messages">
        {values.map(value => (
          <div className="message">{value}</div>
        ))}
      </div>
      <form className="form" onSubmit={saveMessage}>
        <Input
          placeholder="Enter your message"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
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
    </Div>
  );
};

export default MainComponent;
