import { useRef } from "react";
import { Box, Image, Text } from "native-base";
import { StyleSheet, FlatList, Dimensions } from "react-native";

const DATA = [
    {
        id: 1,
        title: 'Alüminyum Ekstrüzyon',
        desc: 'Gündem',
        img: require('../../assets/home/home-ekstruzyon.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-ekstruzyon.jpg')
    },
    /*
    {
        id: 2,
        title: 'Geri Dönüşüm Merkezi & Biyet Döküm',
        desc: 'Gündem',
        img: require('../../assets/home/home-ekstruzyon.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-ekstruzyon.jpg')
    },
    */
    {
        id: 3,
        title: 'PVC Sistemleri',
        desc: 'Gündem',
        img: require('../../assets/home/home-pvc.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-pvc.jpg')
    },
    {
        id: 4,
        title: 'Kompozit Panel',
        desc: 'Gündem',
        img: require('../../assets/home/home-kompozit.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-kompozit.jpg')
    },
    {
        id: 5,
        title: 'Panjur ve Kepenk Sistemleri',
        desc: 'Gündem',
        img: require('../../assets/home/home-panjur.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-panjur.jpg')
    },
    {
        id: 6,
        title: 'Turizm',
        desc: 'Gündem',
        img: require('../../assets/home/home-turizm.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-turizm.jpg')
    },
    {
        id: 7,
        title: 'Enerji',
        desc: 'Gündem',
        img: require('../../assets/home/home-enerji.jpg'),
        bgimage: require('../../assets/home/bg/home-bg-enerji.jpg')
    },
];


const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;


function Item({ title, index, img }) {
    return (
        <Box style={{...styles.item, marginRight: index === DATA.length-1 ? 20 : 15}}>
            <Image source={img} alt={title} width={ITEM_WIDTH} height="73%" style={styles.image}></Image>
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
        <Box mt="2">
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
      marginRight: 15
    },
    title: {
      fontSize: 32,
    },
    image: {
        borderRadius: 30,
        marginLeft: 20
    }
  });