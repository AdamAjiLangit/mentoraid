import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormField from '@/components/ui/FormField';
import CustomButton from '@/components/ui/CustomButton';

const VerifySuccess = () => {
    const handlePrevSlide = () => {
        router.replace('/forgot-password');
    }

    const handleNextSlide = () => {
        router.push('/new-password');
    }

    return (
        <SafeAreaView className="bg-white h-full">
            <View
                className="h-full w-full justify-start p-normal items-start"
            >
                <TouchableOpacity
                    className="bg-primaryNormal p-3 rounded-full mb-normal"
                    onPress={handlePrevSlide}
                >
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text className='text-2xl font-pmedium mb-3'>Reset Kata Sandi</Text>
                <Text className='text-[#989898] text-base mb-normal font-pregular'>Kata sandi Anda telah berhasil direset. Klik konfirmasi untuk mengatur kata sandi baru.</Text>
                <View className='w-full'>
                    <CustomButton
                        title='Konfirmasi'
                        handlePress={() => {handleNextSlide()}}
                        containerStyles='bg-primaryNormal mb-5'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default VerifySuccess;
