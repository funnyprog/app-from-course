import { Suspense } from 'react';
import './styles/index.scss';
import { AppRoutesProvider } from 'app/providers';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'shared/hooks';
import { classNames } from 'shared/lib';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="page-content">
                    <Sidebar />
                    <AppRoutesProvider />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
