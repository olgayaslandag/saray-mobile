import { useState } from "react";
import { Box, Text, Stack, HStack, VStack } from "native-base";
import { ImageBackground } from "react-native";
import HeaderUser from "../components/header/HeaderUser";
import SearchForm from "../components/header/SearchForm";
import HomeSlider from "../components/HomeSlider";


export default function HomeScreen() {
  const [active, setActive] = useState({});

  return (
    <ImageBackground 
      source={active.bgimage}
      style={{ width: "100%", height: "100%" }} 
      resizeMode="cover">
      <Box px="5">
        <Stack space={3} direction="column">        
            <HStack mt="10">
              <HeaderUser />
            </HStack>
         
        </Stack>
        <SearchForm />

        <Text fontSize="24" fontWeight="700" mt="5">Yenilikler</Text>
      </Box>


      <HomeSlider setActive={setActive} />

      
    </ImageBackground>
  );
}


