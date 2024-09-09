import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const isLoggedIn = false;

export const useRedirectToSignup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signup");
    }
  }, []);
};

export const useRedirectToDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);
};
