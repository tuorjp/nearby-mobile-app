import { View, Text } from 'react-native'
import { s } from './styles'
import { Step } from '../step'
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'

export function Steps() {
  return(
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title='Encontre estabelecimentos' 
        description='Veja lugares perto de você parceiros do nearby'
      />
      <Step
        icon={IconQrcode}
        title='Ative o cupom com QR code' 
        description='Escaneie o código no estabelecimento para usar os benefícios'
      />
      <Step
        icon={IconTicket}
        title='Garanta vantagens perto de você' 
        description='Ative cupons onde você estiver em diferentes estabelecimentos'
      />
    </View>
  )
}