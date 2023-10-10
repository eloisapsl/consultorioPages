import { StyleSheet } from 'react-native';
import "@fontsource/poppins";
const styles = StyleSheet.create({
    containerLogin: {
        backgroundColor: '#a8dadc',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyItems: 'center'

    },
    containerImg:{
        height:'40%',
        width:'100%',
        alignItems:'center',
        justifyItems: 'center',
        padding: '30px',
    },
    iconimg:{
        width: '90%',
        height:'100%',
        resizeMethod: 'auto'
    },
    divTitulo: {
        height: '120px',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center'
    },
    titulo: {
        margin: '5px',
        fontFamily: 'Poppins',

        width: '80%',
        color: 'black',
    },
    subtitulo: {
        margin: '10px',
        fontFamily: 'Poppins',
        width: '80%',
        color: 'black',
        fontSize: '14px'
    },
    txtInput: {
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        height: '180px'
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
        justifyContent: 'center'
    },
    tLogin: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: '18px',
        textAlign: 'center'
    },
    tLoginbutton: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: '16px',
        textAlign: 'center'
    },
    senhas: {
        height: '30px',
        width: '80%',
        alignItems: 'flex-end',
        paddingRight: '10px',
    },
    register: {
        height: '50px',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoregister: {
        marginTop: '10px',
        height:'30px',
        width: '100%',
        backgroundColor: '#457b9d',
        borderRadius: '20px',
        justifyContent: 'center'
    }

});

export default styles;