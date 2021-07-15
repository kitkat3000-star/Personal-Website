import Sidebar from './Sidebar';
import './App.css';
import { Switch} from 'react-router';
import { Route } from 'react-router';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Documents from './Pages/Documents';
import Interests from './Pages/Interests';
import { AnimatePresence } from 'framer-motion';


// const Pages = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display:flex;
//     justify-content:center;
//     align-items: center;

//     h1{
//       font-size:calc(2rem+2vw);
//       background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//     }
// `;

function App() {

  return (
    <>
      <Sidebar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/documents" component={Documents} />
            <Route path="/interests" component={Interests} />
          </Switch>
        </AnimatePresence>
    </>
  );
}

export default App;
