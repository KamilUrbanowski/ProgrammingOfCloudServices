import { useCallback, useState, useEffect } from "react";
import { Button, Input, Icon } from "atomize";
import axios from "axios";
import "./MainComponent.css";

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
    <div>
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
    shadow="3"
    hoverShadow="4"
    onClick={getAllMessages}
  >
    Refresh
  </Button>
      <br />
      <span className="title">Messages</span>
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
    </div>
  );
};

export default MainComponent;
