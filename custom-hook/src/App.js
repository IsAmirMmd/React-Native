import "./App.css";
import useFetch from "./hook/useFetch";

function App() {
  const { error, data, loading } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );
  console.log(data);
  return (
    <div className="App">
      <p>test</p>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {data && data.map((char) => <p>{char.name}</p>)}
    </div>
  );
}

export default App;
