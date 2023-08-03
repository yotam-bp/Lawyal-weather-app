import classes from "../styles/components/RainAnimation.module.css";

const RainLoading = () => {
  const numOfRain = 150;
  const rainArray = Array.from({ length: numOfRain }, (_, index) => (
    <i key={index} className={classes.rain}></i>
  ));
  return <>{rainArray}</>;
};

export default RainLoading;
