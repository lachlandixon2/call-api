import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchCategories } from "./utils/api";
import { useEffect, useState } from 'react';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [upd, setUpd] = useState(false);
 
  useEffect(
    () => {
      const fetchCat = async () => {
        try {
          const d = await fetchCategories();
          setCategories(d);
        } catch (error) { }
      };
      fetchCat();
    }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {categories.map((category) => (
        <Text key={category.id}>{category.id +". "+  category.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
