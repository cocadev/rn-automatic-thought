/**
 * A wrapper around Haptic that's smart enough
 * to not warn on Android
 */

import { Platform } from "react-native";
import * as Haptics from 'expo-haptics';

export default {
  notification: type => {
    if (Platform.OS !== "ios") {
      return;
    }

    Haptics.notification(type);
  },
  selection: () => {
    if (Platform.OS !== "ios") {
      return;
    }
    Haptics.selection();
  },
  impact: type => {
    if (Platform.OS !== "ios") {
      return;
    }

    Haptics.impact(type);
  },
};
