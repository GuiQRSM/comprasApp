import { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Content } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

export function Home() {
  const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];
  const [items, setItems] = useState<any>([]);
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [description, setDescription] = useState('');

  function handleAdd() {
    if (!description.trim()) {
      return Alert.alert('Adicionar', 'Informe a descrição para adicionar');
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    setItems((prevState: any) => [...prevState, newItem]);
  }

  useEffect(() => {
    console.log();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeHolder="O que você precisa comprar?" onChangeText={setDescription} />
        <Button title="Entrar" activeOpacity={0.7} onPress={handleAdd} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Content
              /*Cada componente em conexto de lista deve ter uma key*/
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
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
