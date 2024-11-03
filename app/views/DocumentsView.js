import { Text, Box, Image } from "native-base";
import DocumentHeader from "../components/header/DocumentHeader";
import { useSelector } from "react-redux";
import { SvgUri } from 'react-native-svg';



export default function DocumentsView() {
  const items = useSelector(state => state.data.value ?? []); 

  function svgParse(svg) {
    const svgJson = JSON.stringify({ svg: svg });
    const parsedSvg = JSON.parse(svgJson);

    return parsedSvg.svg;
  }

  return (
    <Box px="5">
      <DocumentHeader />
      <Text fontWeight="600" mt="2" fontSize="26">Döküman Merkezi</Text>        
      
      {items.map((item, index) => (
        <Box key={index}>
          {item.dir?.icon &&             
            <Box>
              <SvgUri uri={"https://saray.com/drive/icons/" + item.dir.path + ".svg"} width="100" height="100" />
            </Box>
          }
        </Box>
      ))}

    </Box>
  );
}