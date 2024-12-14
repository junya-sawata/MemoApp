import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'

import Button from '../../components/Button'

const handlePress = ():void => {
    //会員登録
    router.push('/memo/list')
}

const SignUp = ():JSX.Element =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => { setEmail(text) }}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Email Address'
                textContentType='emailAddress'
                 />
                <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => { setPassword(text) }}
                autoCapitalize='none'
                secureTextEntry
                placeholder='Password'
                textContentType='password'
                 />
                <Button label='Submit' onPress={handlePress} />
                <View style={styles.footer}>
                        <Text style={styles.footerText}>Already registered?</Text>
                        <Link href='/auth/log_in' asChild>
                            <TouchableOpacity>
                                <Text style={styles.footerLink}>Log in</Text>
                            </TouchableOpacity>
                        </Link>
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
    },

    footer:{

    },

    footerText:{

    },

    footerLink:{

    }
})

export default SignUp
