import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Router/Dashboard';
import About from './component/Router/About';
import NavMenu from './component/NavMenu';

function App() {
    const config = {
        router: false,
        lifeCycle: true
    }
    return (
        <>
            <BrowserRouter>
                <NavMenu />
                <Switch>
                    <Route path={['/Router/About']} exact
                        component={About}
                    />
                    <Route path={['/Router/Dashboard']} exact
                        component={Dashboard}
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
