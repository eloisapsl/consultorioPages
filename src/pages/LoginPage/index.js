import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { ImageBackground } from 'react-native';
import {Link, NavigationContainer} from '@react-navigation/native';


export default function LoginPage(){
    return(
    <View style={styles.containerLogin}>
        <View style={styles.containerImg}>
        <Image source={require('../../../assets/hospital.png')} style={styles.iconimg} resizeMode='contain'></Image>
        </View>
        <View style={styles.divTitulo}>
            <h1 style={styles.titulo}>Seja bem vindo!</h1>
            <h3 style={styles.subtitulo}>Faça login para ter acesso as suas informações!</h3>
        </View>
        <View style={styles.txtInput}>
            <Text style={styles.tLogin}>Entrar</Text>
            <TextInput style={styles.pholder} placeholder='email'/>
            <TextInput style={styles.pholder} placeholder='senha' secureTextEntry={true}/>
            <TouchableOpacity style={styles.button}>
            <Link to={{screen: 'HomePage'}} style={styles.tLoginbutton}>Login</Link>
            </TouchableOpacity>
        </View>
        <View style={styles.senhas}>
            <Link to={{screen: 'ForgotPasswordPage'}} style={styles.txtMenor}>Esqueci minha senha</Link>
            
        </View>
        <View style={styles.register}>
            <Text style={styles.txtMenor}>Não possui uma conta?</Text>
            <TouchableOpacity style={styles.buttonRegistro}>
            <Link to={{screen: 'RegisterPage'}} style={styles.txtButtonRegistro}>Registre-se</Link>
            </TouchableOpacity>
        </View>
        
    </View>
    )
}