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
} from "@mui/material";

const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://chatgpt-clone-server-p2dj.onrender.com/api/v1/auth/register", {
        username,
        email,
        password
      });
      toast.success("User Registered Successfully");
      navigate("/login");
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
            Register
          </Typography>
          
          <TextField
            label="Username"
            required
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              color: "white", 
              mb: 2,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            Register
          </Button>
          
          <Typography 
            sx={{ 
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            Already have an account?{" "}
            <Link 
              to="/login" 
              style={{ 
                color: "#3B82F6", 
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Login
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
