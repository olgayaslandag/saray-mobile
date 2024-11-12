import { useRef, useEffect } from "react";
import { Box, Input } from "native-base";
import SearchIcon from "../icons/SearchIcon";
import { StyleSheet, Keyboard } from "react-native";

export default function SearchFormInput({ pt, search, setSearch, order, setOpen, width="100%" }) {        
    const ref = useRef(null);

    useEffect(() => {
        if(order === 2)
            ref.current.focus();
    }, [search, order]);

    function HandleFocus() {
        if(order === 1) {
            Keyboard.dismiss();
            setOpen(true)
        }            
    }
    return (
        <Input 
            variant="rounded" 
            placeholder="Ne Aramıştınız?" 
            w={width}
            size="md" 
            style={styles.searchInput} 
            pl="5"
            pt={pt ? pt : "2"}
            onFocus={HandleFocus}
            ref={ref}
            editable={order === 2 ? true : false}
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
            onChangeText={setSearch}
            value={search}
        />
    );
}


const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: 'white' ,
        minHeight: 40,
      },
});