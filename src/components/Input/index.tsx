import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { colors } from '@/styles/colors';

type InputProps = TextInputProps & {
  placeHolder: string;
};

export function Input({ placeHolder, ...rest }: InputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeHolder}
      placeholderTextColor={colors.gray.light}
      {...rest}
    />
  );
}
