import React, { useState, useEffect } from 'react';
import { Modal, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Button, Text } from 'native-base';


export default function PdfViewer({ uri }) {  

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {    
    setModalVisible(uri ? true : false);    
  }, [uri]);
  const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(uri)}`;


  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
            <View style={{ alignItems: 'flex-end' }}>
              <Button size="sm" variant="ghost" onPress={() => setModalVisible(false)}>
                <Text>Kapat</Text>                
              </Button>
            </View>
            <WebView 
              source={{ uri: encodeURI(uri) }}
              style={{ flex: 1 }}
              startInLoadingState
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
