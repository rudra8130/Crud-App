import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/userslice";

const Fetchuser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/users", { signal })
      .then((res) => res.json())
      .then((user) => {
        dispatch(userActions.addUsers(user));
      }, []);

    return () => {
      controller.abort();
    };
  }, []);
  return null;
};

export default Fetchuser;
