import { Stack } from "expo-router";
import React from "react";

export default function FavoritesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Favorites",
        }}
      />
    </Stack>
  );
}
