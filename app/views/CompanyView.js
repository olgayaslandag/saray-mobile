import { Text, Box } from "native-base"
import { ImageBackground, StyleSheet } from "react-native"
import StaticHeader from "../components/header/StaticHeader";

const backgroundImage = 'https://saray.com/wp-content/uploads/2024/04/enerji-content.jpg';

export default function CompanyView() {
    return (
        <ImageBackground source={{uri: backgroundImage}} style={styles.background} resizeMode="cover">
            <StaticHeader />
            <Box style={styles.contentBox} p="5">
                <Text>Company</Text>
            </Box>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        width: '100%', 
        height: '100%', 
        flex: 1
    },
    contentBox: {
        backgroundColor: 'white', 
        minHeight: '100%', 
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30, 
        marginTop: '30%'
    }
})