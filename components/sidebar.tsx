import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const NavMenu = () => {
  const items = [
    {
      name: "Home",
      icon: MdHome,
      route: "/",
    },
    {
      name: "Search",
      icon: MdSearch,
      route: "/search",
    },
    {
      name: "Your Library",
      icon: MdLibraryMusic,
      route: "/library",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <ListItem paddingX="20px" fontSize="16px" key={item.name}>
          <LinkBox>
            <NextLink href={item.route} passHref>
              <LinkOverlay>
                <ListIcon as={item.icon} color="white" marginRight="20px" />
                {item.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </>
  );
};

const ImageLogoBox = () => (
  <Box width="120px" marginBottom="20px" paddingX="20px">
    <NextImage src="/logo.webp" height={60} width={60} />
  </Box>
);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <ImageLogoBox />

        <Box marginBottom="20px">
          <List spacing={2}>
            <NavMenu />
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
