import "./note.css";

export default function Note(props) {
  return (
    <div className="field">
      <label>
        {props.text}
        <input
          type={"props.type"}
          id={"props.id"}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}
