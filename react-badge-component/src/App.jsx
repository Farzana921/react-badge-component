import Badge from "./components/Badge";

function App() {
  return (
    <div>
      <h1>Week 1 : Reusable React Component</h1>

      <Badge label="Course" value="React" />
      <Badge label="Week" value={1} />
      <Badge label="Topic" value="Props" />
      <Badge label="Status" value="Completed" />
    </div>
  );
}

export default App;
