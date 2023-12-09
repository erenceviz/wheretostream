// YourComponent.js
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/MyTheme";

const YourComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Your other components */}
      <Button
        variant="contained"
        style={{
          backgroundColor: theme.palette.primary.light,
          height: 25,
          width: 130,
          borderRadius: '15px',
          textTransform: 'none',
          transition: 'background-color 0.3s',
          
        }}
      >
        Make a list!
      </Button>
    </ThemeProvider>
  );
};

export default YourComponent;
