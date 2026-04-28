import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { appTheme } from '../theme/theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScreenContainer scroll={false}>
      <View style={styles.container}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>HX</Text>
        </View>
        <Text style={styles.title}>HydroHand-X</Text>
        <Text style={styles.subtitle}>Precision Robotic Control</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: appTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: appTheme.colors.primary,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 12,
    backgroundColor: 'rgba(45, 212, 255, 0.1)',
  },
  logoText: {
    color: appTheme.colors.text,
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    color: appTheme.colors.text,
    marginTop: appTheme.spacing.lg,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1,
  },
  subtitle: {
    color: appTheme.colors.muted,
    marginTop: appTheme.spacing.sm,
    fontSize: 14,
  },
});
