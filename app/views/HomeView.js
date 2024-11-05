import { Box, Text, Stack, HStack, VStack, Input, Icon, FlatList } from "native-base";
import { ImageBackground } from "react-native";
import HeaderUser from "../components/header/HeaderUser";
import SearchForm from "../components/header/SearchForm";
import HomeSlider from "../components/HomeSlider";




export default function HomeScreen() {
  return (
    <ImageBackground 
      source={{uri: ''}} 
      style={{ width: "100%", height: "100%" }} 
      resizeMode="cover">
      <Box flex="1" px="5">
        <Stack space={3} direction="column">        
          <VStack>
            <HStack mt="10">
              <HeaderUser />
            </HStack>
            <HStack>
              <SearchForm />
            </HStack>
            <HStack>
              <Text fontSize="24" fontWeight="700" mt="3">Yenilikler</Text>
            </HStack>
            <HStack>
              <HomeSlider />
            </HStack>
          </VStack>        
        </Stack>
      </Box>
    </ImageBackground>
  );
}


