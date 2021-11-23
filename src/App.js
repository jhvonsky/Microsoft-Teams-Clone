import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import Login from "./components/Login";

function App() {
  if (!localStorage.getItem("username")) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID="2f5560e9-c369-45eb-80f4-a8e771dba6e1"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default App;
