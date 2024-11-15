import { Text, View, Image, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { images } from "@/constants";

export default function Index() {
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Menyembunyikan logo dan memunculkan teks setelah 1 detik
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowText(true);

      // Memulai animasi fade-in untuk teks
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1000); // 1000ms = 1 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="h-full w-full justify-center items-center bg-white p-normal">
      {/* Gambar Logo */}
      {showLogo && (
        <Image
          source={images.splash}
        />
      )}

      {showText && (
        <Animated.Text
          style={{
            opacity: fadeAnim,
            fontSize: 36,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
          }}
        >
          MENTORAID
        </Animated.Text>
      )}
    </View>
  );
}
