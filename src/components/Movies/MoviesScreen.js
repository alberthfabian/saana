import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import {getName} from '../../libs/http';

const CoinsScreen = ({navigation}) => {
  const [coins, setCoins] = useState([]);

  const callAPI = async (name = 'Batman') => {
    const data = await getName(name);
    setCoins(data);
  };

  useEffect(() => {
    callAPI();
  }, []);

  // const handlePress = () => {
  //   navigation.navigate('CoinDetail');
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        renderItem={({item}) => (
          <View>
            <Text>{item.Title}</Text>
            {/* <Text>{item.symbol}</Text> */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CoinsScreen;
