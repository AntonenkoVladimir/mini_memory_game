import {useSelector} from "react-redux";
import Start from "../../Start/Start";
import Auth from "../../Auth/Auth";
import "./Login.scss";

const Login = () => {
  const user = useSelector(store => store["currentUser"]);

  return (
    <div className="login">
      {!!user ? <Start user={user}/> : <Auth/>}
    </div>
  );
}

export default Login;
