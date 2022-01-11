import {Header} from "./ui/Header";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./ui/Theme";
import {Button} from "@material-ui/core";



const App = () => {
  return (
      <ThemeProvider theme={theme} >
        <Header />
        <Button color="secondary" variant="contained">Hello!</Button>
      </ThemeProvider>
  );
}

export default App;
