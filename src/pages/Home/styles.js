import { StyleSheet } from 'react-native';
import "@fontsource/poppins";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#a8dadc',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px'
    },
    fotouser: {
        width: '80%',
        height: '100px'
    },
    fotoicon: {
        width: '80%',
        height: '100%',
        alignSelf: 'center'
    },
    titulo: {
        marginTop: '15px',
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight:'900',
        width: '80%',
        color: 'black',
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
    navegação:{
        width: '80%',
        height: '600px',
        justifyContent:'space-evenly'
    },
    navmini: {
        width: '70px',
        width: '70px',
        backgroundColor: 'white'
    }
})

export default styles;