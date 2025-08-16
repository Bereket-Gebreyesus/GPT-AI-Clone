import React from "react";
import { Box, Typography, Card, Stack, Container, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import ImageRounded from "@mui/icons-material/ImageRounded";

const Homepage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      title: "Text Summarizer",
      description: "Summarize long text into short sentences",
      icon: <DescriptionRounded sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: "white" }} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      route: "/summary",
    },
    {
      title: "Paragraph Generator",
      description: "Generate detailed paragraphs with AI",
      icon: <FormatAlignLeftOutlined sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: "white" }} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      route: "/paragraph",
    },
    {
      title: "AI ChatBot",
      description: "Chat with intelligent AI assistant",
      icon: <ChatRounded sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: "white" }} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      route: "/chatbot",
    },
    {
      title: "JavaScript Converter",
      description: "Translate English to JavaScript code",
      icon: <CodeRounded sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: "white" }} />,
      gradient: "linear-gradient(135deg, #fa7093 0%, #fee140 100%)",
      route: "/js-converter",
    },
    {
      title: "Sci-Fi Image Generator",
      description: "Generate stunning sci-fi images with AI",
      icon: <ImageRounded sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: "white" }} />,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      route: "/scifi-image",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 6, md: 8 } }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            mb: { xs: 2, sm: 3 },
            fontSize: { 
              xs: "2rem", 
              sm: "2.5rem", 
              md: "3rem", 
              lg: "4rem" 
            },
            lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
          }}
        >
          AI-Powered Tools
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            px: { xs: 1, sm: 2 },
          }}
        >
          Experience the future of AI with our cutting-edge tools for text generation, 
          code conversion, and image creation
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }} 
        justifyContent="center"
        sx={{ mb: { xs: 4, sm: 6 } }}
      >
        {features.map((feature, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}
            key={index}
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              onClick={() => navigate(feature.route)}
              sx={{
                background: feature.gradient,
                height: { xs: 280, sm: 300, md: 320 },
                width: "100%",
                maxWidth: { xs: 280, sm: 320, md: 350 },
                borderRadius: { xs: 3, sm: 4 },
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  transform: isMobile ? "none" : "translateY(-12px) scale(1.02)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  "& .feature-icon": {
                    transform: isMobile ? "scale(1.05)" : "scale(1.1) rotate(5deg)",
                  },
                  "& .feature-content": {
                    transform: isMobile ? "none" : "translateY(-10px)",
                  },
                },
                "&:active": {
                  transform: isMobile ? "scale(0.98)" : "none",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(255, 255, 255, 0.1)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover::before": {
                  opacity: 1,
                },
              }}
            >
              {/* Icon */}
              <Box
                className="feature-icon"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40%",
                  transition: "transform 0.3s ease",
                  pt: { xs: 2, sm: 3 },
                }}
              >
                {feature.icon}
              </Box>

              {/* Content */}
              <Box
                className="feature-content"
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  textAlign: "center",
                  color: "white",
                  transition: "transform 0.3s ease",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 1.5, sm: 2 },
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.5rem" },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.9,
                    lineHeight: 1.6,
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>

              {/* Shine Effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  transition: "left 0.5s ease",
                }}
                className="shine-effect"
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mt: { xs: 4, sm: 6, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            mb: { xs: 2, sm: 3 },
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Ready to get started?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "600px",
            mx: "auto",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            px: { xs: 2, sm: 3 },
          }}
        >
          Choose any tool above and start exploring the power of AI. 
          No registration required for basic usage!
        </Typography>
      </Box>
    </Container>
  );
};

export default Homepage;
