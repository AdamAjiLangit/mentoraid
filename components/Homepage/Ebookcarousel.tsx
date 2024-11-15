import { images } from '@/constants';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const bookData = [
  {
    id: 1,
    image: images.ebook, 
    title: "True Stalker",
    author: "Sirhayani",
    tag: "cool",
    views: "33.3 Jt",
  },
  {
    id: 2,
    image: images.ebook,
    title: "Mr. RIGHT",
    author: "Defanny",
    tag: "hurt",
    views: "2.81 Jt",
  },
  {
    id: 3,
    image: images.ebook,
    title: "A Feather Away",
    author: "Eternal Blooms",
    tag: "fun",
    views: "88.3 K",
  },
  {
    id: 4,
    image: images.ebook,
    title: "Apple of My Eye",
    author: "Author Name",
    tag: "lucu",
    views: "2.8 Jt",
  },
];

const EbookCarousel = () => {
  return (
    <View className="flex-1">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
        contentContainerStyle={{ paddingHorizontal: 10 }} // Padding for the ScrollView
      >
        {bookData.map((book) => (
          <TouchableOpacity key={book.id} className="flex-1 items-center mx-2">
            <Image
              source={book.image}
              className="w-28 h-40 rounded-lg mb-2"
              resizeMode="cover"
            />
            <View className="bg-gray-700 rounded-full px-2 py-1 mt-2">
              <Text className="text-white text-xs">{book.title}</Text>
            </View>
            <Text className="text-black text-xs mt-1">{book.views}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default EbookCarousel;
