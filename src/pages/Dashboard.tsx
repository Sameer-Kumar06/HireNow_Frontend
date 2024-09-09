import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useRedirectToSignup } from "../hooks/useRedirect";

export function Dashboard() {
  useRedirectToSignup();
  return <div>Dashboard after login</div>;
}
