import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {clearScore, updateBest} from "../../../store/actionCreators/actions";
import "./End.scss";

const End = () => {
  const score = useSelector(store => store["currentScore"]);
  const user = useSelector(store => store["currentUser"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEndGame = () => {
    if(score > user.best) {
      dispatch(updateBest(score));
    }
    dispatch(clearScore());
    navigate("/login");
  };

  return (
    <div className="end">
      <h1>Game over!</h1>
      <p>Score: {score}</p>
      <button onClick={handleEndGame}>Return to start</button>
    </div>
  );
}

export default End;
