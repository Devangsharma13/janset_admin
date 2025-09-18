import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiFileText, FiUsers, FiArrowRight } from 'react-icons/fi';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-teal-400">CivicResolve</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/admin/login"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Report City Issues
            <span className="block text-teal-400">Get Them Fixed</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Help make your city better by reporting issues like potholes, broken streetlights, 
            or other problems that need attention from city services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              <FiFileText className="mr-2" size={20} />
              Report an Issue
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              <FiMapPin className="mr-2" size={20} />
              View Map
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700">
            <FiFileText className="text-4xl text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Easy Reporting</h3>
            <p className="text-slate-300">
              Submit reports quickly with photos and location details
            </p>
          </div>
          <div className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700">
            <FiMapPin className="text-4xl text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Track Progress</h3>
            <p className="text-slate-300">
              See real-time updates on your reported issues
            </p>
          </div>
          <div className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700">
            <FiUsers className="text-4xl text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community Impact</h3>
            <p className="text-slate-300">
              Join your neighbors in making the city better
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-slate-300 mb-6">
              Start reporting issues in your neighborhood today
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center">
              Get Started
              <FiArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
