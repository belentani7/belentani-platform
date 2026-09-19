import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Judas from './pages/Judas';
import Music from './pages/Music';
import Portal from './pages/Portal';
import Studio from './pages/Studio';
import AILab from './pages/AI-Lab';
import Galaxy from './pages/Galaxy';
import DevLibrary from './pages/Dev';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Wizard from './components/Wizard';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/not-found" element={<NotFound />} />

              {/* Ruta raíz inmersiva: Wizard + Home */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Wizard>
                      <Home />
                    </Wizard>
                  </ProtectedRoute>
                }
              />

              {/* Dashboard SaaS principal (unificado) */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              {/* Módulos inmersivos del ecosistema Belentani */}
              <Route
                path="/judas"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Judas />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/music"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Music />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/portal"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Portal />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/studio"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Studio />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ai-lab"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <AILab />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/galaxy"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Galaxy />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dev"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <DevLibrary />
                    </Layout>
                  </ProtectedRoute>
                }
              />

              {/* Páginas públicas / operativas */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </div>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
