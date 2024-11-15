import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { icons } from '@/constants';
import { Link } from 'expo-router';
import CustomButton from '@/components/ui/CustomButton';
import CarouselComponent from '@/components/Homepage/Carousel';
import BottomNavbar from '@/components/BottomNavbar/BottomNavbar';
import EbookCarousel from '@/components/Homepage/Ebookcarousel';

const Homepage = () => {

    return (
        <SafeAreaView className='bg-primaryLight h-full'>
            <ScrollView>
                <View className='m-3'>
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
                    <View className='bg-[#FF5A5AD9] p-5 rounded-xl mb-normal'>
                        <View className='flex flex-row items-start justify-between mb-2'>
                            <Text className='text-xl font-pregular w-32 text-white'>Judul Meeting</Text>
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
                                <Text className='text-2xl font-semibold text-white'>12:00</Text>
                                <Text className='text-base font-pregular text-white'>Mulai</Text>
                            </View>
                            <CustomButton
                                title='Sedang Berlangsung'
                                handlePress={() => { }}
                                containerStyles='bg-red-900 px-3 rounded-full min-h-[40px] min-w-[50]'
                                textStyles='font-bold text-xs'
                            />
                            <View className='flex flex-col gap-y-1 text-start'>
                                <Text className='text-2xl font-semibold text-white '>13:00</Text>
                                <Text className='text-base font-pregular text-white'>Selesai</Text>
                            </View>
                        </View>
                    </View>
                    <View className='flex flex-row justify-between items-end'>
                        <Text className='text-lg font-pregular'>Daftar Antrean</Text>
                        <Link href="/" className='text-base font-pregular text-primaryNormal underline'>Lihat Semua</Link>
                    </View>
                    <View className='py-1'></View>
                    {[...Array(2)].map((_, index) => (
                        <View key={index} className='bg-white p-5 rounded-xl mb-normal'>
                            <View className='flex flex-row items-start justify-between mb-2'>
                                <Text className='text-xl font-pregular w-32 text-black'>Judul Meeting</Text>
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
                                    <Text className='text-2xl font-pregular text-black'>12 : 00</Text>
                                    <Text className='text-base font-pregular text-black'>Mulai</Text>
                                </View>
                                <CustomButton
                                    title='1 Jam'
                                    handlePress={() => { }}
                                    containerStyles='bg-blue-900 px-7 rounded-full min-h-[40px] min-w-[50]'
                                    textStyles='font-pregular text-base'
                                />
                                <View className='flex flex-col gap-y-1 text-start'>
                                    <Text className='text-2xl font-pregular text-black'>13 : 00</Text>
                                    <Text className='text-base font-pregular text-black'>Selesai</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <View className='w-full h-full bg-white rounded-t-3xl'>
                    <View className='flex flex-row justify-between p-normal'>
                        <TouchableOpacity className='flex flex-col gap-y-1 items-center'>
                            <View className='p-1 bg-primaryLightActive rounded-full items-center justify-center'>
                                <Image
                                    source={icons.calendar}
                                    className='w-12 h-12'
                                    resizeMode='contain'
                                />
                            </View>
                            <Text className='font-pmedium'>Kalender</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-col gap-y-1 items-center'>
                            <View className='p-1 bg-primaryLightActive rounded-full items-center justify-center mb-2'>
                                <Image
                                    source={icons.memo}
                                    className='w-12 h-12'
                                    resizeMode='contain'
                                />
                            </View>
                            <View className='flex flex-col gap-y-[-6px] items-center'>
                                {/* <Text className='font-pmedium'>Daftar </Text> */}
                                <Text className='font-pmedium'>Catatan</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-col gap-y-1 items-center'>
                            <View className='p-2 bg-primaryLightActive rounded-full items-center justify-center'>
                                <Image
                                    source={icons.article}
                                    className='w-10 h-10'
                                    resizeMode='contain'
                                />
                            </View>
                            <Text className='font-pmedium'>Artikel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='flex flex-col gap-y-1 items-center'>
                            <View className='p-1 bg-primaryLightActive rounded-full items-center justify-center'>
                                <Image
                                    source={icons.student}
                                    className='w-12 h-12'
                                    resizeMode='contain'
                                />
                            </View>
                            <Text className='font-pmedium'>Data Siswa</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='flex flex-row gap-x-1 items-center mb-5 px-normal'>
                        <Image
                            source={icons.book}
                            className='w-7 h-7'
                            resizeMode='contain'
                        />
                        <Text className='font-pmedium text-lg'>Rekomendasi E-book</Text>
                    </View>
                    <View className='flex flex-row gap-x-1 mb-10 mr-5 px-normal justify-center'>
                        <EbookCarousel />
                    </View>
                    <View className='mb-28'>
                        <CarouselComponent />
                    </View>
                </View>
            </ScrollView>
            <View className="absolute bottom-0 left-0 right-0">
                <BottomNavbar />
            </View>
        </SafeAreaView>
    )
}

export default Homepage
