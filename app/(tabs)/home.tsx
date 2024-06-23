import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { firebaseAuth } from "../../firebaseConfig";
import tw from "twrnc";
import { router } from "expo-router";
import { AppwriteContext } from "../appwrite/AppwriteContext";
import {
  Avatar,
  Card,
  FAB,
  IconButton,
  Snackbar,
  Button,
  Title,
  Paragraph,
  ProgressBar,
  MD3Colors,
  Subheading,
} from "react-native-paper";
import TodayProgressCard from "../../components/TodayProgressCard";
import HomeProgressTodayCard from "../../components/HomeProgressTodayCard";
import TrendingCourseCard from "../../components/TrendingCourseCard";

type UserObj = {
  email: String;
  name: String;
};

const Home = () => {
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);
  const [visibleLogoutSnackbar, setVisibleLogoutSnackbar] = useState(false);
  const [userData, setUserData] = useState<UserObj>();

  const onDismissSnackBar = () => setVisibleLogoutSnackbar(false);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      setVisibleLogoutSnackbar(true);
    });
  };

  useEffect(() => {
    appwrite.getCurrentUser().then((response) => {
      if (response) {
        const user: UserObj = {
          name: response.name,
          email: response.email,
        };
        setUserData(user);
      }
    });
  }, [appwrite]);
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
  return (
    <View style={tw`py-3 px-2 h-full`}>
      <View style={tw`flex-row items-center`}>
        <IconButton icon={"menu"} />
        <Avatar.Text size={42.5} label="XD" style={tw`ml-auto`} />
      </View>
      <View style={tw`px-2`}>
        <Text style={tw`font-semibold text-[1.5rem]`}>Hello</Text>
        <Text style={tw`font-semibold text-[1.5rem]`}>Egesa Raymond</Text>
      </View>

      <ScrollView>
        <View >
          <TodayProgressCard />
          <Text style={tw`font-bold text-[1.4rem]`}>Course Progress</Text>
          <HomeProgressTodayCard />

          <View>
            <View>
              <Title>Trending Courses</Title>
              <Button>See all</Button>
              <View>
                <ScrollView>
                  <TrendingCourseCard />
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
export default Home;
