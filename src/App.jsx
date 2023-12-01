import React, { lazy, Suspense } from "react";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/common/Loader";
import AccountPage from "./pages/AccountPage";
const LoginPage = lazy(() => import("./pages/LoginPage"));
import { ProductProvider } from "./ProductContext";
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function App() {
  return (
    <div className="App">
      <ProductProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="loader"><Loader /></div>}>
        <Routes>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
        </Suspense>
      </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
