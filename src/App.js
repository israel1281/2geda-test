import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProfile1 } from "./UserProfile1";
import { Onboarding1 } from "./Onboarding1";
import { Signup } from "./Signup";
import { SignIn2 } from "./SignIn2";
import { Verify2 } from "./Verify2";
import { ProfileDetails2 } from "./ProfileDetails2";
import { Home3 } from "./Home3";
import { Outlet2 } from "./Outlet2";
import { ForgetPassword1 } from "./ForgetPassword1";
import { People2 } from "./People2";
import { Upload2 } from "./Upload2";
import { PostPreview1 } from "./PostPreview1";

export default function App() {
  document.body.style.backgroundColor = "#e5e5e5";
  document.body.style.margin = "0";
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Onboarding1 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn2 />} />
        <Route path="/verify" element={<Verify2 />} />
        <Route path="/outlet" element={<Outlet2 />} />
        <Route path="/People2" element={<People2 />} />
        <Route path="/home" element={<Home3 />} />
        <Route path="/profile" element={<UserProfile1 />} />
        <Route path="/forget-password" element={<ForgetPassword1 />} />
        <Route path="/profile-details" element={<ProfileDetails2 />} />
        <Route path="/upload" element={<Upload2 />} />
        <Route path="/post-preview" element={<PostPreview1 />} />
      </Routes>
    </BrowserRouter>
  );
}
