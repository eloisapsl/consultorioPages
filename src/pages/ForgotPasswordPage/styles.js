import { StyleSheet } from 'react-native';
import "@fontsource/poppins";
const styles = StyleSheet.create({
    containerPassword: {
        backgroundColor: '#a8dadc',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    passwordView:{
        width:'80%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtInput: {
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        height: '180px',
        textAlign: 'center'
    },
    pholder: {
        width: '80%',
        height: '47px',
        backgroundColor: 'white',
        borderWidth: 1.5,
        textAlign: 'left',
        marginTop: '8px',
        marginBottom: '8px',
        paddingLeft: '15px',
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight:'290',
        borderRadius: '30px',
    }, 
    button: {
        height:'30px',
        width: '80%',
        backgroundColor: '#457b9d',
        borderRadius: '20px',
    },
    tLogin: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '800',
        fontSize: '18px',
        textAlign: 'center'
    },
    senhas: {
        height: '30px',
        width: '80%',
        alignItems: 'flex-end',
        paddingRight: '10px',
    },

});

export default styles;