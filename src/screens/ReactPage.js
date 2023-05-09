import React from 'react';
import { View, Text , ScrollView, StyleSheet} from 'react-native';
import Accordion from '../components/Accordion';

import jsonData from '../../assets/json/react.json';

const data = jsonData.react;

const ReactPage = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>React-Native</Text>
        <Accordion data={data} listItemColor="#00ddff" bulletColor="#fff" toggleTextColor="#000" contentColor="#fff"/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 16,
  },
});
export default ReactPage;
