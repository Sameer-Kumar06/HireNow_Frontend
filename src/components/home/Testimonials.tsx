import React from "react";
import { FaStar } from "react-icons/fa";

export const Testimonials = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Clients Testimonial
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="flex flex-col justify-between p-4 border shadow-lg rounded-md">
          <div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="mb-4 text-gray-600">
              "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas
              ac placerat metus, in faucibus est."
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/placeholder.svg?height=50&width=50"
              alt="Robert Fox"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Robert Fox</p>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>

        {/* Become a Candidate Card */}
        <div className="bg-purple-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Become a Candidate</h2>
          <p className="mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus
            a dolor convallis efficitur.
          </p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold flex items-center">
            Register Now
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col justify-between p-4 border shadow-lg rounded-md">
          <div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="mb-4 text-gray-600">
              "Mauris eget lorem odio. Mauris convallis justo molestie metus
              aliquam lacinia. Suspendisse ut dui vulputate augue condimentum
              ornare. Morbi vitae tristique ante"
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/placeholder.svg?height=50&width=50"
              alt="Bessie Cooper"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Bessie Cooper</p>
              <p className="text-sm text-gray-500">Creative Director</p>
            </div>
          </div>
        </div>

        {/* Become an Employers Card */}
        <div className="bg-purple-600 text-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Become a Employers</h2>
          <p className="mb-4">
            Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed
            efficitur dolor. Paque augue risus, aliqu.
          </p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold flex items-center">
            Register Now
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};
