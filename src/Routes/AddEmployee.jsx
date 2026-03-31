import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/userslice";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const refid = useRef();
  const refname = useRef();
  const refemail = useRef();
  const refphone = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const user = [
      {
        id: refid.current.value,
        name: refname.current.value,
        email: refemail.current.value,
        phone: refphone.current.value,
      },
    ];
    console.log(user);
    dispatch(userActions.addUsers(user));
    navigate("/");
  };

  return (
    <div className="blur-bg1 d-flex justify-content-center align-items-center">
      <div className="card glass-card1 p-4">
        <h3 className="text-center mb-4">Add Employee</h3>

        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className="form-label">Employee ID</label>
            <input
              type="number"
              className="form-control"
              name="id"
              required
              ref={refid}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              ref={refname}
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
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddEmployee;
