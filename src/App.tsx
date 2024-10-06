import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`, // for mobile devices, we will use smaller display layout
        lg: `"nav nav" "aside main"`,
      }} // for devices that are larger than 1024 px}} // for devices that are larger than 1024 px}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="lightblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
