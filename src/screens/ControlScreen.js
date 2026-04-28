import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlowButton from '../components/GlowButton';
import InfoCard, { InfoRow } from '../components/InfoCard';
import ScreenContainer from '../components/ScreenContainer';
import { bluetoothService } from '../services/bluetoothService';
import { appTheme } from '../theme/theme';

export default function ControlScreen() {
  const [lastCommand, setLastCommand] = useState('NONE');

  const sendCommand = async (command) => {
    await bluetoothService.sendCommand(command);
    setLastCommand(command);
  };

  return (
    <ScreenContainer>
      <Text style={styles.header}>Control Panel</Text>

      <InfoCard title="Manual Commands">
        <View style={styles.row}>
          <GlowButton title="OPEN" onPress={() => sendCommand('OPEN')} style={styles.halfButton} />
          <GlowButton title="CLOSE" onPress={() => sendCommand('CLOSE')} style={styles.halfButton} />
        </View>

        <View style={styles.row}>
          <GlowButton title="LEFT" onPress={() => sendCommand('LEFT')} variant="secondary" style={styles.halfButton} />
          <GlowButton title="RIGHT" onPress={() => sendCommand('RIGHT')} variant="secondary" style={styles.halfButton} />
        </View>

        <GlowButton title="VIBRATE ON" onPress={() => sendCommand('VIBRATE ON')} />
      </InfoCard>

      <InfoCard>
        <InfoRow label="Last Sent Command" value={lastCommand} valueColor={appTheme.colors.primary} />
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
  row: {
    flexDirection: 'row',
    gap: appTheme.spacing.sm,
  },
  halfButton: {
    flex: 1,
  },
});
