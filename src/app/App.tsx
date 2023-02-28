import { Suspense } from 'react';
import { AppRoutesProvider } from 'app/providers';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => (
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

export default App;
