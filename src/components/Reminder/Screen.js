import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Modal} from 'react-native';
import { Button, Input } from 'react-native-elements';
import firebase from '../firebase/fire';
import { useServer } from '../Context';
import Loading from '../Loading';

const CoinsScreen = ({navigation}) => {
  const [task, setTask] = useState('');
  const [taskUpdate, setTaskUpdate] = useState('');
  const [signOutFirebase, setSignOutFirebase] = useState(false);
  const [taskId, setTaskId] = useState('');
  const { callAPI, info, callApiAdd, load, callApiDelete, setVisible, visible, callApiUpdate } = useServer();

  useEffect(() => {
    callAPI();
  }, [info]);

  const signOut = () => {
    setSignOutFirebase(true);
    firebase.auth().signOut().then(() => {
      setSignOutFirebase(false);
    })
    .catch(e=>{
      console.log(e);
    })
  };

  firebase.auth().onAuthStateChanged((user) => {
    user ? navigation.navigate('Screen') : navigation.navigate('SignUp');
  })

  const add = () => {
    const data = {
      "id": info.length+1,
      "name": task,
    }  
    callApiAdd(data);
    setTask('')
  }

  const open = (id) => {
    setTaskId(id);
    setVisible(true);
  }

  const update = () => {
    const data = {
      "name": taskUpdate,
    } 
    callApiUpdate(taskId, data)
    setVisible(false);
    setTaskUpdate('');
  }

  const remove = (id) => {
    callApiDelete(id);
  }

  const close = (e) => {
    setVisible(e);
    setTaskUpdate('');
  }

  return (
    <View style={styles.container}>
      {!signOutFirebase ? 
      <>
        <View>
          <Modal
            animationType="fade"
            visible={visible}
          > 
            <View style={styles.close}>
              <Input
                label="New Task"
                placeholder="New task name"
                onChangeText={setTaskUpdate}
                value={taskUpdate}
              />
              <Button title="Send" onPress={() => update(false)} />
              <Text>{''}</Text>
              <Text>{''}</Text>
              <Button title="Close" onPress={() => close(false)} />
            </View>
          </Modal>
        </View>
        <Button title="SignOut" onPress={() => signOut()} />
        <View style={styles.title}>
          <Text style={styles.task}>Task</Text>
        </View>
        {!load ? 
          <FlatList
            data={info}
            renderItem={({item}) => (
              <View style={styles.data}>
                <Text style={styles.titleText}>{item.name}</Text>
                <View style={styles.icons}>
                  <TouchableOpacity onPress={() => open(item.id)}>
                    <Image
                      style={styles.img} 
                      source={require('../../assets/update.png')} 
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => remove(item.id)}>
                    <Image
                      style={styles.img} 
                      source={require('../../assets/remove.png')} 
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        : <Loading />}
        <Input
          label="Task"
          placeholder='New Task'
          onChangeText={setTask}
          value={task}
        />
        <Button title="Send" onPress={() => add()} /> 
      </>
      : <Loading />}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  title: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center'
  },
  task: {
    fontSize: 18
  },
  close: {
    marginTop: 200,
    marginLeft: 30,
    marginRight: 30,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10
  },
  titleText: {
    color: '#000',
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  data: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  img: {
    width: 30,
    height: 30,
    marginLeft: 20,
  }
});

export default CoinsScreen;
