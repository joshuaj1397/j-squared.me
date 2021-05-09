import './App.css';
import Home from './components/Home/Home';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3bdeff"
    },
    secondary: {
      main: "#fdff87"
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home>
        </Home>
      </ThemeProvider>
    </div>
  );
}

export default App;
