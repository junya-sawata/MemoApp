import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
  return(
    <View style={styles.container}> {/* body */}


      <View> {/* header */}
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      <View> {/* scroll */}

        <View>{/* Momo-List */}

          <View> {/* Momo-List-Item_入力文字 */}
            <Text>買い物リスト</Text>
            <Text>2024年12月9日 10:00</Text>
          </View>
          <View> {/* Momo-List-Item_削除Button */}
            <Text>X</Text>
          </View>
          <View> {/* Momo-List-Item_入力文字 */}
            <Text>買い物リスト</Text>
            <Text>2024年12月9日 10:00</Text>
          </View>
          <View> {/* Momo-List-Item_削除Button */}
            <Text>X</Text>
          </View>
          <View> {/* Momo-List-Item_入力文字 */}
            <Text>買い物リスト</Text>
            <Text>2024年12月9日 10:00</Text>
          </View>
          <View> {/* Momo-List-Item_削除Button */}
            <Text>X</Text>
          </View>
          <View> {/* Momo-List-Item_入力文字 */}
            <Text>買い物リスト</Text>
            <Text>2024年12月9日 10:00</Text>
          </View>
          <View> {/* Momo-List-Item_削除Button */}
            <Text>X</Text>
          </View>

        </View>

      </View>

      <View> {/* Add-Button */}
        <Text>+</Text>
      </View>


    </View>

  )
}

const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
})

export default Index
