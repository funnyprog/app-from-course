import {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./providers";
import {classNames} from "shared/lib";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

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
                    <Route path={'/'} element={<MainPage />}></Route>
                    <Route path={'/about'} element={<AboutPage />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;