import { useState } from "react";
import { Box, Button, HStack, Text } from "native-base";
import { StyleSheet, Modal } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import SearchFormInput from "./SearchFormInput";
import SearchResult from "../search/SearchResult";


export default function SearchForm({ pt }) {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    function HandleClose() {
        setSearch("");
        setOpen(false)
    }
    
    return (
        <Box alignItems="center" w="100%" mt="5">
            {!search && !open && <SearchFormInput pt={pt} search={search} setSearch={setSearch} order={1} setOpen={setOpen} />}            

            <Modal animationType="slide" visible={search || open ? true : false} transparent={false}>
                <Box style={{flex: 1}}>
                    <Box style={styles.modalContent}>
                        <HStack width="100%" p="5" pb="0">                            
                            <SearchFormInput search={search} setSearch={setSearch} order={2} width="90%" />
                            <Button size="sm" variant={"ghost"} onPress={HandleClose}>                                
                                <FontAwesome5 name="times" size={20} color="black" />
                            </Button>
                        </HStack>
                        <SearchResult />
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#fff', 
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        /*
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        */
    }
});