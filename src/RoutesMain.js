import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admins from "./Pages/Admins";
import ChangePassword from "./Pages/ChangePassword";
import ForgotPassoword from "./Pages/Common/ForgotPassoword";
import Login from "./Pages/Common/Login";
import OtpVerification from "./Pages/Common/OtpVerification";
import ResetPassword from "./Pages/Common/ResetPassword";
import Dashboard from "./Pages/Dashboard";
import EditProfile from "./Pages/EditProfile";
import MyProfile from "./Pages/MyProfile";
import Transactions from "./Pages/Transactions";
import ReportedPost from "./Pages/ReportedPost";
import Newsfeed from "./Pages/Newsfeed";
import Athlete from "./Pages/Athlete";
import AdminDetails from "./Pages/AdminDetails";
import DealsBusiness from "./Pages/DealsBusiness";
import DealsCoach from "./Pages/DealsCoach";
import UserFan from "./Pages/UserFan";
import UserParent from "./Pages/UserParent";
import UsersCoach from "./Pages/UsersCoach";
import UsersAthlete from "./Pages/UsersAthlete";
import UserParentAthlete from "./Pages/UserParentAthlete";
import UserCoachTeam from "./Pages/UserCoachTeam";
import UserAthleteOffer from "./Pages/UserAthleteOffer";
import UsersBusinessDeals from "./Pages/UsersBusinessDeals";
import UsersBusiness from "./Pages/UsersBusiness";

export default function RoutesMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/forgot-passoword" exact element={<ForgotPassoword />} />
                <Route path="/reset-password" exact element={<ResetPassword />} />
                <Route path="/otp-verification" exact element={<OtpVerification />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/admins" exact element={<Admins />} />
                <Route path="/my-profile" exact element={<MyProfile />} />
                <Route path="/edit-profile" exact element={<EditProfile />} />
                <Route path="/change-password" exact element={<ChangePassword />} />
                <Route path="/transactions" exact element={<Transactions />} />
                <Route path="/newsfeed" exact element={<Newsfeed />} />
                <Route path="/reported-post" exact element={<ReportedPost />} />
                <Route path="/athlete" exact element={<Athlete />} />
                <Route path="/admin-details" exact element={<AdminDetails />} />
                <Route path="/deals-business" exact element={<DealsBusiness />} />
                <Route path="/deals-coach" exact element={<DealsCoach />} />
                <Route path="/users-fan" exact element={<UserFan />} />
                <Route path="/users-parent" exact element={<UserParent />} />
                <Route path="/users-coach" exact element={<UsersCoach />} />
                <Route path="/users-athlete" exact element={<UsersAthlete />} />
                <Route path="/user-parent-athlete" exact element={<UserParentAthlete />} />
                <Route path="/user-coach-team" exact element={<UserCoachTeam />} />
                <Route path="/user-athlete-offer" exact element={<UserAthleteOffer />} />
                <Route path="/users-business-deals" exact element={<UsersBusinessDeals />} />
                <Route path="/users-business" exact element={<UsersBusiness />} />
            </Routes>
        </BrowserRouter>
    );
}
