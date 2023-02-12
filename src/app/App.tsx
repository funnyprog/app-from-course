import './styles/index.scss'
import {AppRoutesProvider} from "app/providers";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "shared/hooks";
import {classNames} from "shared/lib";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>

            <AppRoutesProvider />
        </div>
    );
};

export default App;