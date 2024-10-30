import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/AntDesign';

const BottomNavbar = () => {
    return (
        <View className="flex-row justify-between items-center bg-white p-4 border-t border-gray-200">
            {/* Beranda */}
            <TouchableOpacity className="flex-1 items-center">
                <Icon3 name="home" size={24} color="#5A5DFF" />
                <Text className="text-xs text-primaryNormal font-pregular">Beranda</Text>
            </TouchableOpacity>

            {/* Unggah */}
            <TouchableOpacity className="flex-1 items-center">
                <Icon2 name="cloud-upload" size={24} color="#9DB2CE" />
                <Text className="text-xs text-[#9DB2CE] font-pregular">Unggah</Text>
            </TouchableOpacity>

            {/* Diamond-shaped "+" button */}
            <TouchableOpacity
                className="items-center justify-center bg-primaryNormal rounded-lg mx-2"
                style={{ width: 50, height: 50, transform: [{ rotate: '45deg' }] }}
            >
                <Icon name="add" size={24} color="white" style={{ transform: [{ rotate: '-45deg' }] }} />
            </TouchableOpacity>

            {/* Pesan */}
            <TouchableOpacity className="flex-1 items-center">
                <Icon4 name="chatbubble-ellipses-outline" size={24} color="#9DB2CE" />
                <Text className="text-xs text-[#9DB2CE] font-pregular">Pesan</Text>
            </TouchableOpacity>

            {/* Pengaturan */}
            <TouchableOpacity className="flex-1 items-center">
                <Icon5 name="setting" size={24} color="#9DB2CE" />
                <Text className="text-xs text-[#9DB2CE] font-pregular">Setting</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomNavbar;
