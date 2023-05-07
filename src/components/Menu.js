import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const MenuPage = () => {
    const menuItems = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        // Adicione mais itens de menu conforme necessário
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Menu Page</Text>
            <FlatList
                data={menuItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    menuItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
    },
    menuItemText: {
        fontSize: 16,
    },
});

export default MenuPage;
