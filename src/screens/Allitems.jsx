/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Allitems = ({data}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Items</Text>
        <Text style={styles.text}>Quantity</Text>
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
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default Allitems;

const styles = StyleSheet.create({
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
    color: '#fff'
  },
});
