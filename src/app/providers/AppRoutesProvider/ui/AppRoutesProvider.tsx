import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutesConfig } from 'app/providers';
import { LoadingPage } from 'pages/LoadingPage';

export const AppRoutesProvider = () => (
    <Suspense fallback={<LoadingPage />}>
        <Routes>
            {Object.values(appRoutesConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);
