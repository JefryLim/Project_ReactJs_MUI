import { Button, styled } from "@mui/material";

function App() {

  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    }
  }));

  return (
    <div>
      <Button variant="text" >Text</Button>
      <Button variant="contained" color="primary">Contained</Button>
      <Button variant="outlined" color="primary">Outlined</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained" size="small" disableElevation>
        Disable elevation
      </Button>

      <Button variant="contained" sx={{
        backgroundColor: "skyblue",
        color: "#888",
        margin: 5,
        "&:hover": {
          backgroundColor: "lightblue",
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "white",
        }
      }}>
        wew
      </Button>

      <BlueButton>
        wew 2
      </BlueButton>
    </div>
  );
}

export default App;
