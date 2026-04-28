import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { appTheme } from '../theme/theme';

export default function ScreenContainer({ children, scroll = true }) {
  const Wrapper = scroll ? ScrollView : View;

  return (
    <SafeAreaView style={styles.safe}>
      <Wrapper contentContainerStyle={scroll ? styles.scrollContent : undefined} style={styles.wrapper}>
        {children}
      </Wrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: appTheme.colors.background,
  },
  wrapper: {
    flex: 1,
    backgroundColor: appTheme.colors.background,
  },
  scrollContent: {
    padding: appTheme.spacing.md,
    paddingBottom: appTheme.spacing.xl,
  },
});
