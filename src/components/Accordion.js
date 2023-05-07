import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

const Accordion = ({ data, listItemColor, bulletColor, toggleTextColor, contentColor }) => {
    
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
                    style={[styles.listItem, { backgroundColor: listItemColor }]}
                    onPress={() => toggleCollapsed(item.id)}
                >
                    <View style={[styles.bullet, { backgroundColor: bulletColor }]} />
                    <Text style={[styles.toggleText, { color: toggleTextColor }]}>{item.title}</Text>
                </TouchableOpacity>
                <Collapsible collapsed={item.isCollapsed}>
                    <Text style={[styles.content, { backgroundColor: contentColor }]}>{item.content}</Text>
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
        marginHorizontal: 12,
        marginVertical: 5,
        borderRadius: 5,
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 5,
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
        borderRadius: 5,
        padding: 15,
        lineHeight: 20,
    },
});

export default Accordion;
