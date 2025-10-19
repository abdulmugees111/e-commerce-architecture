import { Stack } from 'expo-router';
import React from 'react';

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Products',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Product Details',
        }}
      />
    </Stack>
  );
}
