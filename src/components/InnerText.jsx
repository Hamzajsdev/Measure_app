import { View, Text } from 'react-native'
import React from 'react'
import theme from '../common/Theme'

const InnerText = () => {
  return (
    <View>
      <Text style={{color:theme.colors.green}}>✅ Measurement successfully sent to dealer</Text>
    </View>
  )
}

export default InnerText