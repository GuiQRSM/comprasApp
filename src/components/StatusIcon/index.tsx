import { FilterStatus } from '@/types/FilterStatus';
import { CircleCheck, CircleDashed } from 'lucide-react-native';

//É possivel fazer uma tipagem in line para o componente
export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={16} color="#2C46B1" />
  ) : (
    <CircleDashed size={16} color="#000000ff" />
  );
}
