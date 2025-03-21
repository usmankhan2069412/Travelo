import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopUpForm from './PopUpForm';
import UpdatePopUpForm from './UpdatePopUpForm';

function AdminUser() {
    const [users, setUsers] = useState([]);
    const [seen, setSeen] = useState(false);
    const [updateSeen, setUpdateSeen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const fetchUserData = () => {
        axios.get("http://localhost:5000/contact")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const togglePop = () => {
        setSeen(!seen);
    };

    const toggleUpdatePop = () => {
        setUpdateSeen(!updateSeen);
    };

    const handleEditClick = (user) => {
        setCurrentUser(user);
        toggleUpdatePop();
    };

    const handleDeleteClick = (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`http://localhost:5000/contact/${userId}`)
                .then(() => {
                    fetchUserData();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="p-4 sm:p-8 font-sans bg-gray-50 min-h-screen">
            <h1 className="text-center mb-8 text-3xl sm:text-4xl font-semibold text-gray-800">User Management</h1>
            <div className="mb-6 text-center">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 sm:px-8 rounded-lg shadow-md transition duration-200"
                    onClick={togglePop}
                >
                    + Add User
                </button>
            </div>

            {seen && <PopUpForm toggle={togglePop} onFormSubmit={fetchUserData} />}
            {updateSeen && currentUser && (
                <UpdatePopUpForm
                    toggle={toggleUpdatePop}
                    onFormSubmit={fetchUserData}
                    currentUser={currentUser}
                />
            )}

            {users.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full mt-6 bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-sm sm:text-base">
                                <th className="py-3 px-4 text-center font-medium">Name</th>
                                <th className="py-3 px-4 text-center font-medium">Email</th>
                                <th className="py-3 px-4 text-center font-medium">Subject</th>
                                <th className="py-3 px-4 text-center font-medium">Message</th>
                                <th className="py-3 px-4 text-center font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition duration-150">
                                <td className="py-4 px-4 text-center text-sm sm:text-base text-gray-700 font-medium">{user.name}</td>
                                <td className="py-4 px-4 text-center text-sm sm:text-base text-gray-600 break-words">{user.email}</td>
                                <td className="py-4 px-4 text-center text-sm sm:text-base text-gray-600 break-words">{user.subject}</td>
                                <td className="py-4 px-4 text-center text-sm sm:text-base text-gray-600 break-words">{user.message}</td>
                                <td className="py-4 px-4 text-center">
                                    <div className="flex justify-center items-center space-x-2">
                                        <button
                                            className="font-semibold bg-yellow-500 text-white  hover:bg-yellow-600 transition duration-200 px-2 py-1 rounded "
                                            onClick={() => handleEditClick(user)}
                                        >
                                            Edit
                                        </button>
                                        <span className= "text-gray-400">|</span> {/* Separator line */}
                                        <button
                                            className=" bg-red-500 text-white font-semibold transition hover:bg-red-600 duration-150 px-2 py-1 rounded "
                                            onClick={() => handleDeleteClick(user._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-lg">Loading user data...</p>
                </div>
            )}
        </div>
    );
}

export default AdminUser;
