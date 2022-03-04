import {useMemo} from "react";
import {useSelector} from "react-redux";
import "./BestScore.scss";

const BestScores = ({setIsBest}) => {
  const users = useSelector(store => store["usersList"]);
  const usersToMap = useMemo(() => users.filter(item => (item.best !== 0)).sort((a, b) => (b.best - a.best)), [users]);

  return (
    <div className="best-scores" onClick={() => setIsBest(false)}>
      <div className="best-scores-container" onClick={(e) => e.stopPropagation()}>
        <h1>Best scores</h1>
        <div className="best-scores-user">
          <p><strong>User</strong></p>
          <p><strong>Score</strong></p>
        </div>
        {
          usersToMap.map(user => (
            <div className="best-scores-user" key={user.name}>
              <p>{user.name}</p>
              <p>{user.best}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default BestScores;
