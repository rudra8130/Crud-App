import { MdOutlineEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/userslice";
import { useNavigate } from "react-router-dom";
const Employee = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleedit = (user) => {
    navigate(`/edit/${user.id}`);
  };
  const handledelete = (id) => {
    dispatch(userActions.deleteuser(id));
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <button
          type="button"
          className="btn btn-info btn-sm me-2"
          onClick={() => handleedit(user)}
        >
          <MdOutlineEdit /> Edit
        </button>

        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => handledelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default Employee;
