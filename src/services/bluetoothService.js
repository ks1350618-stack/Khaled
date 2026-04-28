/**
 * Placeholder service for future Bluetooth integration.
 * This keeps UI logic decoupled from transport implementation.
 */
export const bluetoothService = {
  async connect() {
    return Promise.resolve({ deviceId: 'hydrohand-01', connected: true });
  },
  async sendCommand(command) {
    return Promise.resolve({ command, success: true, timestamp: new Date().toISOString() });
  },
  async getStatus() {
    return Promise.resolve({
      temperature: '32°C',
      servoAngle: '45°',
      vibration: 'ON',
      alerts: 'No critical alerts',
    });
  },
};
