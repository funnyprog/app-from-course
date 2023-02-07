import {Link} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "app/providers";
import {AppRoutesProvider} from "app/providers";
import {classNames} from "shared/lib";

const App = () => {
    const {theme, handleToggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная</Link>
            <br/>
            <Link to={'/about'}>О проекте</Link>

            <button onClick={handleToggleTheme}>Изменить тему</button>

            <AppRoutesProvider />
        </div>
    );
};

export default App;