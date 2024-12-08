import { View,  StyleSheet } from "react-native"

import Header from '../components/header'

import MemoListItem from '../components/MemoListItem'

import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
  return(
    <View style={styles.container}> {/* body */}

      <Header />

      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />

      <CircleButton>+</CircleButton>

    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#FFFFFF'
  }
})



export default Index
