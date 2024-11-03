import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Box, Input, Icon } from "native-base";
import { StyleSheet } from "react-native";


export default function SearchForm() {
    return (
        <Box alignItems="center" w="100%" mt="5">
            <Input 
                variant="rounded" 
                placeholder="Ne Aramıştınız?" 
                w="100%" 
                size="xl" 
                style={styles.searchInput} 
                pl="5"
                InputRightElement={
                    <Box 
                        bg="white" 
                        borderRadius="10" 
                        p="2" 
                        mr="2"
                        style={{ 
                            position: 'absolute', 
                            right: 0, 
                            height: '100%', 
                            justifyContent: 'center' 
                        }}>
                        <Icon
                            as={<FontAwesome5 name="search" />}
                            size="5"
                            color="gray.400"
                        />
                    </Box>                      
                } 
            />
        </Box>
    );
}

const styles = StyleSheet.create({
    searchInput: {
      backgroundColor: 'white' ,
      minHeight: 55   
    }
});