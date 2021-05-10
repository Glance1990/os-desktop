// Core
import { useDispatch } from "react-redux";
import SC from "soundcloud";
// Actions
// import { infoActions } from "../../bus/info/actions";

// Styles
import styles from "./styles.module.scss";

const MusicPlayer = (props) => {
  SC.initialize({
    client_id: "APKAI6TU7MMXM5DG6EPQ",
  });

  var track_url = "https://soundcloud.com/forss/flickermood";
  SC.oEmbed(track_url, { auto_play: true }).then(function (oEmbed) {});
  // const dispatch = useDispatch();
  // const { customInfo, icon, iconPath, id, title } = props.info;

  // const createMarkup = (text) => {
  //   return { __html: text };
  // };

  // const handleClick = () => {
  //   dispatch(infoActions.loadArticleAsync(id));
  // };

  return (
    <div>
      <button>Play</button>
      <button>Pause</button>
    </div>
  );
};

export default MusicPlayer;
