import {View, Text, ScrollView, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header/>

            <View style={styles.memoHeader}> {/* Text */}
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2024年12月10日 10:10</Text>
            </View>

            <ScrollView style = {styles.memoBody}>
                <Text style = {styles.memoBodyText}>
                    買い物リスト
                    ここにメモの内容が入ります。長文が入る想定です。
                    改行も反映されます。
                </Text>
            </ScrollView>

            <CircleButton style={{ top:160, bottom:'auto' }}>
                <Icon name='pencil' size={40} color='#ffffff' />
            </CircleButton>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },

    memoHeader:{
        backgroundColor:'#467FD3',
        height:96,
        justifyContent:'center',
        paddingVertical:24,
        paddingHorizontal:19
    },

    memoTitle:{
        color:'#ffffff',
        fontSize:20,
        lineHeight:32,
        fontWeight:'bold'
    },

    memoDate:{
        color:'#ffffff',
        fontSize:12,
        lineHeight:16
    },

    memoBody:{
        paddingVertical:32,
        paddingHorizontal:27
    },

    memoBodyText:{
        fontSize:20,
        paddingVertical:8,
        paddingHorizontal:4,
        color:'#000000'
        }
})

export default Detail
