import { Box, View } from "native-base";
import MenuButton from "./MenuButton";

export default function StaticHeader() {
    return (
        <View 
            borderRadius={30} 
            p="4"            
            width="60"
            height="60"
            alignItems="center"
            ml="5"
            style={{marginTop: 30, backgroundColor: 'white'}}>
            <MenuButton />
        </View>
    );
}