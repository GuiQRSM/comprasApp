import { Text, View, TouchableOpacity } from 'react-native';
import { Trash2 } from 'lucide-react-native';
import { styles } from './styles';
import { StatusIcon } from '@/components/StatusIcon';
import { FilterStatus } from '@/types/FilterStatus';
import { colors } from '@/styles/colors';

type ItemData = {
  status: FilterStatus;
  description: string;
};

type ItemProps = {
  data: ItemData;
  onStatus: () => void;
  onRemove: () => void;
};

export function Item({ data, onStatus, onRemove }: ItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>
      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color={colors.gray.main} />
      </TouchableOpacity>
    </View>
  );
}
