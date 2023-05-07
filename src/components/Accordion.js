import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

import jsonData from '../../assets/json/react.json';

const Accordion = () => {
    const data = jsonData.react;

    const [accordionData, setAccordionData] = useState(data);

    const toggleCollapsed = (id) => {
        setAccordionData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, isCollapsed: !item.isCollapsed } : item
            )
        );
    };

    const renderAccordions = () => {
        return accordionData.map((item) => (
            <View key={item.id}>
                <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => toggleCollapsed(item.id)}
                >
                    <View style={styles.bullet} />
                    <Text style={styles.toggleText}>{item.title}</Text>
                </TouchableOpacity>
                <Collapsible collapsed={item.isCollapsed}>
                    <Text style={styles.content}>{item.content}</Text>
                </Collapsible>
            </View>
        ));
    };

    return (
        <View>
            <ScrollView>{renderAccordions()}</ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: '#00ddff',
        marginHorizontal: 12,
        marginVertical: 5,
        borderRadius: 5,
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: 'black',
        marginRight: 10,
        marginTop: 3,
    },
    toggleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,
        textAlign: 'justify',
        backgroundColor: '#0414a0',
        color: '#fff',
        borderRadius: 5,
        padding: 15,
        lineHeight: 20,
    },
});

export default Accordion;
