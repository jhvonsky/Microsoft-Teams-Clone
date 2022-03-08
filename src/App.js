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
      projectID=process.env.PROJECT_ID
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
