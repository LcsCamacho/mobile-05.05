import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, FlatList, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default function Modalidade({ data, navigation }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation(data)}>
            <Text style={styles.modalidade}>{data.tipo}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    modalidade: {
        width: width * 0.9,
        height: 100,
        backgroundColor: "#d9d8d7",
        marginTop: 20,
        textAlign: 'center',
        height: 'auto',
        padding: 10,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
    }
});
