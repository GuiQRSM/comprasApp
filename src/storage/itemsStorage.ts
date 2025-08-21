import AsyncStorage from '@react-native-async-storage/async-storage';
import { FilterStatus } from '@/types/FilterStatus';

const ITEMS_STOREGE_KEY = '@compras:items';

export type ItemStorage = {
  id: string;
  status: FilterStatus;
  description: string;
};

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STOREGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error('GET_ITEMS ' + error);
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  const items = await get();
  return items.filter((item) => item.status === status);
}

async function save(items: ItemStorage[]): Promise<void> {
  try {
    //JSON.stringify converte um objeto em uma string
    await AsyncStorage.setItem(ITEMS_STOREGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error('SAVE_ITEMS' + error);
  }
}

async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
  // Adiciona um novo item à lista e salva no armazenamento
  const items = await get();
  // Junta o novo item com os itens existentes
  const updatedItems = [...items, newItem];
  // Salva a lista atualizada
  await save(updatedItems);
  // Retorna a lista atualizada
  return updatedItems;
}

async function remove(id: string): Promise<void> {
  const items = await get();
  const updatedItems = items.filter((item) => item.id !== id);
  await save(updatedItems);
}

export const itemsStorage = {
  get,
  getByStatus,
  add,
  remove,
};
