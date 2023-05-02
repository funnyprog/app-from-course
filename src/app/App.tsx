import { Suspense, useEffect } from 'react';
import { AppRoutesProvider } from 'app/providers';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/user';
import { useAppDispatch } from 'shared/hooks';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
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
