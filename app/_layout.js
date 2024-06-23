import React, { useContext, useEffect, useState } from "react";
import { SplashScreen, Stack, router } from "expo-router";
import { useFonts } from "expo-font";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebaseConfig";
import Loading from "../components/Loading";
import { AppwriteContext } from "./appwrite/AppwriteContext";
import AuthLayout from "./(auth)/_layout";
import TabsLayout from "./(tabs)/_layout";
import { Text } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  const [user, setUser] = useState(User);
  const [isLoading, setIsLoading] = useState(true);
  const { appwrite, isLoggedIn, setLoggedIn } = useContext(AppwriteContext);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (newUser) => {
      console.log("user", newUser);
      setUser(newUser);
    });
  }, []);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((response) => {
        setIsLoading(false);
        if (response) {
          setLoggedIn(true);
        }
      })
      .catch((_) => {
        setIsLoading(false);
        setLoggedIn(false);
      });
  }, [appwrite, setLoggedIn]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  if(isLoading){
    return <Loading />
  }

  return (    
    <Stack screenOptions={{
         headerTitleAlign: "center",
         headerBackTitleVisible: false,
         header: () => <></>
    }}>
      {
        isLoggedIn ? <Stack screenOptions={{
                         headerTitleAlign: "center",
                         headerBackTitleVisible: false,
                       }}>
          <TabsLayout options={{ headerShown: false }}/>
        </Stack> : <AuthLayout options={{ headerShown: false }}/> 
      }
    </Stack>
  );
};
export default RootLayout;
