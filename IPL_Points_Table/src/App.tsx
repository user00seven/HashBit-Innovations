import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

interface data {
  No: Number;
  Team: String;
  Matches: Number;
  Won: Number;
  Lost: Number;
  Tied: Number;
  NRR: Number;
  Points: Number;
}

type Data = data[];

function Table() {
  const [score, setScore] = useState<Data | undefined>(undefined);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data:Data) => {
        const sortedData = data.sort((a ,b) => a.NRR - b.NRR );
        setScore(sortedData);
      });
  }, []);

  if (score === undefined) {
    return <p>Data is Loading...</p>;
  }

  return (
    <div className="container">
      <h1>IPL Points Table 2022</h1>
      <table id="table">
        <tbody>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRP</th>
            <th>Points</th>
          </tr>
          {score.map((element,index) => {
            return (
              <tr key={index}>
                <td>{element.No.toString()}</td>
                <td>{element.Team}</td>
                <td>{element.Matches.toString()}</td>
                <td>{element.Won.toString()}</td>
                <td>{element.Lost.toString()}</td>
                <td>{element.Tied.toString()}</td>
                <td>{element.NRR.toString()}</td>
                <td>{element.Points.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
