import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { appTheme } from '../theme/theme';

export default function GlowButton({ title, onPress, variant = 'primary', style }) {
  const isSecondary = variant === 'secondary';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isSecondary ? styles.secondary : styles.primary,
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={styles.innerGlow}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: appTheme.radius.md,
    borderWidth: 1,
    shadowColor: appTheme.colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: appTheme.spacing.sm,
  },
  primary: {
    backgroundColor: appTheme.colors.surfaceAlt,
    borderColor: appTheme.colors.primary,
  },
  secondary: {
    backgroundColor: '#0d1f45',
    borderColor: '#2b5fa4',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  innerGlow: {
    paddingVertical: appTheme.spacing.md,
    paddingHorizontal: appTheme.spacing.lg,
    borderRadius: appTheme.radius.md,
    backgroundColor: 'rgba(45, 212, 255, 0.06)',
  },
  label: {
    color: appTheme.colors.text,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
