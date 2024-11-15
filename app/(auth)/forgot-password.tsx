import { View, Text, TouchableOpacity, Button } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormField from '@/components/ui/FormField';
import CustomButton from '@/components/ui/CustomButton';

const ForgotPassword = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handlePrevSlide = () => {
        router.replace('/login');
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
                <Text className='text-2xl font-pmedium mb-3'>Lupa Kata sandi</Text>
                <Text className='text-[#989898] text-base font-pregular mb-normal'>Mohon masukkan email anda, untuk reset ulang kata sandi</Text>
                <FormField
                    title='Email'
                    placeholder='example@'
                    handleChangeText={() => { }}
                    otherStyles='mb-5'
                    value=''
                />
                <View className='w-full'>
                    <CustomButton
                        title='Reset Password'
                        handlePress={() => { toggleModal() }}
                        containerStyles='bg-primaryNormal'
                    />
                </View>

                <Modal isVisible={isModalVisible}>
                    <View className='bg-white rounded-3xl p-7'>
                        <Icon name="info-outline" size={50} color="#5a5dff" className='text-center' />
                        <Text className='text-xl font-pmedium mt-normal'>Konfirmasi Alamat Email Anda</Text>
                        <Text className='text-base font-pregular mt-3'>Apakah alamat email yang Anda masukkan sudah benar?</Text>
                        <Text className='text-md text-[#989898] font-pregular mt-3 mb-normal'>Harap cek kembali untuk memastikan. Kode verifikasi akan dikirimkan segera setelah konfirmasi.</Text>
                        <View className='flex flex-row justify-between'>
                            <CustomButton
                                title='Batal'
                                handlePress={toggleModal}
                                containerStyles='bg-white border border-[#989898] w-1/2 mr-2'
                                textStyles='text-[#989898]'
                            />
                            <CustomButton
                                title='Lanjut'
                                handlePress={handleNextSlide}
                                containerStyles='bg-primaryNormal text-white w-1/2'
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword;