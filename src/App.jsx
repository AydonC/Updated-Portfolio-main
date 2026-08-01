import React, { useState, useEffect } from 'react';
import ProfilePage from './pages/ProfilePage';
import CaseStudies from './pages/CaseStudies';
import Services from './pages/Services';
import CaseStudiesButton from './components/CaseStudiesButton';
import DownloadCVButton from './components/DownloadCVButton';
import ServicesButton from './components/ServicesButton';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

const getRoute = () => window.location.hash.replace(/^#/, '') || '/';

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isCaseStudies = route === '/case-studies';
  const isServices = route === '/services';
  const isSubpage = isCaseStudies || isServices;

  const page = isServices ? <Services /> : isCaseStudies ? <CaseStudies /> : <ProfilePage />;

  return (
    <div className='page'>
      <ScrollProgress />
      <ThemeSwitcher />
      {page}

      {/* Right-hand floating action stack (bottom → top: Case Studies, CV, Services) */}
      <div className='fixed bottom-6 right-6 z-[70] flex flex-col-reverse items-end gap-3'>
        <CaseStudiesButton active={isSubpage} />
        <DownloadCVButton />
        <ServicesButton />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
