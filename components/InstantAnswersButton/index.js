// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { infoActions } from "../../bus/info/actions";
// Selectors
import { selectInfoBoxState } from "../../bus/info/selectors";
// Styles
import styles from "./styles.module.scss";

const InstantAnswersButton = () => {
  const boxOpen = useSelector((state) => {
    const selectInfoBoxStateMap = selectInfoBoxState(state);
    return selectInfoBoxStateMap.boxOpen;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    //dispatch(infoActions.toggleInfoBox());
    dispatch(infoActions.loadSummaryInfoData());
  };

  return (
    <button
      aria-expanded={boxOpen}
      onClick={handleClick}
      className={
        boxOpen
          ? `${styles.opened} ${styles.button}`
          : `${styles.closed} ${styles.button}`
      }
    >
      <span className={styles.icon}>
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.244 21.523l-4.356-4.355a7.192 7.192 0 0 0 0-4.345l4.356-4.355a12.98 12.98 0 0 1 0 13.055zm-.4 3.215l-1.1 1.1a.557.557 0 0 1-.786 0l-4.884-4.884a7.27 7.27 0 0 0 1.885-1.886l4.885 4.885a.55.55 0 0 1 0 .785zM8.471 26.236l4.355-4.354a7.197 7.197 0 0 0 4.347 0l4.355 4.354a12.983 12.983 0 0 1-13.057 0zm-2.43-.398a.556.556 0 0 1-.786 0l-1.1-1.1a.556.556 0 0 1 0-.786l4.884-4.884a7.275 7.275 0 0 0 1.887 1.886L6.04 25.838zm-2.285-4.315a12.98 12.98 0 0 1 0-13.055l4.355 4.354a7.192 7.192 0 0 0 0 4.347l-4.355 4.354zm.399-16.27l1.1-1.1a.554.554 0 0 1 .785 0l4.886 4.884a7.27 7.27 0 0 0-1.887 1.885L4.155 6.039a.556.556 0 0 1 0-.786zm17.373-1.5l-4.355 4.355a7.229 7.229 0 0 0-4.347 0L8.471 3.754a12.99 12.99 0 0 1 13.057 0zm-1.305 11.242A5.228 5.228 0 0 1 15 20.217a5.228 5.228 0 0 1-5.224-5.222A5.228 5.228 0 0 1 15 9.773a5.23 5.23 0 0 1 5.223 5.222zm3.735-10.842a.556.556 0 0 1 .786 0l1.1 1.1a.553.553 0 0 1 0 .786l-4.884 4.883a7.302 7.302 0 0 0-1.886-1.885l4.884-4.884zm3.688 2.786c.23-.39.362-.83.362-1.293 0-.683-.266-1.325-.75-1.807l-1.098-1.1a2.555 2.555 0 0 0-3.101-.387 14.985 14.985 0 0 0-16.125.004c-.973-.548-2.284-.426-3.093.383l-1.101 1.1a2.533 2.533 0 0 0-.387 3.1 14.97 14.97 0 0 0 0 16.114 2.553 2.553 0 0 0 .387 3.099l1.1 1.1A2.549 2.549 0 0 0 5.649 28a2.55 2.55 0 0 0 1.293-.361A14.961 14.961 0 0 0 15 30.002a14.97 14.97 0 0 0 8.059-2.363c.398.234.844.36 1.292.36.655 0 1.31-.25 1.809-.747l1.099-1.1a2.531 2.531 0 0 0 .387-3.1 14.963 14.963 0 0 0 0-16.113z"
            fill="#FFF"
          ></path>
        </svg>
      </span>
      <span className={styles.closeButton}>
        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.707.293a.999.999 0 0 0-1.414 0L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7l5.293-5.293a.999.999 0 0 0 0-1.414"
            fill="#FFF"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default InstantAnswersButton;
