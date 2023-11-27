import { useState } from "react";
import "../../App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";
import { baseurl } from "../../utils/BaseUrl";

function OcrFile({ pdfDoc, userId }) {
  console.log(pdfDoc);
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(true); // State to control the visibility of options

  const handleOptionClick = async (option) => {
    await handleUserMessage(option); // Send option to backend
    setShowOptions(false); // Hide options after sending
  };

  const handleUserMessage = async (userMessage) => {
    const formData = new FormData();
    formData.append("pdfFile", pdfDoc);
    formData.append("userQuestion", userMessage);
    formData.append("userId", userId);

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${baseurl}/api/pdf/getImageResult`,
        formData
      );
      const confirm = response.data.chat_history;

      const newUserMessage = {
        message: userMessage,
        sender: "user",
        direction: "outgoing",
      };

      const updatedChatMessages = [...chatMessages, newUserMessage];
      if (confirm) {
        updatedChatMessages.push({
          message: confirm,
          sender: "backend",
        });
      }

      setChatMessages(updatedChatMessages);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "90vh",
          width: "700px",
          margin: "auto",
        }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                isLoading ? <TypingIndicator content="Pdf is thinking" /> : null
              }
            >
              {chatMessages.map((message, i) => (
                <Message
                  key={i}
                  model={message}
                  style={message.sender === "Pdf " ? { textAlign: "left" } : {}}
                />
              ))}

              {showOptions && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    margin: "auto",
                    borderColor: "rgba(0,0,0,.1)",
                  }}
                >
                  {/* Option buttons with specific content */}
                  <div style={{ display: "flex" }}>
                    <button
                      className="mx-3"
                      style={{
                        border: "2px solid #000",
                        borderRadius: "20px",
                        // margin: "10px",
                        width: "320px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleOptionClick("Find a summary of the document")
                      }
                    >
                      <div class="flex flex-col overflow-hidden">
                        <div class="truncate font-normal">Find Summary</div>
                        <div class="truncate opacity-50">
                          Get a quick summary of the PDF content
                        </div>
                      </div>
                    </button>

                    <button
                      className="mx-3"
                      style={{
                        border: "2px solid #000",
                        borderRadius: "20px",
                        cursor: "pointer",
                        width: "320px",
                      }}
                      onClick={() =>
                        handleOptionClick("Locate a specific section")
                      }
                    >
                      <div class="flex flex-col overflow-hidden">
                        <div class="truncate font-normal">Locate Section</div>
                        <div class="truncate opacity-50">
                          Find a specific section or chapter
                        </div>
                      </div>
                    </button>
                  </div>

                  <div style={{ display: "flex" }}>
                    <button
                      className="mx-3"
                      style={{
                        border: "2px solid #000",
                        borderRadius: "20px",
                        cursor: "pointer",
                        width: "320px",
                        height: "55px",
                        margin: "10px",
                      }}
                      onClick={() => handleOptionClick("Translate a paragraph")}
                    >
                      <div class="flex flex-col overflow-hidden">
                        <div class="truncate font-normal">
                          Translate Paragraph
                        </div>
                        <div class="truncate opacity-50">
                          Get a translation of a selected paragraph
                        </div>
                      </div>
                    </button>

                    <button
                      className="mx-3"
                      style={{
                        border: "2px solid #000",
                        borderRadius: "20px",
                        margin: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        handleOptionClick("Extract data or figures")
                      }
                    >
                      <div class="flex flex-col overflow-hidden">
                        <div class="truncate font-normal">Extract Data</div>
                        <div class="truncate opacity-50">
                          Pull out specific data or figures from the PDF
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </MessageList>

            <MessageInput
              placeholder="Type Message here"
              onSend={handleUserMessage}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
}

export default OcrFile;
