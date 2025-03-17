import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Navigate to="/html" replace />} />
          <Route
            path="/html"
            element={
              <>
                
                <Resources category="html" />
              </>
            }
          />
          <Route
            path="/css"
            element={
              <>
               
                <Resources category="css" />
              </>
            }
          />
          <Route
            path="/javascript"
            element={
              <>
                
                <Resources category="javascript" />
              </>
            }
          />
          <Route
            path="/react"
            element={
              <>
                
                <Resources category="react" />
              </>
            }
          />
          <Route
            path="/sanity"
            element={
              <>
                
                <Resources category="headless-cms" />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}