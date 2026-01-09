import Badge from "./components/Badge";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Week 1 Assignment – Reusable Component</h1>

      <Badge label="Course" value="React" />
      <Badge label="Week" value={1} />
      <Badge label="Topic" value="Props" />
      <Badge label="Status" value="Completed" />
    </div>
  );
}

export default App;
