import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { ImageBackground } from 'react-native';
import {Link, NavigationContainer} from '@react-navigation/native';


export default function LoginPage(){
    return(
    <View style={styles.containerLogin}>
        <View style={styles.containerImg}>
        <Image source={require('../../../assets/hospital.png')} style={styles.iconimg}></Image>
        </View>
        <View style={styles.divTitulo}>
            <h1 style={styles.titulo}>Seja bem vindo!</h1>
            <h3 style={styles.subtitulo}>Faça login e fique por dentro de nossas novidades!</h3>
        </View>
        <View style={styles.txtInput}>
            <Text style={styles.tLogin}>Entrar</Text>
            <TextInput style={styles.pholder} placeholder='email'/>
            <TextInput style={styles.pholder} placeholder='senha'/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.tLoginbutton}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.senhas}>
            <Link to={{screen: 'ForgotPasswordPage'}}>Esqueci minha senha</Link>
            
        </View>
        <View style={styles.register}>
            <Text>Não possui uma conta?</Text>
            <View style={styles.botaoregister}>
            <Link to={{screen: 'RegisterPage'}} style={styles.tLoginbutton}>Registre-se</Link>
            </View>
        </View>
        
    </View>
    )
}