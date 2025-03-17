import React from "react";
import { Pressable } from "react-native";

import JapanMap from "../assets/svg/japan";

const JapanRap = () => {
  const onPressFunction = (id: string) => {
    alert(`Clicked: ${id}`);
  };

  return (
    <Pressable>
      <JapanMap onPress={onPressFunction} />
    </Pressable>
  );
};

export default JapanRap;
