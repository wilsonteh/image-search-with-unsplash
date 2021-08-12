import { createTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const theme = createTheme({
   palette: {
      primary: {
         light: teal[300],
         main: teal[400],
         dark: teal[500],
      }
   }
})

export default theme;