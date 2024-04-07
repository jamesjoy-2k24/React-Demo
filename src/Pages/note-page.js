import "../Pages/note-page.css";
import Navbar from "../Components/Navbar/navbar";
import Note from "../Components/Note/note";
import Button from "../Components/Button/button";

export default function notePage() {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "white", textAlign: "center" }}>This is Note Page</h1>
      <div className="note">
        <div className="note-ID">
          <Note text="Note ID" type="text" id="note-ID" />
        </div>
        <div className="note-Content">
          <Note text="Note Content" type="textarea" id="note-Content" />
        </div>
        <div className="Created">
          <Note text="Created By" type="text" id="Created" />
        </div>
        <div className="date">
          <Note text="Date" type="text" id="date" />
        </div>
        <div className="edit">
          <Button type="submit" text="Edit" />
        </div>
        <div className="delete">
          <Button type="submit" text="Delete" />
        </div>
      </div>
    </div>
  );
}
