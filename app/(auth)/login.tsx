import { Text, View, Button, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";

import { images } from "@/constants";
import FormField from "@/components/ui/FormField";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = () => {
        router.push("/homepage");
    }

    return (
        <>
            <SafeAreaView className="bg-white h-full">
                <ScrollView>
                    <View
                        className="h-full w-full justify-center p-normal"
                    >
                        <Image
                            source={images.loginImage}
                            className="w-full h-[200px] mb-normal"
                            resizeMode="contain"
                        />
                        <Text className="font-pregular text-2xl mb-normal">Masuk</Text>
                        <FormField
                            title="Email"
                            value={form.email}
                            placeholder="example@"
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            otherStyles="mb-normal"
                        />
                        <FormField
                            title="Password"
                            value={form.password}
                            placeholder="Example123@"
                            otherStyles="mb-2"
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                        />
                        <View className="items-end">
                            <Link href="/" className="mb-normal text-base text-primaryNormal font-pregular">Lupa Password ?</Link>
                        </View>
                        <CustomButton
                            title="Masuk"
                            handlePress={submit}
                            containerStyles="bg-primaryNormal mb-2"
                        />
                        <View className="flex flex-row items-center justify-center">
                            <Text className="text-base text-secondNormal font-pregular">Belum Punya Akun? </Text>
                            <Link href="/register" className="text-base text-primaryNormal font-pregular">Daftar</Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
