import { Image, Text, View } from "react-native"

import { s } from "./styles"
import { useState } from "react"

export function Welcome() {
  const [count, setCount] = useState(0)
  
  return (
    <View>
      <Image source={require('@/assets/logo.png')} style={s.logo}></Image>
      <Text style={s.title}>Boas vindas ao Nearby!</Text>
      <Text style={s.subtitle}>Tenha cupons de vantagem para usar em {'\n'} 
        seus estabelecimentos favoritos.
      </Text>
    </View>
  )
}