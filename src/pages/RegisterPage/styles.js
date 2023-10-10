import { StyleSheet } from 'react-native';
import "@fontsource/poppins";
const styles = StyleSheet.create({
    containerRegister: {
        backgroundColor: '#a8dadc',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        paddingBottom: '50px',
        paddingTop: '50px'
        //justifyContent: 'center'

    },
    iconeimg: {
        width: '80%',
        height:'140px',
        marginTop: '20px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icone: {
        width: '80%',
        height: '60%',
    },
    registerView:{
        width:'80%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '30px'
    },
    txtInput: {
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        height: '100%',
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
        backgroundColor: '#219ebc',
        borderRadius: '20px',
        justifyContent: 'center',
        marginTop: '10px',
        borderWidth: 1.5
    },
    tLogin: {
        width: '100%',
        fontFamily: 'Poppins',
        fontWeight: '800',
        fontSize: '16px',
        textAlign: 'center'
    },
  

});

export default styles;