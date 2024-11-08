import { Text, Image } from "native-base";
import { StyleSheet } from "react-native";

const image_uri = 'https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg';

export default function UserAvatar() {
    return (
        <>
            <Image source={{uri: image_uri}} alt="" size={70} style={styles.image} borderRadius={100} />
            <Text style={{fontSize: 20}} mb="2">Günaydın,</Text>
            <Text fontWeight="600" style={{fontSize: 20}}>Saray Alüminyum</Text>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
      borderWidth: 2,
      borderColor: '#F1F1F1', 
      overflow: 'hidden',
      marginBottom: 15,
      marginTop: -15
    },
});