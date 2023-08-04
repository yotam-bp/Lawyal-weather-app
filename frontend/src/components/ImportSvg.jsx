import React from "react";
import { ReactComponent as Broken } from "../assets/icons/broken-image.svg";
import { ReactComponent as Cloudy } from "../assets/icons/cloudy.svg";
import { ReactComponent as FavoriteFill } from "../assets/icons/favorite-fill.svg";
import { ReactComponent as Favorite } from "../assets/icons/favorite.svg";
import { ReactComponent as PartlyCloudyDay } from "../assets/icons/partly-cloudy-day.svg";
import { ReactComponent as PartlyCloudyNight } from "../assets/icons/partly-cloudy-night.svg";
import { ReactComponent as Rainy } from "../assets/icons/rainy.svg";
import { ReactComponent as Sunny } from "../assets/icons/sunny.svg";

const locationCardIcons = {
  "broken-image": Broken,
  "cloudy": Cloudy,
  "favorite-fill": FavoriteFill,
  "favorite": Favorite,
  "partly-cloudy-day": PartlyCloudyDay,
  "partly-cloudy-night": PartlyCloudyNight,
  "rainy": Rainy,
  "sunny": Sunny,
};

const LocationCardSvg = ({ weatherIcon }) => {
  const SvgComponent = locationCardIcons[weatherIcon];

  return <span>{SvgComponent ? <SvgComponent fill="#2f2f2f" /> : <Broken />}</span>;
};

export default LocationCardSvg;
