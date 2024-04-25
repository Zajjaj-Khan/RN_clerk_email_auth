import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {ClerkProvider, useAuth} from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  getToken(key:string) {
    return SecureStore.getItemAsync(key);
  },
  saveToken(key:string, value:string) {
    return SecureStore.setItemAsync(key, value);
  },
};


const InitialLayout =  () =>{
  const {isSignedIn, isLoaded} = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(()=>{
    if(!isLoaded) return;
    const inTabsGroup = segments[0] === '(auth)';
    if(isSignedIn && !inTabsGroup){
      router.replace('/home');

    }else if(!isSignedIn){
      router.replace('/login')
    }
    console.log('signedIn', isSignedIn);
  },[isSignedIn])
  return <Slot/>
}





const RootLayoutNav = () => {
  return (
   <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
    <InitialLayout/>
   </ClerkProvider>
  );
};
export default RootLayoutNav;
