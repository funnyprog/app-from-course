import {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./shared/helpers/classNames/classNames";


const App = () => {
    const {theme, handleToggleTheme} = useTheme()

    return (
        <div className={classNames(
            'app',
            {},
            [theme]
        )}>
            <Link to={'/'}>Главная</Link>
            <br/>
            <Link to={'/about'}>О проекте</Link>

            <button onClick={handleToggleTheme}>Изменить тему</button>

            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}></Route>
                    <Route path={'/about'} element={<AboutPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;