import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PrivacyPolicy from '../support/privacy-policy/privacy-policy';
import TermsAndConditions from '../support/termsAndConditions/TermsAndConditions';
import Terms from '../support/terms/terms';
import NotFound from '../error-page/NotFound';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/terms-conditions" element={<TermsAndConditions />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
