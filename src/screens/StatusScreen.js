import React, { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import InfoCard, { InfoRow } from '../components/InfoCard';
import ScreenContainer from '../components/ScreenContainer';
import { appTheme } from '../theme/theme';

export default function StatusScreen() {
  const status = useMemo(
    () => ({
      temperature: '32°C',
      servoAngle: '45°',
      vibration: 'ON',
      alerts: 'No critical alerts',
    }),
    []
  );

  return (
    <ScreenContainer>
      <Text style={styles.header}>Live Status</Text>
      <InfoCard title="Sensor & Servo Feedback">
        <InfoRow label="Temperature" value={status.temperature} />
        <InfoRow label="Servo Angle" value={status.servoAngle} />
        <InfoRow label="Vibration" value={status.vibration} valueColor={appTheme.colors.warning} />
        <InfoRow label="Alerts" value={status.alerts} valueColor={appTheme.colors.success} />
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
