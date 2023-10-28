import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import { Fragment, useEffect, useState } from 'react';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Popper/Menu/Menu';
// import myLogo from './assets/images/myLogo.svg';
// function useTest() {
//     const [data, setData] = useState(1);
//     useEffect(() => {
//         console.log('use effect');
//         setTimeout(() => {
//             setData(data + 1);
//         }, 1000);
//         return () => {
//             console.log(2);
//         };
//     });
//     return {
//         data,
//         haha: console.log('return'),
//     };
// }
function App() {
    // const [test, setTest] = useState({ name: 'haha' });

    // console.log('re-render');
    // useEffect(() => {
    //     console.log('useeffect');
    //     // fetch('https://jsonplaceholder.typicode.com/posts')
    //     //     .then((res) => res.json())
    //     //     .then((posts) => {
    //     //         console.log(test === posts);
    //     //         setTest(posts);
    //     //     });
    //     // console.log({ ...test });
    //     // setTest({ ...test });
    //     // return () => {
    //     //     console.log('return');
    //     // };
    // }, [test]);
    return (
        <Router>
            <div className="App">
                {/* {console.log('render')} */}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
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
