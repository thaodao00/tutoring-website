import { Button } from 'bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import Home from './pages/Home/Home';
import Tutor from './pages/Tutor/Tutor';
import { publicRoutes } from './routes';
// import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
