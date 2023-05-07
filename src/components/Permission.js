import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';

const Permission = () => {
    useEffect(() => {
        requestFileAccessPermission();
    }, []);

    const requestFileAccessPermission = async () => {
        try {
            const granted = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
            if (granted === 'granted') {
                console.log('Permissão concedida!');
                // Realize as operações que exigem a permissão aqui
            } else {
                console.log('Permissão negada.');
            }
        } catch (error) {
            console.log('Erro ao solicitar permissão:', error);
        }
    };

    return (
        <View>
            <Text>Sua tela/componente aqui</Text>
            <Button title="Solicitar permissão" onPress={requestFileAccessPermission} />
        </View>
    );
};

export default Permission;
