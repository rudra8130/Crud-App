import { useSelector } from "react-redux";
import EmployeeTable from "../Components/Employee-table";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <EmployeeTable />
    </div>
  );
};
export default Home;
