import Navbar from "../../Components/Navbar/navbar";
import Form from "../../Components/Form/form";
import User from "../../Pages/User/user";
import Calc from "../../Pages/Calc/calc";
import Color from "../Color/color";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Form />
      <User />
      <Calc />
      <Color />
    </div>
  );
}
