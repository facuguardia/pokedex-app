import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addFavoriteApi,
  isPokemonFavoriteApi,
  removeFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        throw error;
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheck = () => {
    setReloadCheck((prevState) => !prevState);
  };

  const addFavorite = async () => {
    try {
      await addFavoriteApi(id);
      onReloadCheck();
    } catch (error) {
      throw error;
    }
  };

  const removeFavorite = async () => {
    try {
      await removeFavoriteApi(id);
      onReloadCheck();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Icon
      name="heart"
      size={20}
      color="#fff"
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20, marginTop: 8 }}
    />
  );
}
