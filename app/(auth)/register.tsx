import { Text, View, Button, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";

import { images } from "@/constants";
import FormField from "@/components/ui/FormField";

export default function Register() {
    const [form, setForm] = useState({
        fullName: "",
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
                            source={images.registerImage}
                            className="w-full h-[200px] mb-normal"
                            resizeMode="contain"
                        />
                        <Text className="font-pregular text-2xl mb-normal">Daftar</Text>
                        <FormField
                            title="Nama Lengkap"
                            value={form.fullName}
                            placeholder="nama lengkap"
                            handleChangeText={(e) => setForm({ ...form, fullName: e })}
                            otherStyles="mb-normal"
                        />
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
                            otherStyles="mb-10"
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                        />
                        {/* <View className="items-start">
                            <Link href="/" className="mb-normal text-base text-primaryNormal">Lupa Password ?</Link>
                        </View> */}
                        <CustomButton
                            title="Daftar"
                            handlePress={submit}
                            containerStyles="bg-primaryNormal mb-2"
                        />
                        <View className="flex flex-row items-center justify-center">
                            <Text className="text-lg text-secondNormal font-pregular">Sudah Punya Akun? </Text>
                            <Link href="/login" className="text-lg text-primaryNormal font-pregular">Masuk</Link>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
