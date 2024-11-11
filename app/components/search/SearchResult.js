import { ScrollView, Text, HStack } from "native-base"
import { useSelector } from "react-redux";
import DocumentList from "../document/DocumentList";

export default function SearchResult() {
    const items = useSelector(state => state.data.value ?? []);   
    const docSelected = useSelector(state => state.docSelect.value);

    
    return (
      <ScrollView style={{marginBottom: 100, minHeight: '100%'}} p="5">        
        {items.map((item, index) => (
          <DocumentList 
            dir={item.dir} 
            dirs={item.dirs} 
            key={index} 
            display={docSelected ? (item.dir.title === docSelected ? 'block' : 'none') : 'block'}  
            search={true}          
          />  
        ))}
      </ScrollView>
    );    
}