import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
            <Stack.Screen name="check-email" options={{ headerShown: false }} />
            <Stack.Screen name="verify-success" options={{ headerShown: false }} />
            <Stack.Screen name="new-password" options={{ headerShown: false }} />
        </Stack>
    )
}

export default AuthLayout