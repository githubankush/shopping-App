import React from 'react'
import { useAuth } from '../context/AuthContext'
import Logout from './Logout';
const Profile = () => {
    const { user } = useAuth();
  if (!user) {
    return <h1 className='flex items-center justify-center h-[calc(100vh-8rem)] text-white text-3xl font-bold'>Please login to view your profile</h1>
  }
  return (
    <div className='h-[calc(100vh-8rem)] bg-gradient-to-br from-purple-900 to-indigo-900 text-white overflow-hidden p-10'>
        <h1 className="text-3xl font-bold text-center  text-purple-300">User Profile</h1>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
            <p className="text-gray-700 mb-2"><strong>Name: </strong>{user.name}</p>
            <p className="text-gray-700 mb-2"><strong>Email: </strong>{user.email}</p>  
            <div><Logout /></div>

    </div>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
            <ul className="list-disc pl-5">
                <li className="text-gray-700 mb-2">Order #12345 - $99.99</li>
                <li className="text-gray-700 mb-2">Order #12346 - $49.99</li>
                <li className="text-gray-700 mb-2">Order #12347 - $29.99</li>
            </ul>
        </div>
    </div>
  )
}

export default Profile