import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

const Accordion = ({ }) => {
    const [isCollapsed1, setIsCollapsed1] = useState(true);
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const [isCollapsed3, setIsCollapsed3] = useState(true);

    const toggleCollapsed1 = () => {
        setIsCollapsed1(!isCollapsed1);
    };

    const toggleCollapsed2 = () => {
        setIsCollapsed2(!isCollapsed2);
    };

    const toggleCollapsed3 = () => {
        setIsCollapsed3(!isCollapsed3);
    };

    return (
        <View>
                <TouchableOpacity style={styles.listItem} onPress={toggleCollapsed1}>
                    <View style={styles.bullet} />
                    <Text style={styles.toggleText}>O que é React Native?</Text>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed1}>
                    <Text style={styles.content}>
                        React Native é um framework open-source criado pelo Facebook que permite desenvolver aplicativos móveis para iOS e Android usando a mesma sintaxe e componentes do ReactJS, uma biblioteca JavaScript para construção de interfaces de usuário.
                    </Text>
                </Collapsible>

                <TouchableOpacity style={styles.listItem} onPress={toggleCollapsed2}>
                    <View style={styles.bullet} />
                    <Text style={styles.toggleText}>Vantagens do React Native</Text>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed2}>
                    <Text style={styles.content}>
                        Uma das principais vantagens do React Native é a possibilidade de criar aplicativos nativos com uma única base de código, o que reduz o tempo e o custo de desenvolvimento. Além disso, React Native oferece um desempenho comparável ao de aplicativos nativos, permitindo uma experiência de usuário fluida e responsiva.
                    </Text>
                    <Text style={styles.content}>
                        Outra vantagem do React Native é a possibilidade de reutilizar o código existente do ReactJS. Isso significa que os desenvolvedores podem usar seus conhecimentos em ReactJS para criar aplicativos móveis com facilidade, sem a necessidade de aprender uma nova linguagem ou estrutura de desenvolvimento.
                    </Text>
                </Collapsible>

                <TouchableOpacity style={styles.listItem} onPress={toggleCollapsed3}>
                    <View style={styles.bullet} />
                    <Text style={styles.toggleText}>Diferenças entre React Native e ReactJS</Text>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed3}>
                    <Text style={styles.content}>
                        Uma das principais diferenças entre React Native e ReactJS é que o React Native usa componentes nativos para renderizar a interface do usuário, enquanto o ReactJS usa componentes baseados em HTML. Isso significa que os aplicativos criados com React Native têm uma aparência mais nativa e são mais otimizados para o desempenho do dispositivo em que estão sendo executados.
                    </Text>
                    <Text style={styles.content}>
                        Além disso, o React Native oferece suporte para recursos específicos de dispositivos móveis, como geolocalização, acelerômetro e câmera, que não estão disponíveis no ReactJS.
                    </Text>
                </Collapsible>

        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: "#00ddff",
        marginHorizontal: 12,
        marginVertical: 5,
        borderRadius: 5

    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: 'black',
        marginRight: 10,
        marginTop: 3
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
        lineHeight: 20

    },
});


export default Accordion;