import { render } from 'react-dom';
import './shared/config/i18n';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider, ErrorBoundary, StoreProvider } from 'app/providers';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
