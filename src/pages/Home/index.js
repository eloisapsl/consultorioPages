import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.fotouser}>
                <Image source={require('../../../assets/iconuser.png')} resizeMode= 'contain' style={styles.fotoicon}/>
            </View>
            <Text style={styles.titulo}>Olá, Usuário!</Text>
            <TextInput style={styles.pholder} placeholder='Pesquisar'/>

            <View style={styles.navegacao}>
                <View style={styles.navmini}>
                </View>
                <View style={styles.navmini}>
                </View>
                <View style={styles.navmini}>
                </View>
                <View style={styles.navmini}>
                </View>
            </View>
        </View>
    )
}