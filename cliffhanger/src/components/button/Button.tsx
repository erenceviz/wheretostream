// YourComponent.js
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/MyTheme";

const YourComponent = ({ buttonText, buttonType }) => {
  let buttonStyles = {};

  // Set different styles based on the buttonType
  if (buttonType === "makeList") {
    buttonStyles = {
      backgroundColor: theme.palette.primary.light,
      // height: 25,
      // width: 130,
      // borderRadius: '15px',
    };
  } else if (buttonType === "movies") {
    // Add specific styles for "Movies" button if needed
  } else if (buttonType === "tvShows") {
    // Add specific styles for "TV Shows" button if needed
  }

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        style={{
          ...buttonStyles,
          marginLeft: 10,
          height:25,
          borderRadius: 15,
          textTransform: 'none',
          transition: 'background-color 0.3s',
         
        }}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

export default YourComponent;
