import React from "react";

function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username === message.sender.username;

  return (
    <div>
      {isFirstMessageByUser && (
        <div
          className="message-avatart"
          style={{ background: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginRight: "18px",
            color: "white",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
          dangerouslySetInnerHTML={{ __html: message.text }}
        />
      )}
    </div>
  );
}

export default TheirMessage;
