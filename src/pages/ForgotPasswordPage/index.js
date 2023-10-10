import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Link,NavigationContainer} from '@react-navigation/native';

export default function ForgotPasswordPage(){
    return(
        <View style={styles.containerPassword}>
            <View style={styles.passwordView}>
                <View style={styles.txtInput}>
            <Text style={styles.tLogin}>Recuperar senha</Text>
            <TextInput style={styles.pholder} placeholder='email'/>
            <Text style={styles.tLogin}>Você receberá um código de confirmação em seu e-mail para recuperar sua senha.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.tLogin}>Confirmar</Text>
            </TouchableOpacity>
        </View>
            </View>
    </View>
    )
}