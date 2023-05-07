import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuPage from '../components/Menu';
import HamburgerMenu from '../components/HamburguerMenu';

function MonografiaPage() {
    return (
        <View style={styles.container}>
            
            <HamburgerMenu />
            
            <Text style={styles.title}>Documentação do Projeto de Back-end</Text>
            <Text style={styles.sectionTitle}>Endpoints:</Text>
            <Text style={styles.text}>- GET /api/users: Retorna todos os usuários cadastrados.</Text>
            <Text style={styles.text}>- POST /api/users: Cria um novo usuário.</Text>
            <Text style={styles.text}>- GET /api/users/:id: Retorna os detalhes de um usuário específico.</Text>
            
            {/* Adicione outros endpoints e informações relevantes aqui */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
});

export default MonografiaPage;

