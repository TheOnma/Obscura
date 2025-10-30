import * as Clipboard from 'expo-clipboard';
import { Linking, Platform } from 'react-native';

export async function connectPhantom() {
  // Placeholder: open Phantom; a real impl would use Wallet Adapter Mobile
  const url = Platform.select({ ios: 'phantom://', android: 'https://phantom.app' });
  try {
    await Linking.openURL(url!);
  } catch (e) {
    // As a fallback, copy a message
    await Clipboard.setStringAsync('Install Phantom Mobile and return to Obscura Live');
  }
}
