import React from 'react';
import { Link } from 'react-router-dom';
import { contextFeatures } from '../data/contextFeatures';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mt-10 mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Context API Project
        </h1>
        <p className="text-lg text-gray-600 mt-6 mb-6">
          This is a simple React + TypeScript + Tailwind project where I test
          different use cases of the <span className="font-semibold">Context API</span>
        </p>
        <button className="px-6 py-3 bg-blue-600 border-solid border-1 border-transparent text-white font-medium rounded-lg hover:border-gray-500 hover:bg-gray-900 transition">
          Get Started
        </button>
      </section>

      {/* Context Features Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contextFeatures.map((contextFeature) => (
          <Link
            key={contextFeature.id}
            to={contextFeature.path}
            className="bg-gray-200 p-6 rounded-xl shadow hover:bg-gray-800 hover:shadow-sm hover:shadow-blue-800/50 transition hover:text-white"
          >
            <h2 className="text-xl font-semibold mb-2">{contextFeature.title}</h2>
            <p className="text-gray-600">
              {contextFeature.description}
            </p>
          </Link>
        ))}

      </section>
    </div>
  )
}

export default Home