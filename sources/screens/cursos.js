import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import Curso from '../components/curso';
export default function Cursos({ navigation, route }) {

    const curso = route.params.dados

    const abrirpagina = (dados) => {
        navigation.navigate('detalhes', { dados });
    }

    return (
        <View style={styles.container}>
            <View styles={styles.header}>
                <Text styles={styles.title}>Modalidade:{curso.tipo}</Text>
            </View>
            <View style={styles.cursosContainer}>
                <FlatList
                    data={curso.cursos}
                    renderItem={({ item }) => <Curso navigation={abrirpagina} data={item}/>} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent:'flex-start',
        gap: 10,
        paddingTop: 20,

    },
    header: {
        marginTop: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cursosContainer: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingTop: 20,
        paddingBottom: 50,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },

})