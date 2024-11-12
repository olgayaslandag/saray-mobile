import { useState } from "react";
import { Box, Button, HStack, Text } from "native-base";
import { StyleSheet, Modal, TouchableOpacity } from "react-native";
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
            {!search && !open && (
                <TouchableOpacity activeOpacity={1} onPress={() => setOpen(true)}>
                    <SearchFormInput pt={pt} search={search} setSearch={setSearch} order={1} setOpen={setOpen} />
                </TouchableOpacity>
            )}            
            
            <Modal animationType="slide" visible={search || open ? true : false} transparent={false}>
                <Box style={styles.modal.container}>
                    <HStack width="100%" px="5" pt="2" pb="0">                            
                        <SearchFormInput search={search} setSearch={setSearch} order={2} width="90%" />
                        <Box style={styles.modal.close}>
                            <Button size="md" variant={"ghost"} onPress={HandleClose} p="0">                                
                                <FontAwesome5 name="times" size={20} color="black" />
                            </Button>
                        </Box>
                    </HStack>
                    
                    <SearchResult search={search} />
                </Box>
            </Modal>
        </Box>
    );
}

const styles = StyleSheet.create({
    modal: {
        container: {
            flex: 1,
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
        },
        close: {
            flex: 1, 
            alignItems: 'flex-end', 
            justifyContent: 'center'
        }
    } 
});