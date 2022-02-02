import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// menu
import Menu from './components/menu/MenuWidget/Menu';
import HomePage from './components/menu/Pages/HomePage';
import DriftPage from './components/menu/Pages/DriftPage';
import TimeAttackPage from './components/menu/Pages/TimeAttackPage';
import ForzaPage from './components/menu/Pages/ForzaPage';


// Crud
import PostReviewCard from './components/crud/PostReviewCard';
import HomeNewPage from './components/crud/HomeNewPage';
import NewPost from './components/crud/NewPost';

function App() {
  return (
    <>
      <Router>
        <div className='box'>
          <div className='title'>menu</div>
          <div className='menu-wrapper'>
            <Menu />
            <div className='page'>
              <Route path="/" exact component={HomePage} />
              <Route path="/drift" component={DriftPage} />
              <Route path="/timeattack" component={TimeAttackPage} />
              <Route path="/forza" component={ForzaPage} />
            </div>
          </div>
        </div>
      </Router>

      <Router>
        <div className='container'>
          <div className='title'>crud</div>
          <Switch>
            <Route path='/posts/new' component={NewPost} />
            <Route path='/posts/:id' component={PostReviewCard} />
            <Route path='/' component={HomeNewPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
