import { Box, Stack, HStack } from "native-base";
import MenuButton from "../icons/MenuButton";
import SearchForm from "./SearchForm";

export default function DocumentHeader() {
    return (
        <Stack direction="column" style={{marginTop: 30}}>
          <HStack>  
            <Box width="83%">
              <SearchForm pt={2} />
            </Box>                       
            <Box 
              width="10%" 
              ml="7%" 
              justifyContent="center" 
              alignItems="flex-end" 
              mt="5"               
            >
              <Box 
                borderRadius={30} 
                p="2"
                width="50"
                height="50"
                alignItems="center">
                <MenuButton />
              </Box>
            </Box>                                   
          </HStack>          
        </Stack>
    );
}