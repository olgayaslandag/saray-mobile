import { Box, Stack, HStack } from "native-base";
import MenuButton from "./MenuButton";
import SearchForm from "./SearchForm";

export default function DocumentHeader() {
    return (
        <Stack direction="column" style={{marginTop: 30}}>
          <HStack>                        
            <Box 
              width="10%" 
              mr="7%" 
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
            <Box width="83%">
              <SearchForm />
            </Box>                      
          </HStack>          
        </Stack>
    );
}