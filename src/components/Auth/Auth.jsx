import {useDispatch, useSelector} from "react-redux";
import {addCurrentUser, addUser} from "../../store/actionCreators/actions";
import "./Auth.scss";

const Auth = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store["usersList"]);

  const checkForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName");
    if (!!users.length && users.some(item => item.name === userName)) {
      dispatch(addCurrentUser(userName));
    } else {
      dispatch(addUser(userName));
    }
  }

  return (
    <div className="auth">
      <h1>Authorization</h1>
      <form onSubmit={checkForm}>
        <input type="text" name="userName" placeholder="username"/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Auth;
