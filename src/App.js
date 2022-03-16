import { Outlet, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Location from './components/Location';

const Home = () => { return ( <div className="container ps-4 pt-2"><h1 className="display-6">Welcome!</h1></div> ); };

const Layout = () => { return (
  <div className="row w-75 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">ROUTING</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/4" className="nav-link">Number</Link></li>
            <li className="nav-item"><Link to="/hello" className="nav-link">Hello</Link></li>
            <li className="nav-item"><Link to="/hello/blue/red" className="nav-link">HelloInColors</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <hr />
    <Outlet />
  </div>
)};

const NoMatch = () => { return ( <div>That was not a valid route.</div> ) };

export default function App() {
  return (
    <div className="container-fluid my-3">
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path=":base" element={<Location />} />
            <Route path=":base/:color1/:color2" element={<Location />} />
            <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

