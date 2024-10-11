import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"} // the images will fit into the box without being distorted
                src={getCroppedImageUrl(g.image_background)}
              ></Image>
              <Button
                whiteSpace="normal" // avoid the button overlapping with the text
                textAlign={"left"}
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"lg"}
                variant={"link"}
                onClick={() => onSelectedGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
