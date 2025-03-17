import React from "react";
import { Pressable } from "react-native";

import JapanMap from "../../assets/svg/japan";
import useModel from "./useModel";

const JapanRap = () => {
  const { weatherDataFetch } = useModel();
  const onPressFunction = async (id: string) => {
    const data = await weatherDataFetch(id);

    if (!data) return;

    alert(data[0].publishingOffice);
  };

  return (
    <Pressable>
      <JapanMap onPress={onPressFunction} />
    </Pressable>
  );
};

export default JapanRap;
