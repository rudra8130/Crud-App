import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../Store/userslice";
import { useNavigate, useParams } from "react-router-dom";
import api from "./api";

const Editdetail = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((u) => u.id === Number(id)),
  );

  const refid = useRef();
  const refname = useRef();
  const refemail = useRef();
  const navigate = useNavigate();
  const refphone = useRef();
  const dispatch = useDispatch();
  if (!user) {
    return <h2>Loading...</h2>;
  }

  const handleedit = async (e) => {
    e.preventDefault();
    const newuserdetails = {
      id: Number(refid.current.value),
      name: refname.current.value,
      email: refemail.current.value,
      phone: refphone.current.value,
    };
    try {
      const token = localStorage.getItem("token");
      await api.put(
        `/Emp/${id}`,
        {
          id: Number(newuserdetails.id),
          name: newuserdetails.name,
          email: newuserdetails.email,
          phone: newuserdetails.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(userActions.edituser(newuserdetails));
      navigate("/");
      alert("Updated Successfully");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      alert(error.response?.data?.detail || "Updation Failed!");
    }
  };
  return (
    <div className="blur-bg d-flex justify-content-center align-items-center">
      <div className="card glass-card1 p-4">
        <h3 className="text-center mb-4">Edit Employee</h3>

        <form onSubmit={handleedit}>
          <div className="mb-3">
            <label className="form-label">Employee ID</label>
            <input
              type="number"
              className="form-control"
              name="id"
              ref={refid}
              required
              defaultValue={user.id}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              ref={refname}
              required
              defaultValue={user.name}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              ref={refemail}
              required
              defaultValue={user.email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              ref={refphone}
              required
              defaultValue={user.phone}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Edit Details
          </button>
        </form>
      </div>
    </div>
  );
};
export default Editdetail;
