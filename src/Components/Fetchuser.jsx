import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/userslice";

const Fetchuser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:8000/Emp/", {
      signal,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
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
