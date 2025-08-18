import { View, Image } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Content } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeHolder="O que você precisa comprar?" />
        <Button title="Entrar" activeOpacity={0.7} onPress={() => console.log('Entrar')} />
      </View>

      <View style={styles.content}>
        <Content status={FilterStatus.DONE} isActive />
        <Content status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
}
