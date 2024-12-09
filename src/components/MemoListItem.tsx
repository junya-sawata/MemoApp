import { View, Text, StyleSheet } from 'react-native'

const MemoListItem = ():JSX.Element =>{
    return(
        <View> {/* Momo-List */}

            <View style={styles.memoListItem}>{/* Momo-List1 */}
                <View> {/* Momo-List-Item_入力文字 */}
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2024年12月9日 10:00</Text>
                </View>
                <View> {/* Momo-List-Item_削除Button */}
                    <Text>X</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    memoListItem:{
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:'center',
        borderBottomWidth:0.25,
        borderColor:'rgba(0,0,0,0.15'
      },

      memoListItemTitle:{
        fontSize:16,
        lineHeight:32
      },

      memoListItemDate:{
        fontSize:12,
        lineHeight:16,
        color:'#848484'
      }
})

export default MemoListItem
