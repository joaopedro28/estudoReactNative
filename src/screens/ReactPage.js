import React from 'react';
import { View, Text , ScrollView} from 'react-native';
import Accordion from '../components/Accordion';

import jsonData from '../../assets/json/react.json';

const data = jsonData.react;

const AboutPage = () => {
  return (
    <View>
      <ScrollView>
        <Accordion data={data} listItemColor="blue" bulletColor="#ccc" toggleTextColor="#000" contentColor="#fff"/>
      </ScrollView>
    </View>
  );
};

export default AboutPage;
