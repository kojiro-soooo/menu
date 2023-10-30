import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { backend_url } from "../config";
import "./Profile.css"

const Profile = ( {userFullName, userEmail, isAuthenticated, isLoading} ) => {

    const { id } = useParams();
    const [userRecipes, setUserRecipes] = useState(null);

    useEffect(() => {
        const getUserRecipes = async () => {
            const response = await fetch(`${backend_url}/profile/${id}`, {
                method: "GET",
            })
            const json = await response.json();
            setUserRecipes(json);
            // .then((response) => {
            //     const json = response.json();
            //     console.log(json)
            // })
            // .catch((error) => {
            //     console.log(error);
            // });
        };

        getUserRecipes();
    }, [])

    if (isLoading) {
        return (
            <div className="profile__container">
                <div className="profile__card">
                    <h2>Loading...</h2>
                </div>

            </div>
        )
    }

    return (
        <div className="profile__container">
            <div className="profile__card">
                <div className="profile__content">
                    <h1>My Account</h1>
                        <div className="user-information">
                        <h3>Account Information</h3>
                            <p>Name: {userFullName}</p>
                            <p>Email: {userEmail}</p>
                        </div>
                    <div className="user-recipes">
                        <h3>Your Recipes</h3>
                            <ul>
                                {userRecipes && userRecipes.map((item) => 
                                    <li>
                                        <Link
                                            to={`/browse/recipes/${item._id}`}>
                                                {item.title}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Profile;