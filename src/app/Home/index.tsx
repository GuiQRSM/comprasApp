import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Content } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeHolder="O que você precisa comprar?" />
        <Button title="Entrar" activeOpacity={0.7} onPress={() => console.log('Entrar')} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Content
              /*Cada componente em conexto de lista deve ter uma key*/
              key={status}
              status={status}
              isActive
            />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <Item
          data={{ status: FilterStatus.PENDING, description: 'Banana' }}
          onStatus={() => console.log('Status changed')}
          onRemove={() => console.log('Item removed')}
        />
      </View>
    </View>
  );
}
