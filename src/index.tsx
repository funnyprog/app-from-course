import { render } from 'react-dom';
import './shared/config/i18n';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider, ErrorBoundary } from 'app/providers';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
