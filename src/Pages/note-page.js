import Navbar from "../Components/Navbar/navbar";
import Note from "../Components/Note/note";

export default function notePage() {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "white", textAlign: "center" }}>This is Note Page</h1>
      <Note />
    </div>
  );
}
