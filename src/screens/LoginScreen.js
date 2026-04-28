import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import GlowButton from '../components/GlowButton';
import ScreenContainer from '../components/ScreenContainer';
import { appTheme } from '../theme/theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('operator@hydrohand.ai');
  const [password, setPassword] = useState('********');

  const handleLogin = () => {
    navigation.replace('MainTabs');
  };

  return (
    <ScreenContainer scroll={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Operator Login</Text>
        <Text style={styles.subtitle}>Authenticate to control HydroHand-X</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={appTheme.colors.muted}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={appTheme.colors.muted}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <GlowButton title="LOGIN" onPress={handleLogin} style={styles.loginButton} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: appTheme.spacing.lg,
  },
  title: {
    color: appTheme.colors.text,
    fontSize: 28,
    fontWeight: '800',
    marginBottom: appTheme.spacing.xs,
  },
  subtitle: {
    color: appTheme.colors.muted,
    marginBottom: appTheme.spacing.xl,
  },
  input: {
    backgroundColor: appTheme.colors.surface,
    borderColor: appTheme.colors.border,
    borderWidth: 1,
    borderRadius: appTheme.radius.md,
    color: appTheme.colors.text,
    paddingHorizontal: appTheme.spacing.md,
    paddingVertical: appTheme.spacing.md,
    marginBottom: appTheme.spacing.md,
  },
  loginButton: {
    marginTop: appTheme.spacing.sm,
  },
});
