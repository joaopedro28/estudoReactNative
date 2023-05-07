import React from 'react';
import { View, Text , ScrollView} from 'react-native';
import Accordion from '../components/Accordion';

const AboutPage = () => {
  return (
    <View>
      <ScrollView>
        <Accordion />
      </ScrollView>
    </View>
  );
};

export default AboutPage;
