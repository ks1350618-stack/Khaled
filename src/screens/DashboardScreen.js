import React from 'react';
import { Text, StyleSheet } from 'react-native';
import InfoCard, { InfoRow } from '../components/InfoCard';
import ScreenContainer from '../components/ScreenContainer';
import { appTheme } from '../theme/theme';

const deviceData = {
  name: 'HydroHand-01',
  status: 'Online',
  temperature: '32°C',
  lastCommand: 'OPEN',
};

export default function DashboardScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.header}>Dashboard</Text>
      <InfoCard title="Device Overview">
        <InfoRow label="Device Name" value={deviceData.name} />
        <InfoRow label="Status" value={deviceData.status} valueColor={appTheme.colors.success} />
        <InfoRow label="Temperature" value={deviceData.temperature} />
        <InfoRow label="Last Command" value={deviceData.lastCommand} />
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
});
