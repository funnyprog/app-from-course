import './styles/index.scss'
import {AppRoutesProvider} from "app/providers";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTheme} from "shared/hooks";
import {classNames} from "shared/lib";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>

            <div className="page-content">
                <Sidebar />
                <AppRoutesProvider />
            </div>
        </div>
    );
};

export default App;