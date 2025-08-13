import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

type InputProps = TextInputProps & {
  placeHolder: string;
};

export function Input({ placeHolder, ...rest }: InputProps) {
  return <TextInput style={styles.container} placeholder={placeHolder} {...rest} />;
}
