import Header from "./Components/Header";
import Footer from "./Components/Footer";
import axios from "axios";
import SearchBar from "./Components/SearchBar";

import { Outlet } from "react-router-dom";
import EmployeeTable from "./Components/Employee-table";
import Fetchuser from "./Components/Fetchuser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const api = axios.create({
  baseURL: "http://localhost:8000",
});
function App() {
  return (
    <>
      <div>
        <Header />
        <Fetchuser></Fetchuser>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
