import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {appRoutesConfig} from "app/providers";

export const AppRoutesProvider = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(appRoutesConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
