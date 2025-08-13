import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white.off,
    paddingHorizontal: 16,
    height: 48,
    width: '80%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray.light,
  },
});
