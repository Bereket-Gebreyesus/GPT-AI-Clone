import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
  Container,
} from "@mui/material";

const ChatBot = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // states
  const [text, settext] = useState("");
  const [chatbot, setChatbot] = useState("");
  const [error, setError] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //chatbot ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://chatgpt-clone-server-p2dj.onrender.com/api/v1/openai/chatbot", { text });
      console.log(data);
      setChatbot(data);
    } catch (err) {
      console.log(error);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      {!loggedIn ? (
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Please{" "}
              <Link 
                to={'/login'} 
                style={{ 
                  color: "#3B82F6", 
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Log In
              </Link>{" "}
              to Continue
            </Typography>
          </Box>
        </Container>
      ) : (
        <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
          <Box
            sx={{
              width: "100%",
              p: { xs: 2, md: 3 },
              m: "2rem auto",
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
          >
            <Collapse in={error !== ''}>
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            </Collapse>
            
            <form onSubmit={handleSubmit}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 3, 
                  textAlign: "center",
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI ChatBot
              </Typography>

              <TextField
                label="Ask me anything"
                placeholder="Type your question or message here..."
                type="text"
                multiline
                rows={3}
                required
                fullWidth
                value={text}
                onChange={(e) => settext(e.target.value)}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ 
                  color: "white", 
                  mb: 3,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                Send Message
              </Button>
              
              <Typography 
                sx={{ 
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Not this tool?{" "}
                <Link 
                  to="/" 
                  style={{ 
                    color: "#3B82F6", 
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  GO BACK
                </Link>
              </Typography>
            </form>

            {chatbot ? (
              <Card
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  minHeight: "300px",
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    color: "#4facfe",
                    fontWeight: 600,
                  }}
                >
                  AI Response:
                </Typography>
                <Typography 
                  sx={{ 
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {chatbot}
                </Typography>
              </Card>
            ) : (
              <Card
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                >
                  AI response will appear here
                  <br />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mt: 1,
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                    }}
                  >
                    (Please wait a few seconds after submitting...)
                  </Typography>
                </Typography>
              </Card>
            )}
          </Box>
        </Container>
      )}
    </>
  );
};

export default ChatBot;
