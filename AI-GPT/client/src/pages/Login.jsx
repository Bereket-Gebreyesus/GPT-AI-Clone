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
  Container,
  CircularProgress,
} from "@mui/material";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //login ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isLoading) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await axios.post("http://localhost:5000/api/v1/auth/login", { email, password });
      toast.success("Logged in Successfully");
      localStorage.setItem("authToken", response.data.token);
      navigate("/");
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
    <Container maxWidth="sm" sx={{ py: { xs: 2, md: 4 } }}>
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
            Login
          </Typography>

          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            sx={{ mb: 2 }}
          />
          
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              mb: 2,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              background: isLoading 
                ? "linear-gradient(135deg, #94A3B8 0%, #64748B 100%)" 
                : "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              "&:hover": {
                background: isLoading 
                  ? "linear-gradient(135deg, #94A3B8 0%, #64748B 100%)" 
                  : "linear-gradient(135deg, #059669 0%, #047857 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)",
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
                <span>Logging in...</span>
              </Box>
            ) : (
              "Login"
            )}
          </Button>
          
          <Typography 
            sx={{ 
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            Don't have an account?{" "}
            <Link 
              to="/register" 
              style={{ 
                color: "#3B82F6", 
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#60A5FA";
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#3B82F6";
                e.target.style.textDecoration = "none";
              }}
            >
              Register
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
