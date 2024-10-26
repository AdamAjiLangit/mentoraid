import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { router } from 'expo-router';

import { images } from '@/constants';
const { width } = Dimensions.get('window');

interface LandingData {
    id: number;
    title: string;
    description: string;
    image: any;
}

const landingData: LandingData[] = [
    {
        id: 1,
        title: 'Selamat Datang di MENTORAID',
        description: 'Selamat Datang di MENTORAID dimana kau bisa mengeksplore dunia mentoring',
        image: images.landing1,
    },
    {
        id: 2,
        title: 'Bimbingan Mudah Dengan Murid',
        description: 'Anda bisa membuat jadwal bimbingan dengan murid dengan mudah',
        image: images.landing2,
    },
    {
        id: 3,
        title: 'Buat Catatan',
        description: 'Kirim catatan untuk diberikan kepada murid dengan mudah dimanapun dan kapanpun',
        image: images.landing3,
    },
];

const LandingPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let swiperRef: any = null; // To hold the swiper reference

    const handleNextSlide = () => {
        if (currentIndex < landingData.length - 1) {
            swiperRef?.scrollToIndex({ index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex > 0) {
            swiperRef?.scrollToIndex({ index: currentIndex - 1 });
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNavigate = () => {
        router.replace('/login'); // Navigate to HomePage
    };

    const handleSwipe = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <View className="flex-1 bg-white">
            <View className='w-full items-center'>
                <Text className="text-2xl font-bold mt-5">MENTORAID</Text>
            </View>
            <SwiperFlatList
                index={currentIndex}
                onChangeIndex={({ index }) => handleSwipe(index)}
                showPagination
                paginationActiveColor="#1F2159"
                paginationDefaultColor='#D9D9D9'
                paginationStyleItem={{ marginHorizontal: 5 }}
                paginationStyle={styles.pagination}
                ref={(ref) => (swiperRef = ref)}
            >
                {landingData.map((item) => (
                    <View key={item.id} className={`w-full justify-start mt-normal px-5 items-center`} style={{ width }}>
                        <Image source={item.image} className="w-full h-[340px] my-normal" resizeMode="contain" />
                        <Text className="text-xl font-bold mt-5 text-primaryDarker text-center">{item.title}</Text>
                        <Text className="text-base text-center mx-5 mt-2">{item.description}</Text>
                    </View>
                ))}
            </SwiperFlatList>

            {currentIndex > 0 && (
                <TouchableOpacity
                    className="absolute bottom-12 left-8 bg-primaryNormal p-3 rounded-full"
                    onPress={handlePrevSlide}
                >
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
            )}

            {currentIndex < landingData.length - 1 ? (
                <TouchableOpacity
                    className="absolute bottom-12 right-8 bg-primaryNormal p-3 rounded-full"
                    onPress={handleNextSlide}
                >
                    <Icon name="arrow-forward" size={24} color="#fff" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    className="absolute bottom-12 right-8 bg-primaryNormal p-3 rounded-full"
                    onPress={handleNavigate}
                >
                    <Icon name="arrow-forward" size={24} color="#fff" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default LandingPage;

const styles = StyleSheet.create({
    pagination: {
        position: 'absolute',
        bottom: 270,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});