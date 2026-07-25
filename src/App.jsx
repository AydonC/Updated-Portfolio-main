import React, { useState, useEffect } from 'react';
import ProfilePage from './pages/ProfilePage';
import CaseStudies from './pages/CaseStudies';
import CaseStudiesButton from './components/CaseStudiesButton';
import DownloadCVButton from './components/DownloadCVButton';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
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

  return (
    <div className='page'>
      <ScrollProgress />
      {isCaseStudies ? <CaseStudies /> : <ProfilePage />}
      <DownloadCVButton />
      <CaseStudiesButton active={isCaseStudies} />
      <ScrollToTop />
    </div>
  );
}

export default App;
