import { View,  StyleSheet } from "react-native"

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'


const List = (): JSX.Element => {
  return(
    <View style={styles.container}> {/* body */}

      <Header />

      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />

      <CircleButton>
          <Icon name="plus" size={40} color ='#ffffff'/>
      </CircleButton>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#FFFFFF'
  }
})



export default List