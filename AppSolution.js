import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Current Location:', location);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Added a catch-all route to handle potential mismatches */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;