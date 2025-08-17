import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  useTheme, 
  Button, 
  Container, 
  useMediaQuery,
  AppBar,
  Toolbar,
  BottomNavigation,
  BottomNavigationAction
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const [mobileValue, setMobileValue] = useState(location.pathname);

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("https://chatgpt-clone-server-p2dj.onrender.com/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logged out successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const navItems = loggedIn ? [
    { text: "Home", route: "/", icon: <HomeIcon />, value: "/" },
    { text: "Logout", action: handleLogout, icon: <LogoutIcon />, isPrimary: true, value: "logout" }
  ] : [
    { text: "Home", route: "/", icon: <HomeIcon />, value: "/" },
    { text: "Register", route: "/register", icon: <PersonAddIcon />, value: "/register" },
    { text: "Login", route: "/login", icon: <LoginIcon />, isPrimary: true, value: "/login" }
  ];

  // Handle mobile navigation change
  const handleMobileNavChange = (event, newValue) => {
    setMobileValue(newValue);
    
    if (newValue === 'logout') {
      handleLogout();
    } else {
      navigate(newValue);
    }
  };

  // Update mobile value when location changes
  React.useEffect(() => {
    setMobileValue(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <AppBar 
        position="sticky" 
        sx={{ 
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          {/* Logo */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              cursor: "pointer",
              flexGrow: 1,
              "&:hover": {
                background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              },
            }}
          >
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              AI GPT Clone
            </Link>
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={item.action ? "button" : Link}
                to={item.route}
                onClick={item.action}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: item.isPrimary ? 600 : 500,
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  ...(item.isPrimary ? {
                    background: item.text === "Logout" 
                      ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    "&:hover": {
                      background: item.text === "Logout"
                        ? "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)"
                        : "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: item.text === "Logout"
                        ? "0 8px 25px rgba(245, 87, 108, 0.4)"
                        : "0 8px 25px rgba(102, 126, 234, 0.4)",
                    },
                  } : {
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.2)",
                      transform: "translateY(-2px)",
                    },
                  }),
                  transition: "all 0.3s ease",
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <BottomNavigation
          value={mobileValue}
          onChange={handleMobileNavChange}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 -8px 32px 0 rgba(31, 38, 135, 0.37)",
            '& .MuiBottomNavigationAction-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              '&.Mui-selected': {
                color: '#ffffff',
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: '0.75rem',
                fontWeight: 500,
              },
            },
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.text}
              label={item.text}
              value={item.value}
              icon={item.icon}
              sx={{
                '&.Mui-selected': {
                  '& .MuiBottomNavigationAction-label': {
                    fontWeight: 600,
                  },
                },
              }}
            />
          ))}
        </BottomNavigation>
      )}
    </>
  );
};

export default Navbar;
