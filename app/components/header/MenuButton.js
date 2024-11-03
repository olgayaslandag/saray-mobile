import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function MenuButton() {
    return (
        <FontAwesome5
            name="bars"
            size={30}
            color="gray"
            onPress={() => console.log('tıklandı')}                
        /> 
    );
}