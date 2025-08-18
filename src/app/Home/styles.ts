import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    paddingTop: 62,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 5,
    marginTop: 25,
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white.main,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray.light,
    paddingBottom: 12,
  },
  clearButton: {
    marginLeft: 'auto',
  },
  clearText: {
    fontSize: 16,
    color: colors.gray.main,
    fontWeight: '600',
  },
});
