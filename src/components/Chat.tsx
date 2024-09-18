import React, { useState, useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider, useMutation } from "react-query";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessageMutation = useMutation(
    (message: string) =>
      fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message }), // Send the message in the body as JSON
      }).then((res) => res.text()),
    {
      onSuccess: (data) => {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data,
          isUser: false,
        };
        console.log(data);
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      },
      onError: (err) => {
        const errorMessage: Message = {
          id: Date.now() + 1,
          text: "Sorry, I couldn't process your request.",
          isUser: false,
        };
        console.error(err);
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      },
    }
  );

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage: Message = { id: Date.now(), text: input, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    sendMessageMutation.mutate(input);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
                message.isUser
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={sendMessage}
        className="p-4 bg-white border-t border-gray-200"
      >
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            disabled={sendMessageMutation.isLoading}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {sendMessageMutation.isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
