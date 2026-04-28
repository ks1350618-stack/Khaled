import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import InfoCard from '../components/InfoCard';
import ScreenContainer from '../components/ScreenContainer';
import { appTheme } from '../theme/theme';

export default function HistoryScreen() {
  const history = useMemo(
    () => [
      { id: '1', command: 'OPEN', result: 'Success', timestamp: '2026-04-28 09:10:12' },
      { id: '2', command: 'LEFT', result: 'Success', timestamp: '2026-04-28 09:11:48' },
      { id: '3', command: 'CLOSE', result: 'Failed', timestamp: '2026-04-28 09:13:05' },
      { id: '4', command: 'VIBRATE ON', result: 'Success', timestamp: '2026-04-28 09:14:37' },
    ],
    []
  );

  return (
    <ScreenContainer>
      <Text style={styles.header}>Command History</Text>
      <InfoCard>
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.command}>{item.command}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
              <Text style={[styles.result, item.result === 'Failed' ? styles.failed : styles.success]}>
                {item.result}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </InfoCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    color: appTheme.colors.text,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: appTheme.spacing.md,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: appTheme.spacing.sm,
  },
  command: {
    color: appTheme.colors.text,
    fontWeight: '700',
  },
  timestamp: {
    color: appTheme.colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
  result: {
    fontWeight: '700',
  },
  success: {
    color: appTheme.colors.success,
  },
  failed: {
    color: appTheme.colors.danger,
  },
  separator: {
    height: 1,
    backgroundColor: appTheme.colors.border,
  },
});
