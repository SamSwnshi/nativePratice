/* eslint-disable react-native/no-inline-styles */
import {useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Create = ({data, setData}) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const [editItemId,setEditItemId] = useState(null);

  const handleAddItems = () => {
    const newItems = {
      id: Date.now(),
      name: itemName,
      stock: stock,
    };
    setData([...data, newItems]);
    setItemName('');
    setStock('');
    setIsAdded(false);
  };

  const handleDelete = (id) =>{
    setData(data.filter((item) => item.id !== id));
  };
  const handleEdit = (item) =>{
    setIsAdded(true);
    setItemName(item.name);
    setEditItemId(item.id);
  };
  const updateEdit = () =>{
    setData(data.map((item)=>
    item.id === editItemId ? {...item,name: item.name,stock: stock} : item));
  };

  return (
    <View style={styles.createContainer}>
      <TextInput
        placeholder="Enter Item Name..."
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter No of Stock..."
        style={styles.input}
        value={stock}
        onChangeText={item => setStock(item)}
      />
      <Pressable style={styles.button} onPress={()=> isAdded ? updateEdit() : handleAddItems()}>
        <Text style={styles.btntext}>{isAdded ? 'Edit Item' : 'Add Item'}</Text>
      </Pressable>

      <View>
        <View style={styles.container}>
          <Text style={styles.text}>All Items</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 10 ? 'red' : 'green'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={()=>handleDelete(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
                <Pressable onPress={()=>handleEdit(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  createContainer: {
    padding: '6%',
    gap: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: '#ffffff',
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {
    fontWeight: '500',
    fontSize: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 17,
    color: '#fff',
  },
});
