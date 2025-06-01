import React, { useState } from 'react'
import './chatbot.css'
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
export default function Chatbot() {
    const [input, setInput] = useState('');
    const [chat, setChat] = useState([]);
    const [showChat, setShowChat] = useState(false);

    const API_KEY = import.meta.env.VITE_OPEN_API_KEY

    const handleClick = async () => {
        try {

            setChat((prev) => ([...prev, { role: 'user', content: input }]));

            const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'mistralai/mistral-7b-instruct',
                    messages: [
                        { role: 'user', content: input }
                    ]
                })
            })
            const data = await res.json();
            console.log(data);
            const botReply = data.choices?.[0]?.message?.content || "No response";
            setChat((prev) => ([...prev, { role: 'assistant', content: botReply }]));

            setInput('');

        } catch (err) {
            alert('Error in generating response')
        }
    }
    return (
        <div className='chatbot-container'>
            <button className="chatbot-toggle" onClick={()=>setShowChat(!showChat)}><TbMessageChatbotFilled /></button>
            {
                showChat && (
                    <div className="chatbox">
                        <div className='chatbox-header'>
                            <h3>Chat With Us</h3>
                            <button onClick={()=>setShowChat(false)}><IoMdClose /></button>
                        </div>
                        <div className='chatbox-body'>
                            {
                                chat.map((ans, index) => (
                                    <div key={index} className={`chat-msg ${ans.role}`}>
                                        <p>{ans.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='chatbox-footer'>
                            <input
                                type="text"
                                placeholder='Ask Me Something'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e)=>e.key == 'Enter' && handleClick()}
                            />
                            <button onClick={handleClick}>Send</button>
                            <button onClick={()=>setChat([])}>Clear</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
