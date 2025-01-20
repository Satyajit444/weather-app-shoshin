import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold tracking-wide mb-4">Something Went Wrong</h1>
        <p className="text-lg mb-6">
          We're sorry, but an unexpected error has occurred. Please try again later.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className="bg-white text-red-600 px-6 py-3 rounded-full shadow-md font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Reload Page
          </button>
        </div>
        <div className="mt-12">
          <img
            src="/assets/error-illustration.svg"
            alt="Error illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
