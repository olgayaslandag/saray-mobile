import { HStack, ScrollView, Stack, Text, Box } from "native-base"
import StaticHeader from "../components/header/StaticHeader";
import { StyleSheet } from "react-native";

const items = [1, 2, 3, 4, 5, 6];

export default function NotificationsView() {    
    return (
        <ScrollView style={styles.container}>            
                <Stack>
                    <HStack>                        
                        <Text style={styles.title} pl="5">Bildirimler</Text>
                        <StaticHeader />
                    </HStack>
                </Stack>

                <Box p="5">
                {items.map((item, index) => (
                    <Box key={index} style={{...styles.text, borderBottomWidth: index + 1 === items.length ? 0 : 1}}>
                        <Text style={{fontSize: 16}}>1980 yılından bu yana Saray Alüminyum, öncü ve yenilikçi iç ve dış mekan çözümleri ile geleceğin mimari yapılarını inşa etmede büyük bir rol oynamaktadır. Saray Alüminyum, sektörlerin ihtiyaç duyduğu endüstriyel ve standart kesitli profiller üreten kapı, pencere, cephe ve küpeşte sistemleri, alüminyum kompozit panel, PVC kapı ve pencere sistemleri, panjur sistemlerinin yanı sıra makine, aydınlatma, asansör vb. sektörlerine de üretim yapmaktadır.</Text>
                    </Box>
                ))}
            </Box>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingBottom: 130
    },
    title: {
        flex: 1,
        marginTop: 30, 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 600,
        paddingTop: 25,
    },
    text: {
        paddingBottom: 15, 
        marginBottom: 15, 
        fontSize: 18
    }
});