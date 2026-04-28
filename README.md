# HydroHand-X (React Native UI)

A production-ready React Native UI scaffold for controlling the HydroHand-X smart robotic hand.

## Project Structure

```
.
├── App.js
├── babel.config.js
├── package.json
└── src
    ├── components
    │   ├── GlowButton.js
    │   ├── InfoCard.js
    │   └── ScreenContainer.js
    ├── navigation
    │   └── AppNavigator.js
    ├── screens
    │   ├── ControlScreen.js
    │   ├── DashboardScreen.js
    │   ├── HistoryScreen.js
    │   ├── LoginScreen.js
    │   ├── SplashScreen.js
    │   └── StatusScreen.js
    ├── services
    │   └── bluetoothService.js
    └── theme
        └── theme.js
```

## Features Implemented

- Dark futuristic blue-glow visual system.
- Reusable components (`GlowButton`, `InfoCard`, `ScreenContainer`).
- Full navigation flow with splash -> login -> tabbed app sections.
- Required screens:
  - Splash
  - Login
  - Dashboard
  - Control
  - Status
  - History
- Dummy state and service layer prepared for future Bluetooth integration.

## Run

```bash
npm install
npm run start
```
