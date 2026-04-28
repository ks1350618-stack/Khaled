import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appTheme } from '../theme/theme';

export default function InfoCard({ title, children, style }) {
  return (
    <View style={[styles.card, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

export function InfoRow({ label, value, valueColor }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, valueColor ? { color: valueColor } : null]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: appTheme.colors.surface,
    borderRadius: appTheme.radius.lg,
    borderWidth: 1,
    borderColor: appTheme.colors.border,
    padding: appTheme.spacing.md,
    marginBottom: appTheme.spacing.md,
    shadowColor: appTheme.colors.primary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    color: appTheme.colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: appTheme.spacing.sm,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: appTheme.spacing.xs,
  },
  label: {
    color: appTheme.colors.muted,
    fontSize: 14,
  },
  value: {
    color: appTheme.colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
});
