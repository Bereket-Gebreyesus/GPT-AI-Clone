export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F8FAFC",
    50: "#F1F5F9",
    100: "#E2E8F0",
    200: "#CBD5E1",
    300: "#94A3B8",
    400: "#64748B",
    500: "#475569",
    600: "#334155",
    700: "#1E293B",
    800: "#0F172A",
    900: "#020617",
    1000: "#000000",
  },
  primary: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  gradient: {
    primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    success: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    warning: "linear-gradient(135deg, #fa7093 0%, #fee140 100%)",
    info: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    dark: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
    glass: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
  },
  glass: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "rgba(255, 255, 255, 0.2)",
    shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  }
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: 'light',
      primary: {
        main: colorTokens.primary[500],
        light: colorTokens.primary[100],
        dark: colorTokens.primary[700],
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f50057',
        light: '#ff5983',
        dark: '#c51162',
        contrastText: '#ffffff',
      },
      background: {
        default: '#0F172A',
        paper: 'rgba(255, 255, 255, 0.05)',
        gradient: colorTokens.gradient.dark,
      },
      text: {
        primary: '#ffffff',
        secondary: '#94A3B8',
      },
      success: {
        main: '#10B981',
        light: '#34D399',
        dark: '#059669',
      },
      warning: {
        main: '#F59E0B',
        light: '#FBBF24',
        dark: '#D97706',
      },
      error: {
        main: '#EF4444',
        light: '#F87171',
        dark: '#DC2626',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        background: colorTokens.gradient.primary,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        background: colorTokens.gradient.secondary,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        color: '#ffffff',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: '#ffffff',
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
        color: '#ffffff',
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
        color: '#ffffff',
      },
      body1: {
        fontSize: '1rem',
        color: '#94A3B8',
      },
      body2: {
        fontSize: '0.875rem',
        color: '#64748B',
      },
    },
    shape: {
      borderRadius: 16,
    },
    shadows: [
      'none',
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
      '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
      '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
      '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
      '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
      '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
      '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
      '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
      '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
      '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
      '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
      '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
      '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
      '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
      '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
      '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
      '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
      '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
      '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
      '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
      '0px 12px 16px -8px rgba(0,0,0,0.2),0px 25px 40px 3px rgba(0,0,0,0.14),0px 10px 48px 9px rgba(0,0,0,0.12)',
      '0px 12px 17px -8px rgba(0,0,0,0.2),0px 26px 42px 3px rgba(0,0,0,0.14),0px 10px 50px 9px rgba(0,0,0,0.12)',
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
            '&:hover': {
              boxShadow: '0 6px 20px 0 rgba(0, 118, 255, 0.49)',
            },
          },
          contained: {
            background: colorTokens.gradient.primary,
            '&:hover': {
              background: colorTokens.gradient.secondary,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 20,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            marginTop: '16px',
            marginBottom: '16px',
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              '&:hover': {
                border: '1px solid rgba(255, 255, 255, 0.2)',
              },
              '&.Mui-focused': {
                border: '1px solid rgba(59, 130, 246, 0.5)',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
              },
              '& input': {
                color: '#ffffff',
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.5)',
                  opacity: 1,
                },
              },
              '& textarea': {
                color: '#ffffff',
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.5)',
                  opacity: 1,
                },
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              fontWeight: 500,
              '&.Mui-focused': {
                color: 'rgba(59, 130, 246, 0.8)',
              },
              '&.MuiFormLabel-filled': {
                color: 'rgba(255, 255, 255, 0.9)',
              },
            },
            '& .MuiFormHelperText-root': {
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.75rem',
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': {
              color: 'rgba(59, 130, 246, 0.8)',
            },
            '&.MuiFormLabel-filled': {
              color: 'rgba(255, 255, 255, 0.9)',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem',
            fontWeight: 500,
            '&.Mui-focused': {
              color: 'rgba(59, 130, 246, 0.8)',
            },
            '&.MuiFormLabel-filled': {
              color: 'rgba(255, 255, 255, 0.9)',
            },
            '&.MuiInputLabel-shrink': {
              transform: 'translate(14px, -12px) scale(0.75)',
              backgroundColor: '#0F172A',
              padding: '0 8px',
              borderRadius: '4px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#0F172A',
                borderRadius: '4px',
                zIndex: -1,
              },
            },
          },
          outlined: {
            '&.MuiInputLabel-shrink': {
              transform: 'translate(14px, -12px) scale(0.75)',
              backgroundColor: '#0F172A',
              padding: '0 8px',
              borderRadius: '4px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#0F172A',
                borderRadius: '4px',
                zIndex: -1,
              },
            },
          },
        },
      },
    },
  };
};
