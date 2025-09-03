import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { HomePage, OurWorkPage, SkillsPage, TeamPage, ContactPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="our-work" element={<OurWorkPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
