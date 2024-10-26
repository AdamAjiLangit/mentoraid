import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const LandingLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="landing" options={{ headerShown: false }} />
        </Stack>
    )
}

export default LandingLayout