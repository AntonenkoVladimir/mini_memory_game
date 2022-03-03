import {useEffect, useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {changeScore} from "../../../store/actionCreators/actions";
import "./Game.scss";

const Game = () => {
  const navigate = useNavigate();
  const params = useParams();
  const newNumbers = () => {
    const result = [];
    for (let i = 0; i < 16; i++) {
      result.push({id: i, value: (Math.floor(Math.random() * 10))});
    }
    return result;
  }

  const dispatch = useDispatch();
  const score = useSelector(store => store["currentScore"]);

  const numbers = useMemo(() => newNumbers(), [params.lvl]);
  const [chosen, setChosen] = useState([]);
  const [predict, setPredict] = useState(null);
  const [predictCount, setPredictCount] = useState(null);
  const [rightChose, setRightChose] = useState(0);
  const [toLose, setToLose] = useState(3);
  const [hover, setHover] = useState(true);

  const checkFunc = (item) => {
    if (!chosen.includes(item.id)) {
      setChosen([...chosen, item.id]);
      if (item.value === predict) {
        dispatch(changeScore(10));
        setRightChose(rightChose + 1);
        if (rightChose + 1 === predictCount) {
          dispatch(changeScore(50));
          setTimeout(() => {
            navigate(`/game/${params.user}/${Number(params.lvl) + 1}`);
            window.location.reload();
          }, 500)
        }
      } else {
        setToLose(toLose - 1);
        if (!(toLose - 1)) {
          setTimeout(() => {
            navigate(`/end/${params.user}`);
          }, 500);
        }
      }
    }
  }

  useEffect(() => {
    const cards = document.querySelectorAll(".game-card");
    const timeToShow = 3000 - (600 * Math.log(+params.lvl));
    const newPredict = numbers[Math.floor(Math.random() * numbers.length)].value;
    setTimeout(() => cards.forEach(item => item.classList.toggle("flip")), 1000);
    setTimeout(() => cards.forEach(item => item.classList.toggle("flip")), 1000 + timeToShow);
    setTimeout(() => {
      setPredict(newPredict);
      setHover(false);
    }, 1000 + timeToShow + 1000);
    setPredictCount(numbers.filter(item => item.value === newPredict).length);
  }, [])

  return (
    <div className="game">
      <div className={"game-score"}>
        <div className={"game-score-header"}>
          <h1>Score:</h1>
        </div>
        <p>{score}</p>
      </div>
      <div className={"game-predict"}>
        <div className={"game-predict-header"}>
          <h1>Number(s) to find:</h1>
        </div>
        <p>{predict !== null && predict}</p>
      </div>
      {
        numbers.map(item =>
          <div
            key={item.id}
            className={`game-card ${chosen.includes(item.id) ? "flip" : ""}`}
          >
            <div
              className={`game-card-value ${predict !== null ? item.value === predict ? "game-card-true" : "game-card-false" : ""}`}>{item.value}</div>
            <div className={"game-card-back"} onClick={() => checkFunc(item)}>?</div>
          </div>)
      }
      {hover && <div className={"game-hover-div"}/>}
    </div>
  );
}

export default Game;
