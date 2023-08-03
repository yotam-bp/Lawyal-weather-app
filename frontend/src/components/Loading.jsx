import classes from '../styles/components/Loading.module.css'; 

const Loading = () => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loading;
