import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import DesignSystemPreview from '@/components/DesignSystem';
import Pages from './components/LandingPage/Pages';


import Pages from './components/LandingPage/Pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/design-system" element={<DesignSystemPreview />} /> */}
        {/* Redirect root to design system until pages are built */}
        {/* <Route path="*" element={<Navigate to="/design-system" replace />} /> */}
      <Route path="/pages" element={<Pages/>}/>
      <Route path="*" element={<Navigate to="/Pages" replace />} />
      </Routes>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    </BrowserRouter>
  
    
  )
}
