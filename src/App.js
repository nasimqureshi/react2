
import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.yahoo.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked { likes } times</p>
        <p>{20}</p>
        <p>{"Hello Nasim"}</p>
        <p>{[2, 6, 9, 8, 7, 4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>yahoo site</a>
      </div>
    </div>
  );
}

export default App;
