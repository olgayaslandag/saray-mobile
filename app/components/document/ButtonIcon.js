import { Text, Box, Button, FlatList } from "native-base";
import { StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SvgUri from "react-native-svg-uri";
import { useDispatch, useSelector } from "react-redux";
import { docSelect } from "../../store/docSelectSlice";


function FolderIcon({ title, selected }) {
    return (
      <Box style={{...styles.iconBox, backgroundColor: selected ? '#F1F1F1' : 'transparent'}}>
        <FontAwesome5
          name="home"
          size={30}
          color={selected ? "red" : "black"}
          onPress={() => null}                
        />
      </Box>
    );
    return <SvgUri uri={"https://saray.com/drive/icons/" + title + ".svg"} width="100" height="100" />
}
  
function Item({ item }) {
  const docSelected = useSelector(state => state.docSelect.value);

  const dispatch = useDispatch();

  function HandleSelect(title) {
    dispatch(docSelect(title))
  }

    return (
      <Box height={120}>
        {item.dir?.icon &&             
          <Button variant="transparent" style={styles.iconButton} p={0} onPress={() => HandleSelect(item.dir.title)}>
            <Box>
              <FolderIcon title={item.dir.title} selected={docSelected === item.dir.title} />         
               
              <Text style={styles.iconTitle}>{item.dir.title}</Text>          
            </Box>  
          </Button>
        }
      </Box>
    );
}
  
  
export default function ButtonIcon({ items}) {
  return (
    <FlatList 
      data={items}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={(item, index) => index}
      horizontal
    />
  );
}



const styles = StyleSheet.create({
    iconButton: {
      marginRight: 5,
    },
    iconBox: {
      width: 80,
      height: 80,
      borderWidth: 1,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    },
    iconTitle: {
      width: 80,
      fontSize: 11,
    }
});