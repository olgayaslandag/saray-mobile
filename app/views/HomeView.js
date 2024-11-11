import { useState } from "react";
import { Box, Text, Stack, HStack } from "native-base";
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
      <Box px="5" flex="2">
        <Stack space={3} direction="column">        
            <HStack mt="10">
              <HeaderUser />
            </HStack>         
        </Stack>
        <SearchForm />

        
      </Box>

      <Box flex="3" style={{marginBottom: 80}}>
      <Text fontSize="24" fontWeight="700" mt="5" px="5">Yenilikler</Text>
        <HomeSlider setActive={setActive} />
      </Box>
      
    </ImageBackground>
  );
}


