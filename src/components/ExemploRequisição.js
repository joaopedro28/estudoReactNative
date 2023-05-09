    import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { View } from 'react-native-web';

const ExemploRequisicao = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <ScrollView >
            <Text style={styles.text}>Dados obtidos da API:</Text>
                {data.map((item) => (
                    <Text key={item.id} style={styles.text}>
                        {item.title}
                    </Text>
                ))}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 8,
        marginHorizontal: 16,
        paddingHorizontal: 16,
    },
});

export default ExemploRequisicao;
