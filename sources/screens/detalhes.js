import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import DetalhesCurso from '../components/detalhe';
const { width, height } = Dimensions.get('screen');


export default function DetalhesScreen({ route }) {

    const detalhes = route.params;

    return (
        <View style={styles.container}>
            <DetalhesCurso data={detalhes} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }

})