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
                <Text className='text-2xl font-pmedium mb-3'>Set a new password</Text>
                <Text className='text-[#989898] text-base font-pregular mb-normal'>Create a new password. Ensure it differs from
                    previous ones for security</Text>
                <FormField
                    title='Password'
                    placeholder='Enter your new password'
                    handleChangeText={() => { }}
                    otherStyles='mb-5'
                    value=''
                />
                <FormField
                    title='Confirm Password'
                    placeholder='Re-enter password'
                    handleChangeText={() => { }}
                    otherStyles='mb-5'
                    value=''
                />
                <View className='w-full'>
                    <CustomButton
                        title='Update Password'
                        handlePress={() => { handleNextSlide() }}
                        containerStyles='bg-primaryNormal'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewPassword;