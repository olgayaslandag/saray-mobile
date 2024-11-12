import { useRef } from "react";
import { Box, Image, Text } from "native-base";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
    {
        id: 1,
        title: 'Alüminyum Ekstrüzyon',
        img: require('../../assets/home/home-ekstruzyon.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-ekstruzyon.jpg')
    },
    /*
    {
        id: 2,
        title: 'Geri Dönüşüm Merkezi & Biyet Döküm',
        img: require('../../assets/home/home-ekstruzyon.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-ekstruzyon.jpg')
    },
    */
    {
        id: 3,
        title: 'PVC Sistemleri',
        img: require('../../assets/home/home-pvc.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-pvc.jpg')
    },
    {
        id: 4,
        title: 'Kompozit Panel',
        img: require('../../assets/home/home-kompozit.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-kompozit.jpg')
    },
    {
        id: 5,
        title: 'Panjur ve Kepenk Sistemleri',
        img: require('../../assets/home/home-panjur.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-panjur.jpg')
    },
    {
        id: 6,
        title: 'Turizm',
        img: require('../../assets/home/home-turizm.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-turizm.jpg')
    },
    {
        id: 7,
        title: 'Enerji',
        img: require('../../assets/home/home-enerji.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-enerji.jpg')
    },
];


const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;


function Item({ title, index, img }) {
    return (
        <Box style={{...styles.item, marginRight: index === DATA.length-1 ? 20 : 15}}>
            <Image source={img} alt={title} width={ITEM_WIDTH} height="100%" style={styles.image} resizeMode="cover"></Image>
            
            <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)']} style={{...styles.overlayTitle, width: ITEM_WIDTH}}>
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>            
        </Box>
    );
}
export default function HomeSlider({ setActive }) {
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 60, 
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const firstVisibleItem = viewableItems[0].item;
            setActive(firstVisibleItem);
        }
    }).current;


    return (
        <Box flex="1">
            <FlatList
                data={DATA}
                renderItem={({item, index}) => <Item index={index} title={item.title} img={item.img} />}
                keyExtractor={(item, index) => index}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_WIDTH + 20}
                snapToAlignment="center"
                pagingEnabled
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                
            />  
        </Box>      
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 0,
    },
    item: {
      marginVertical: 8,
      marginHorizontal: 0,    
      width: ITEM_WIDTH,
      marginRight: 15,
      position: 'relative',
    },
    title: {
      fontSize: 32,
    },
    image: {
        borderRadius: 30,
        marginLeft: 20
    },
    overlayTitle: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 20,
        height: "100%",
        padding: 20,
        justifyContent: 'flex-end',    
        borderRadius: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
        color: 'white',
    }
  });