import { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const onsubmithandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={onsubmithandler}>
        <label for="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          required
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <label for="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          required
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmit ? (
        <p>
          Full Name: {fname} {lname}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
