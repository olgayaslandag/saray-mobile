import { Box, Text, Image, Stack, HStack, VStack } from "native-base";
import { Dimensions, Linking } from "react-native";


const imageSize = Dimensions.get("window").width / 3 - 20;

export default function DocumentList({ dirs, display }) {

  return (
    <Stack space={4} mb={4} style={{display: display}}>
      <VStack justifyContent="space-between">
        {dirs.map((dir, dirIndex) => (
          <Box key={dirIndex} mb={4}>
            <Text mb={2} fontWeight="bold" fontSize="18">{dir.title.split(" | ")[1]}</Text>

            {Array.from({ length: Math.ceil(dir.files.length / 3) }).map((_, rowIndex) => (
              <HStack key={rowIndex} space={3} justifyContent="space-between" mb={4}>
                {dir.files.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, fileIndex) => (
                  <Box key={fileIndex} style={{ width: imageSize, alignItems: "center" }} onPress={async () => await Linking.openURL('https://google.com')}>
                    <Image
                      source={{ uri: item.thumbnail }}
                      alt="thumbnail"
                      style={{ width: imageSize, height: imageSize * 1.5, borderRadius: 10 }}
                    />
                    <Text>Alüminyumm</Text>
                  </Box>
                ))}
              </HStack>
            ))}
          </Box>
        ))}
      </VStack>
    </Stack>
  );
}
