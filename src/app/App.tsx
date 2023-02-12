import './styles/index.scss'
import {AppRoutesProvider} from "app/providers";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "shared/hooks";
import {classNames} from "shared/lib";

const App = () => {
    const {theme, handleToggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>

            <button onClick={handleToggleTheme}>Изменить тему</button>

            <AppRoutesProvider />
        </div>
    );
};

export default App;