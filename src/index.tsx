import { render } from 'react-dom';
import './shared/config/i18n';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider, ErrorBoundary, StoreProvider } from 'app/providers';
import 'app/styles/index.scss';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
