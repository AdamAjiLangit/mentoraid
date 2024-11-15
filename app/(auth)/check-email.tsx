import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput } from "react-native-otp-entry";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormField from '@/components/ui/FormField';
import CustomButton from '@/components/ui/CustomButton';

const CheckEmail = () => {
    const handlePrevSlide = () => {
        router.replace('/forgot-password');
    }

    const handleNextSlide = () => {
        router.push('/verify-success');
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
                <Text className='text-2xl font-pmedium mb-3'>Cek Email Kamu</Text>
                <Text className='text-[#989898] text-base mb-normal font-pregular'>Kami telah mengirimkan email ke <Link href="mailto:adam@gmail.com" className='text-black font-pmedium'>contact@dscode...com </Link>
                masukkan 5 kode yang telah dikirimkan di dalam email.</Text>
                <OtpInput
                    numberOfDigits={5}
                    focusColor="#5a5dff"
                    focusStickBlinkingDuration={500}
                    onTextChange={(text) => console.log(text)}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                    textInputProps={{
                        accessibilityLabel: "One-Time Password",
                    }}
                    theme={{
                        containerStyle: styles.container,
                        pinCodeContainerStyle: styles.boxOTP,
                    }}
                />
                <View className='w-full'>
                    <CustomButton
                        title='Verify Code'
                        handlePress={() => {handleNextSlide()}}
                        containerStyles='bg-primaryNormal mb-5'
                    />
                </View>
                <View className='flex flex-row justify-center items-center w-full'>
                    <Text className='text-[#989898] text-base font-pregular'>Belum menerima email?</Text>
                    <TouchableOpacity>
                        <Text className='text-base font-pregular text-blue-500 underline'> Kirim ulang</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CheckEmail;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    boxOTP: {
        width: 55,
        height: 55,
    }
})
