import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from '@/hooks/useFetch';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const LandingFirst: React.FC = () => {
    const { data: products, loading, error } = useFetch<Product[]>('https://fakestoreapi.com/products');

    if (loading) {
        return (
            <View className='h-full justify-center items-center'>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View className='h-full justify-center items-center'>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView className='h-full'>
            <ScrollView>
                {products?.map(product => (
                    <View key={product.id} className='p-5 m-normal border rounded-lg items-center'>
                        <Image source={{ uri: product.image }} style={style.imagesStyle} />
                        <Text className='text-lg font-bold text-center'>{product.title}</Text>
                        <Text className='text-center'>{product.description}</Text>
                        <Text className='text-gray-600'>Price: ${product.price}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default LandingFirst;

const style = StyleSheet.create({
    imagesStyle: {
        width: 250,
        height: 250,
        objectFit: 'contain',
    }
})
