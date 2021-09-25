import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SimpleBottomNavigation from './components/ButtomNav/ButtomNav';
import Header from './components/Header/Header';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
