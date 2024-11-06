import { Box, Input, Icon } from "native-base";
import { StyleSheet } from "react-native";
import SearchIcon from "../icons/SearchIcon";


export default function SearchForm({pt}) {
    return (
        <Box alignItems="center" w="100%" mt="5">
            <Input 
                variant="rounded" 
                placeholder="Ne Aramıştınız?" 
                w="100%" 
                size="md" 
                style={styles.searchInput} 
                pl="5"
                pt={pt ? pt : "2"}
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
                        <SearchIcon                            
                            fill="gray"
                            width={20}
                            height={20}
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
      minHeight: 40   
    }
});