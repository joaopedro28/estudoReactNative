import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Linking } from 'react-native';
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
    const handleLinkPress = (link) => {
        Linking.openURL(link);
    };
    const renderAccordions = () => {
        return accordionData.map((item) => (
            <ScrollView key={item.id}>
                <TouchableOpacity
                    style={[styles.listItem, { backgroundColor: listItemColor }]}
                    onPress={() => toggleCollapsed(item.id)}
                >
                    <View style={[styles.bullet, { backgroundColor: bulletColor }]} />
                    <Text style={[styles.toggleText, { color: toggleTextColor }]}>{item.title}</Text>
                </TouchableOpacity>
                <Collapsible collapsed={item.isCollapsed}>
                    <TouchableOpacity onPress={() => handleLinkPress(item.link)} style={styles.button}>
                        <Text style={styles.buttonText}>Clique aqui e veja arquivo completo</Text>
                    </TouchableOpacity>
                    <Text style={[styles.content, { backgroundColor: contentColor }]}>{item.content}</Text>
                </Collapsible>
            </ScrollView>
        ));
    };

    return (
        <ScrollView>
            <ScrollView>{renderAccordions()}</ScrollView>
        </ScrollView>
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
    button: {
        backgroundColor: '#4285F4',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 12,
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
