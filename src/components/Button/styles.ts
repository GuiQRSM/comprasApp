import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue.dark,
    padding: 16,
    height: 50,
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 600,
  },
});
