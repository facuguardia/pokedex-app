import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text } from 'react-native'
import { getFavoriteApi} from '../api/favorite'

export default function Favorite() {

  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getFavoriteApi();
      setFavorites(response);
    })();
  }, []);


  return (
    <SafeAreaView>
      <Text>Favorite</Text>
    </SafeAreaView>
  )
}