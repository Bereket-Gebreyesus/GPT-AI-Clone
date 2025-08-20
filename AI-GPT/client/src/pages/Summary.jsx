import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
  Container,
  CircularProgress,
} from "@mui/material";

const Summary = () => {
  
  // states
  const [text, settext] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const loggedIn = localStorage.getItem("authToken");

  //summary ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isLoading) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      const token = localStorage.getItem("authToken");
      const { data } = await axios.post("http://localhost:5000/api/v1/openai/summary", { text }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(data);
      setSummary(data);
    } catch (err) {
      console.log(err);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setIsLoading(false);
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
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Summarize Text
              </Typography>

              <TextField
                label="Enter your text to summarize"
                placeholder="Add your text here..."
                type="text"
                multiline
                rows={4}
                required
                fullWidth
                value={text}
                onChange={(e) => settext(e.target.value)}
                disabled={isLoading}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isLoading}
                sx={{ 
                  color: "white", 
                  mb: 3,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  background: isLoading 
                    ? "linear-gradient(135deg, #94A3B8 0%, #64748B 100%)" 
                    : "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  "&:hover": {
                    background: isLoading 
                      ? "linear-gradient(135deg, #94A3B8 0%, #64748B 100%)" 
                      : "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)",
                  },
                  "&:disabled": {
                    background: "linear-gradient(135deg, #94A3B8 0%, #64748B 100%)",
                    transform: "none",
                    boxShadow: "none",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {isLoading ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircularProgress size={20} sx={{ color: "white" }} />
                    <span>Generating Summary...</span>
                  </Box>
                ) : (
                  "Generate Summary"
                )}
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

            {summary ? (
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
                    color: "#3B82F6",
                    fontWeight: 600,
                  }}
                >
                  Summary:
                </Typography>
                <Typography 
                  sx={{ 
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {summary}
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
                  Summary will appear here
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

export default Summary;
