import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { ResumeForm } from "./pages/ResumeForm";
import { JobList } from "./pages/JobList";
import { JobDetail } from "./pages/JobDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/resume-builder" element={<ResumeForm />}></Route>
        <Route path="/job-list" element={<JobList />}></Route>
        <Route path="/job-detail" element={<JobDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
