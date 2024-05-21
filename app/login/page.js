"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    const { data:session } = useSession()

    if(session){
        return (
            <>Hello</>
        )
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gray-900 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 md:p-8 lg:p-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-gray-200 mb-6">Log in</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-lg text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            id="email"
                            className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg text-gray-700 dark:text-gray-300">Password</label>
                        <input
                            id="password"
                            className="mt-1 block w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <a href="#" className="text-blue-500 hover:underline text-sm">Forgot your password?</a>
                    <button
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg shadow-md hover:scale-105 transition-transform"
                        type="submit"
                    >
                        LOG IN
                    </button>
                </form>
                <div className="text-center text-gray-700 dark:text-gray-300 mt-4">
                    Don't have an account? 
                    <a href="#" className="text-blue-500 hover:underline ml-1">Sign Up</a>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        className="p-2 rounded-full shadow-md hover:scale-105 transition-transform"
                        onClick={() => signIn('google')}
                    >
                        <img
                            className="w-6 h-6"
                            src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                            alt="Google"
                        />
                    </button>
                    <button
                        className="p-2 rounded-full shadow-md hover:scale-105 transition-transform"
                        onClick={() => signIn('linkedin')}
                    >
                        <img
                            className="w-6 h-6"
                            src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                            alt="Linkedin"
                        />
                    </button>
                    <button
                        className="p-2 rounded-full shadow-md hover:scale-105 transition-transform"
                        onClick={() => signIn('github')}
                    >
                        <img
                            className="w-6 h-6"
                            src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                            alt="Github"
                        />
                    </button>
                    <button
                        className="p-2 rounded-full shadow-md hover:scale-105 transition-transform"
                        onClick={() => signIn('facebook')}
                    >
                        <img
                            className="w-6 h-6"
                            src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                            alt="Facebook"
                        />
                    </button>
                    <button
                        className="p-2 rounded-full shadow-md hover:scale-105 transition-transform"
                        onClick={() => signIn('twitter')}
                    >
                        <img
                            className="w-6 h-6"
                            src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                            alt="Twitter"
                        />
                    </button>
                    <button
                        className="p-2 rounded-full shadow-md hover:scale-105 transition-transform"
                        onClick={() => signIn('apple')}
                    >
                        <img
                            className="w-6 h-6"
                            src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                            alt="Apple"
                        />
                    </button>
                </div>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    By signing in, you agree to our 
                    <a href="#" className="text-blue-500 hover:underline ml-1">Terms</a> 
                    and 
                    <a href="#" className="text-blue-500 hover:underline ml-1">Privacy Policy</a>.
                </div>
            </div>
        </div>
    )
}

export default Login
