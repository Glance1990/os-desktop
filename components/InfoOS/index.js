// Core
import { useDispatch } from "react-redux";
// Actions
import { infoActions } from "../../bus/info/actions";

// Styles
import styles from "./styles.module.scss";

const InfoOS = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(infoActions.loadCustomInfoData());
  };

  return (
    <div className={styles.card}>
      <h3>Operating System</h3>
      <p>Your operating system is: ....</p>
      <button onClick={handleClick}>Info</button>
    </div>
  );
};

export default InfoOS;
