import React from "react";
import "./app.css";
import Array from "./assets/Components/Array";
import New from "./assets/Components/CSS Module/New";
import Student from "./assets/Components/Props/Student";

function App() {
  return (
    <div>
      <Array />
      <New />
      <Student name="Neamat" age={30} roll={12} isStudent={true} />
      <Student name="Shuvon" age={28} roll={10} isStudent={false} />
      <Student />
    </div>
  );
}

export default App;
