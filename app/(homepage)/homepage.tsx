import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { Link } from 'expo-router';
import CustomButton from '@/components/ui/CustomButton';

const Homepage = () => {

    return (
        <SafeAreaView className='bg-primaryLight h-full'>
            <ScrollView>
                <View className='m-normal'>
                    <View className='flex flex-row justify-between items-center mb-normal'>
                        <View className='flex flex-row gap-4 items-center justify-center'>
                            <View className='w-fit h-fit shadow-md shadow-netralDark rounded-full'>
                                <Image
                                    source={images.pfp}
                                    className='w-[50px] h-[50px] rounded-full'
                                />
                            </View>
                            <Text className='text-xl font-pregular'>Hai, Akbar 👋</Text>
                        </View>
                        <View className='bg-primaryNormal rounded-full p-2'>
                            <Icon name="notifications-none" size={35} color="#fff" />
                        </View>
                    </View>
                    <View className='flex flex-row justify-between items-end mb-normal'>
                        <Text className='text-xl font-pregular'>Daftar Antrean</Text>
                        <Link href="/" className='text-base font-pregular text-primaryNormal underline'>Lihat Semua</Link>
                    </View>
                    {[...Array(2)].map((_, index) => (
                        <TouchableOpacity key={index} className='bg-primaryNormal p-5 rounded-3xl mb-normal'>
                            <View className='flex flex-row items-start justify-between mb-2'>
                                <Text className='text-3xl font-pregular w-32 text-white'>Judul Meeting</Text>
                                <View className='flex flex-row gap-x-[-20px]'>
                                    <View className='w-fit h-fit shadow-2xl shadow-black rounded-full'>
                                        <Image
                                            source={images.pfp}
                                            className='w-[40px] h-[40px] rounded-full'
                                        />
                                    </View>
                                    <View className='w-fit h-fit shadow-2xl rounded-full'>
                                        <Image
                                            source={images.pfp2}
                                            className='w-[40px] h-[40px] rounded-full'
                                        />
                                    </View>
                                </View>
                            </View>
                            <View className='flex flex-row justify-between items-center'>
                                <View className='flex flex-col gap-y-1'>
                                    <Text className='text-2xl font-pregular text-white'>12:00</Text>
                                    <Text className='text-base font-pregular text-white'>Mulai</Text>
                                </View>
                                <CustomButton
                                    title='1 Jam'
                                    handlePress={() => { }}
                                    containerStyles='bg-secondDark px-7 rounded-full min-h-[50px]'
                                    textStyles='font-pregular text-base'
                                />
                                <View className='flex flex-col gap-y-1 text-start'>
                                    <Text className='text-2xl font-pregular text-white'>13:00</Text>
                                    <Text className='text-base font-pregular text-white'>Selesai</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Homepage