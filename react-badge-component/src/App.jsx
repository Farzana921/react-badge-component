import Badge from "./components/Badge";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Week 1 : Reusable React Component</h1>


    <Badge label="Course" value="React" color="blue" />
    <Badge label="Week" value={1} color="green" />
    <Badge label="Topic" value="Props" color="purple" />
    <Badge label="Status" value="Completed" color="orange" />

    </div>
  );
}

export default App;
