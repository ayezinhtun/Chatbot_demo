import React from "react";
import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
 
    //Update chat history with the user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    //Add a Thinking.. placeholder for the bot's response
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);


      //call the function to generate the bot's response
      generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
    }, 600);



   
  }
  return (
    <div>
       <form action="" className="chat-form" onSubmit={handleFormSubmit}>
              <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
              <button className="material-symbols-rounded">keyboard_arrow_up</button>
       </form>
    </div>
  )
}

export default ChatForm
