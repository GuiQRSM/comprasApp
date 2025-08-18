import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';
import { FilterStatus } from '@/types/FilterStatus';
import { StatusIcon } from '../StatusIcon';

type ContentProps = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Content({ status, isActive, ...rest }: ContentProps) {
  return (
    <TouchableOpacity
      /*é possivel colocar mais de uma estilizaçõo em uma linha*/
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
      {...rest}
    >
      <StatusIcon /*componete para deixar a renderização condicional*/ status={status} />
      <Text style={styles.title}>{status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}</Text>
    </TouchableOpacity>
  );
}
