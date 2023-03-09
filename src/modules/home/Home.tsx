import {Image, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {vh, vw} from '../../utlis/dimension';

const Home = () => {
  const [countryName, setCountryName] = useState<string>('');
  return (
    <SafeAreaView>
      <View
        style={{
          width: vw(300),
          height: vh(50),
          borderWidth: 1,
          borderRadius: vw(20),
          justifyContent: 'center',
          paddingHorizontal:vw(10)
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: vw(20),
            padding: 0,
            fontSize: vw(18),
          }}
          onChangeText={(text: string) => {
            setCountryName(text);
          }}
          value={countryName}
        />
        {/* <Image
        source={}/> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
