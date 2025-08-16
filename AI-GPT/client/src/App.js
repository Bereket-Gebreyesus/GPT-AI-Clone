import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider, Box, useMediaQuery, useTheme } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";
import Footer from "./components/Footer";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #475569 75%, #64748B 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
              pointerEvents: 'none',
            },
          }}
        >
          <Navbar />
          <Box sx={{ 
            position: 'relative', 
            zIndex: 1, 
            minHeight: 'calc(100vh - 64px)',
            pb: isMobile ? '80px' : 0, // Add bottom padding for mobile bottom navigation
          }}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/paragraph" element={<Paragraph />} />
              <Route path="/chatbot" element={<ChatBot />} />
              <Route path="/js-converter" element={<JsConverter />} />
              <Route path="/scifi-image" element={<ScifiImage />} />
            </Routes>
          </Box>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                maxWidth: '90vw',
                '@media (max-width: 600px)': {
                  maxWidth: '85vw',
                  fontSize: '14px',
                  padding: '12px 16px',
                },
              },
            }}
          />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
