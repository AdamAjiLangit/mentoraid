import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomepageLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="homepage" options={{ headerShown: false }} />
        </Stack>
    )
}

export default HomepageLayout