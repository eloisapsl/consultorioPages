import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Link,NavigationContainer} from '@react-navigation/native';

export default function RegisterPage(){
    return(
        <View style={styles.containerRegister}>
            <View style={styles.iconeimg}>
                <Image source={require('../../../assets/hospital.png')} style={styles.icone} resizeMode='contain'/>
            </View>
            <View style={styles.registerView}>
                <View style={styles.txtInput}>
            <Text style={styles.tLogin}>Criar nova conta</Text>
            <TextInput style={styles.pholder} placeholder='nome completo'/>
            <TextInput style={styles.pholder} placeholder='cpf'/>
            <TextInput style={styles.pholder} placeholder='endereço'/>
            <TextInput style={styles.pholder} placeholder='email' />
            <TextInput style={styles.pholder} placeholder='senha' secureTextEntry={true}/>
            <TextInput style={styles.pholder} placeholder='confirmar senha' secureTextEntry={true}/>
            <TouchableOpacity style={styles.button}>
            <Link to={{screen: 'HomePage'}} style={styles.tLogin}>Criar conta</Link>
            </TouchableOpacity>
        </View>
            </View>
        
        
        
    </View>
    )
}