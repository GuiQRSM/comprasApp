import { colors } from '@/styles/colors';
import { FilterStatus } from '@/types/FilterStatus';
import { CircleDashed, CircleCheck } from 'lucide-react-native';

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.PENDING ? (
    <CircleCheck size={16} color="#2C46B1" />
  ) : (
    <CircleDashed size={16} color="#0000" />
  );
}
