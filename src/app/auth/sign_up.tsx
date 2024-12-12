import {View, Text, TextInput, StyleSheet } from 'react-native'
import Header from '../../components/Header'

const SignUp = ():JSX.Element =>{
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value='Email address' />
                <TextInput style={styles.input} value='Password' />
                <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Submit</Text>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    inner:{
        paddingVertical:24,
        paddingHorizontal:27
    },

    title:{
        fontSize:24,
        lineHeight:32,
        fontWeight:'bold',
        marginBottom:24
    },

    input:{
        borderWidth:1,
        borderColor:'#DDDDDD',
        backgroundColor:'#ffffff',
        height:48,
        padding:8,
        fontSize:16,
        marginBottom:16
    },

    button:{
        backgroundColor:'#467FD3',
        borderRadius:4,
        alignSelf:'flex-start',
        marginBottom:24

    },

    buttonLabel:{
        fontSize:16,
        lineHeight:48,
        color:'#ffffff'
    }
})

export default SignUp
