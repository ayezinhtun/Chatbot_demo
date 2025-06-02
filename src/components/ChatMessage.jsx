import React from 'react'
import ChatboxIcon from './Chatboxicon'

const ChatMessage = ({chat}) => {
  return (
    !chat.hideInChat && (
    <div className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message ${chat.isError ? 'error' : ""}`}>
      {chat.role === 'model' && <ChatboxIcon />}
    <p className="message-text">
      {chat.text}
      </p>
  </div>
    )
  )
}

export default ChatMessage
