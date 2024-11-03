import { View } from "native-base";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const iconName = route.name === "Home" ? "home" : "book-open";
  
          return (
            <View key={index} style={styles.tab}>
                <View
                style={{
                    backgroundColor: isFocused ? "red" : "transparent",
                    borderRadius: 30,
                    padding: 10,
                    borderWidth: 2, 
                    borderColor: isFocused ? "red" : "transparent",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                    <FontAwesome5
                        name={iconName}
                        size={26}
                        color={isFocused ? "white" : "black"}
                        onPress={onPress}                
                    />            
                </View>
            </View>
          );
        })}
      </View>
    );
  }

const styles = {
    tabContainer: {
        width: 300,
        height: 60,
        position: "absolute",
        bottom: 50,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ffffff",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    tab: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
};