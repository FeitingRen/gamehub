import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="250px " borderRadius={10} overflow={"hidden"} height={"300px"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
