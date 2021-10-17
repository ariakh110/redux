import { BrowserRouter, Route, Link } from "react-router-dom";

const Pageone = () => {
  return <> page 1</>;
};
const Pagetwo = () => {
  return <> page 2</>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <p>
          <Link to="/">home</Link>

          <Link to="/about">about</Link>
        </p>
        <Route path="/" component={Pageone} exact />
        <Route path="/about" component={Pagetwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
