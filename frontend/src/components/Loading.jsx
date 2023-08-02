import classes from '../styles/components/Loading.module.css'; // Import the CSS Modules file for styling

const Loading = () => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loading;
