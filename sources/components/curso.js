import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');


export default function Curso({data, navigation}) {

    return (
        <TouchableOpacity onPress={() => navigation(data)} style={styles.curso}>
            <Text> Modalidade: {data.nome}</Text>
            <Text> Modalidade: {data.modalidade}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    curso: {
        width: width * 0.9,
        backgroundColor: "#f6f6f6",
        marginTop: 20,
        padding: 10,
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
        gap: 10,
    }

})