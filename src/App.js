import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';
import { createBrowserHistory } from 'history';

function App() {
    return (
        <Router history={createBrowserHistory()}>
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
