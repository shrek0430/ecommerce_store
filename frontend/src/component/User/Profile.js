import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);
    console.log(user.success);
    console.log(user?.user);
    console.log(user?.user?.name);



    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login");
        }
    }, [navigate, isAuthenticated]);
    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={`${user?.user?.name}'s Profile`} />
                    <div className="profileContainer">
                        <div>
                            <h1>My Profile</h1>
                            <img src={user?.user?.avatar?.url} alt={user?.user?.name} />
                            <Link to="/me/update">Edit Profile</Link>
                        </div>
                        <div>
                            <div>
                                <h4>Full Name</h4>
                                <p>{user?.user?.name}</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>{user?.user?.email}</p>
                            </div>
                            <div>
                                <h4>Joined On</h4>
                                <p>{String(user?.user?.createdAt).substring(0,10)}</p>
                            </div>

                            <div>
                                <Link to="/orders">My Orders</Link>
                                <Link to="/password/update">Change Password</Link>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Profile;
