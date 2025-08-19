import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Content } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];
/*Linha de array a ser estudada*/
const ITEMS = [
  { id: '1', status: FilterStatus.DONE, description: '1 pacote de café' },
  { id: '2', status: FilterStatus.PENDING, description: '3 pacotes de macarrão' },
  { id: '3', status: FilterStatus.DONE, description: '2 pacotes de arroz' },
];

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
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log('Change status')}
              onRemove={() => console.log('Remove item')}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Não há compras registradas</Text>
          )}
        />
      </View>
    </View>
  );
}
