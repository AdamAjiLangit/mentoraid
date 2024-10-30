import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "@/constants";

interface FormFieldProps {
    title: string
    value: string
    placeholder?: string
    handleChangeText: (e: string) => void
    otherStyles?: string
}

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-xl text-primaryNormal font-pmedium">{title}</Text>

            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border border-[#E1E1E1] focus:border-secondary flex flex-row items-center">
                <TextInput
                    className="flex-1 font-pregular text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#808080"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eyeHide : icons.eye}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
                {title === "Confirm Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eyeHide : icons.eye}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;