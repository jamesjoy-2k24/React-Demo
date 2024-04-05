import "./form.css";

export default function Form() {
  return (
    <div className="form">
      <h1>To-Do List</h1>
      <form>
        <label>
          Note Title
          <input type="text" id="title" placeholder="Enter Note Title" />
        </label>
        <label>
          Created By
          <input type="text" id="name" placeholder="Enter your name" />
        </label>
        <label>
          Created Date
          <input type="date" id="date" placeholder="Created Date" />
        </label>
        <label>
          Content
          <input type="text" id="content" placeholder="Enter The Content" />
        </label>
        <label>
          Deadline
          <input type="date" id="d-date" placeholder="Enter The Deadline" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
