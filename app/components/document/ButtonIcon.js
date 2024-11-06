import { Text, Box, Button, FlatList } from "native-base";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { docSelect } from "../../store/docSelectSlice";
import titleReplace from "../../libs/titleReplace";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


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
               
              <Text style={styles.iconTitle}>{titleReplace(item.dir.title)}</Text>          
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
    borderColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  iconTitle: {
    width: 80,
    fontSize: 11,
    textAlign: 'center'
  }
});