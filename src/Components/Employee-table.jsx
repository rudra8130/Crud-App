import { useSelector } from "react-redux";
import Employee from "./Employee";
const EmployeeTable = () => {
  const users = useSelector((store) => store.users.users);
  return (
    <div className="container mt-4">
      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Employee key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeTable;
