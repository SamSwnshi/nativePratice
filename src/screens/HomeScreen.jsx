/* eslint-disable react-native/no-inline-styles */
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Allitems from './Allitems';
import Create from './Create';
import LowStock from './LowStock';



const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([
    {id: 1, name: 'Wheat', stock: 15, unit: 'kg'},
    {id: 2, name: 'Rice', stock: 6, unit: 'kg'},
    {id: 3, name: 'Sugar', stock: 7, unit: 'kg'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, view === 0 ? {backgroundColor: 'red'} : null]}
          onPress={() => setView(0)}>
          <Text style={styles.buttonText}>All Items</Text>
        </Pressable>
        <Pressable
          style={[styles.button, view === 1 ? {backgroundColor: 'red'} : null]}
          onPress={() => setView(1)}>
          <Text style={styles.buttonText}>Low Stock</Text>
        </Pressable>
        <Pressable
          style={[styles.button, view === 2 ? {backgroundColor: 'red'} : null]}
          onPress={() => setView(2)}>
          <Text style={styles.buttonText}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <Allitems data={data} />}
      {view === 1 && <Allitems data={data.filter(item => item.stock < 10)} />}
      {view === 2 && <Create data={data} setData={setData} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '8%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 5,
    borderWidth: 0.7,
    borderColor: '#000000',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
