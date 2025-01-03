import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import Smiles from "../../images/smiley.gif";
import Marquee from "react-fast-marquee";

const Forums = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const API_URL = "https://sheetdb.io/api/v1/pdrvqe7sqns3c";

  // Fetch messages from the API
  const fetchMessages = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMessages(data); // Assuming the API returns an array of message objects
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Send a new message to the API
  const sendMessage = async () => {
    if (!message.trim()) return; // Prevent empty messages
    try {
      const newMessage = { message }; // Adjust to match your API's data structure
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });
      setMessage(""); // Clear input field
      fetchMessages(); // Refresh messages after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Handle emoji selection
  const onEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    fetchMessages(); // Fetch messages on component mount
    const interval = setInterval(fetchMessages, 5000); // Poll messages every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const Dos = () => alert("Voice message feature coming soon");

  return (
    <div>
      <section className="forum_wrap pt-5" style={styles.forum_wrap}>
        <div style={styles.container}>
          <div style={styles.header}>
            <span style={styles.topic}>🏠 TOPIC: Nigeria Entertainment</span>
          </div>
          <div style={styles.chatWindow}>
            {messages.map((msg, index) => (
              <div key={index} style={styles.messageContainer}>
                <div style={styles.dp}>{msg.sender || "?"}</div>
                <div style={styles.message}>{msg.message}</div>
              </div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Type your message..."
              style={styles.input}
              value={message}
              onChange={handleInputChange}
            />
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <img width="25px" src={Smiles} alt="smileys" />
            </button>
            <button>
              <span onClick={Dos} className="bi bi-mic-fill"></span>
            </button>
            {showEmojiPicker && (
              <div style={styles.emojiPicker}>
                <EmojiPicker
                  emojiStyle="facebook"
                  onEmojiClick={onEmojiClick}
                />
              </div>
            )}
            <button style={styles.sendButton} onClick={sendMessage}>
              SEND
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-5">
              <div style={styles.caution} className="caution text-white mb-2">
                <Marquee>
                  &nbsp; &nbsp; &nbsp; Hello there, welcome to Slattlife forum.
                  Please maintain good chat etiquette. No foul language, no
                  advertising, no trading, and no drug-related content. SLATT!
                  👌👌👌
                </Marquee>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
};



export default Forums;

const styles = {
  caution: {
    width: "15em",
    height: "1.9em",
    backgroundColor: "black",
    paddingBottom: "10px",
    paddingLeft: "10px",
  },

  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  forum_wrap: {
    backgroundColor: "red",
    height: "100vh",
  },
  header: {
    backgroundColor: "#0d6efd",
    color: "white",
    padding: "10px 15px",
    textAlign: "center",
  },
  topic: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  chatWindow: {
    padding: "15px",
    height: "300px",
    overflowY: "scroll",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  dp: {
    width: "35px",
    height: "35px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    flexShrink: 0, // Prevent the DP from shrinking
  },
  message: {
    display: "inline-block",
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "15px",
    maxWidth: "100%",
    marginLeft: "10px", // Ensure there's space between DP and message
    wordWrap: "break-word", // Ensure long words break to the next line
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderTop: "1px solid #ccc",
    position: "relative",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "15px",
    marginRight: "10px",
    fontSize: "16px",
    outline: "none",
  },
  sendButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: "16px",
  },
  emojiPicker: {
    position: "absolute",
    bottom: "50px",
    right: "10px",
    zIndex: 1000,
  },
  "@media (max-width: 600px)": {
    container: {
      width: "90%",
    },
    inputContainer: {
      flexDirection: "column",
    },
    input: {
      marginBottom: "10px",
      marginRight: "0",
    },
    sendButton: {
      width: "100%",
    },
  },
};