import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormField from '@/components/ui/FormField';
import CustomButton from '@/components/ui/CustomButton';

const NewPassword = () => {
    const handlePrevSlide = () => {
        router.replace('/verify-success');
    }

    const handleNextSlide = () => {
        router.push('/check-email');
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
                <Text className='text-2xl font-pmedium mb-3'>Atur kata sandi baru</Text>
                <Text className='text-[#989898] text-base font-pregular mb-normal'>
                Buat kata sandi baru. Pastikan berbeda dari yang sebelumnya untuk keamanan.</Text>
                <FormField
                    title='Kata Sandi'
                    placeholder='Masukkan kata sandi baru'
                    handleChangeText={() => { }}
                    otherStyles='mb-5'
                    value=''
                />
                <FormField
                    title='Konfirmasi Kata Sandi'
                    placeholder='Masukkan ulang kata sandi baru'
                    handleChangeText={() => { }}
                    otherStyles='mb-5'
                    value=''
                />
                <View className='w-full'>
                    <CustomButton
                        title='Simpan'
                        handlePress={() => { handleNextSlide() }}
                        containerStyles='bg-primaryNormal'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewPassword;