import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
