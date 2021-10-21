import React from 'react'

function NotFound() {
    return (
        <div>
            <div className="w-9/12 m-auto mt-32 flex items-center justify-center">
                <div className="text-center">
                    <h1 class="text-9xl font-bold text-red-600">404</h1>
                    <h3 className="text-6xl font-medium py-8">oops! Page not found.</h3>
                    <p class="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

                </div>
            </div>
        </div>
    )
}

export default NotFound
