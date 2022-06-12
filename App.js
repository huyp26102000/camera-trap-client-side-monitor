import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import ws from './src/ws';
import FastImage from 'react-native-fast-image';
import datetime from './src/datetime';
import {screenHeight, screenWidth} from './src/screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const App = () => {
  const [image, setImage] = useState(null);
  const [time, setTime] = useState(null);
  useEffect(() => {
    ws.onInit(setImage, setTime);
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <FastImage
          style={{
            width: screenWidth,
            height: screenHeight - 100 - getStatusBarHeight(),
          }}
          source={{
            uri: image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.center}
        />
      </View>

      <View
        style={{
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        <Text style={{color: 'white', marginBottom: 10}}>Capture time</Text>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          {time ? datetime.fromNow(time) : 'Unknow time'}
        </Text>
      </View>
    </View>
  );
};

export default App;
