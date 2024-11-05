import { Box, Image, Text } from "native-base";
import { StyleSheet, FlatList, Dimensions } from "react-native";

const DATA = [
    {
        title: 'Gündem',
        desc: 'Gündem'
    },
    {
        title: 'Gündem',
        desc: 'Gündem'
    },
    {
        title: 'Gündem',
        desc: 'Gündem'
    },
];


const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;


function Item({ title, index }) {
    return (
        <Box style={styles.item}>
            <Image source={{uri: 'https://saray.com/wp-content/uploads/2024/07/aluminyum.jpg'}} alt={title} width={ITEM_WIDTH} height="400" style={styles.image}></Image>
        </Box>
    );
}
export default function HomeSlider() {
    return (
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
            napToInterval={ITEM_WIDTH + 10}
            snapToAlignment="center"
            pagingEnabled
        />        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    item: {
      marginVertical: 8,
      marginHorizontal: 0,    
      width: ITEM_WIDTH,
      marginRight: 10
    },
    title: {
      fontSize: 32,
    },
    image: {
        borderRadius: 30,
        marginRight: 10
    }
  });