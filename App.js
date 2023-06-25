import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [endpoint, setEndpoint] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleGetRequest = () => {
    fetch(`https://dummy.restapiexample.com/${endpoint}`)
      .then(response => response.text())
      .then(text => setResponseText(text));
  };
 const handlePostRequest = () => {
    fetch(`https://dummy.restapiexample.com/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key1: 'value1',
        key2: 'value2'
      })
    })
    .then(response => response.text())
    .then(text => setResponseText(text));
  };

  const handlePutRequest = () => {
    fetch(`https://dummy.restapiexample.com/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key1: 'updatedValue1',
        key2: 'updatedValue2'
      })
    })
    then(response => response.text())
    .then(text => setResponseText(text));
  };

  const handleDeleteRequest = () => {
    fetch(`https://dummy.restapiexample.com/${endpoint}`, {
      method: 'DELETE'
    })
    .then(response => response.text())
    .then(text => setResponseText(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#fff"
          onChangeText={text => setEndpoint(text)}
          value={endpoint}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleGetRequest}>
            <Text style={styles.buttonText}>GET</Text>
          </TouchableOpacity>
 <TouchableOpacity style={styles.button} onPress={handlePostRequest}>
            <Text style={styles.buttonText}>POST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePutRequest}>
            <Text style={styles.buttonText}>PUT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDeleteRequest}>
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.responseText}>{responseText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  responseText: {
    fontSize: 16,
    color: '#FF30',
  },
});


export default App;

