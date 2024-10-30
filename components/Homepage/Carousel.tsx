import React, { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { View, Image, Dimensions } from 'react-native';

const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { width } = Dimensions.get('window');
    const height = width / 3;
    const itemSpacing = 20;

    const data = [
        { id: 1, imageUrl: 'https://img.freepik.com/free-vector/flat-design-trekking-twitch-banner_23-2149231032.jpg?t=st=1730207785~exp=1730211385~hmac=2c23ae425d528cd1a1c2d25fb7c906ea9bd0756b60b52b269a7d316d08c2b6ae&w=1060' },
        { id: 2, imageUrl: 'https://img.freepik.com/free-vector/flat-design-trekking-twitch-banner_23-2149231032.jpg?t=st=1730207785~exp=1730211385~hmac=2c23ae425d528cd1a1c2d25fb7c906ea9bd0756b60b52b269a7d316d08c2b6ae&w=1060' },
        { id: 3, imageUrl: 'https://img.freepik.com/free-vector/flat-design-trekking-twitch-banner_23-2149231032.jpg?t=st=1730207785~exp=1730211385~hmac=2c23ae425d528cd1a1c2d25fb7c906ea9bd0756b60b52b269a7d316d08c2b6ae&w=1060' },
    ];

    return (
        <View className="">
            <Carousel
                width={width}
                height={height}
                data={data}
                renderItem={({ item }) => (
                    <View style={{ width }} className='items-center'>
                        <Image source={{ uri: item.imageUrl }} className="w-full h-full max-w-xs rounded-3xl" resizeMode="cover" />
                    </View>
                )}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            {/* Pagination */}
            <View className="flex-row justify-center mt-4 space-x-2">
                {data.map((_, index) => (
                    <View
                        key={index}
                        className={`w-4 h-2 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </View>
        </View>
    );
};

export default CarouselComponent;
