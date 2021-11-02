import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";
/**
 * with React router, each component 
 * needs to be designed to work isolation
 * fetch its own data !

 */
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header></Header>
        <div>
          <Switch>
            {/* dar switch tartibe mohemme */}
            <Route path="/" component={StreamList} exact />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
