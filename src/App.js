
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feedbar from "./components/Feedbar";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar />
        <Feedbar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
