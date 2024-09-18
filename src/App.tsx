import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import {Home} from "./pages/Home"
import { Login } from "./pages/Login";
import { ResumeForm } from "./pages/ResumeForm";
import { JobList } from "./pages/JobList";
import { JobDetail } from "./pages/JobDetail";
import { InternshipList } from "./pages/InternshipList";
import { InternshipDetail } from "./pages/InternshipDetail";
import { Chat } from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/resume-builder" element={<ResumeForm />}></Route>
        <Route path="/job-list" element={<JobList />}></Route>
        <Route path="/job-detail" element={<JobDetail />} />
        <Route path="/internship-list" element={<InternshipList />}></Route>
        <Route path="/internship-detail" element={<InternshipDetail />} />
        <Route path="/ai-chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
