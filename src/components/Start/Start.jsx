import {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {logout} from "../../store/actionCreators/actions";
import BestScores from "../BestScores/BestScores";
import "./Start.scss";

const Start = ({user}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isBest, setIsBest] = useState(false);

  return (
    <div className="start">
      <div className="login-score-table" onClick={() => setIsBest(!isBest)}>Best scores</div>
      {isBest && <BestScores setIsBest={setIsBest}/>}
      <h1>{user.name}</h1>
      <p>Best score: {user.best}</p>
      <button onClick={() => navigate(`/game/${user.name}/1`)}>Start game!</button>
      <div className="start-logout" onClick={() => dispatch(logout())}>Logout</div>
    </div>
  );
}

export default Start;
