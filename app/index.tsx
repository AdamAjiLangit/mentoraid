import { Text, View, Button, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import React from "react";
import CustomButton from "@/components/ui/CustomButton";

import { images } from "@/constants";

export default function Index() {
  return (
    <>
      <View className="h-full w-full justify-center items-center bg-white p-normal">
        <Image
          source={images.splash}
          className="mb-normal"
        />
      </View>
    </>
  );
}
