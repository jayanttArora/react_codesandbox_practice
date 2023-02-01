import "./styles.css";
import { useState } from "react";

export default function App() {
  // const [data, setData] = useState([
  //   { id: 1, username: "bret" },
  //   { id: 2, username: "samantha" },
  //   { id: 3, username: "samantha" },
  //   { id: 4, username: "samantha2" },
  //   { id: 5, username: "elvis" },
  //   { id: 6, username: "elvis2" },
  //   { id: 7, username: "elvis2" }
  // ]);

  const data = [
    { id: 1, username: "bret" },
    { id: 2, username: "samantha" },
    { id: 3, username: "samantha" },
    { id: 4, username: "samantha2" },
    { id: 5, username: "elvis" },
    { id: 6, username: "elvis2" },
    { id: 7, username: "elvis2" }
  ];

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
      </div>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <h3>{item.username}</h3>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
