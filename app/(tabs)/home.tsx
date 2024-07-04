import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import tw from "twrnc";
import { AppwriteContext } from "../appwrite/AppwriteContext";
import { Avatar, IconButton, Button, Title } from "react-native-paper";
import HomeProgressTodayCard from "../../components/HomeProgressTodayCard";
import TrendingCourseCard from "../../components/TrendingCourseCard";

type UserObj = {
  email: String;
  name: String;
};

const Home = () => {
  return (
    <View style={tw`py-3 px-2 h-full`}>
      <View style={tw`flex-row items-center`}>
        <IconButton icon={"menu"} />
        <Avatar.Text size={42.5} label="XD" style={tw`ml-auto`} />
      </View>
      <View style={tw`px-2 mt-2 mb-5`}>
        <Text style={tw`text-[1.5rem]`}>Good morning,</Text>
        <Text style={tw`font-semibold text-[1.5rem]`}>Egesa Raymond</Text>
      </View>

      <ScrollView>
        <View>
          <Text style={tw`font-bold text-[1.4rem]`}>Course Progress</Text>
          <HomeProgressTodayCard />

          <View style={tw`mt-8`}>
            <View style={tw`flex-row justify-between items-center mt-1`}>
              <Title>Trending Courses</Title>
              <Button>See all</Button>
            </View>
            <ScrollView horizontal={true} style={tw`pl-2`}>
              <TrendingCourseCard />
              <TrendingCourseCard />
              <TrendingCourseCard />
              <TrendingCourseCard />
              <TrendingCourseCard />
            </ScrollView>
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
