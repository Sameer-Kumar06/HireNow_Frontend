import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-3xl">JobNow</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/job-list"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Jobs
                </a>

                <a
                  href="/internship-list"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Internship
                </a>
                <a
                  href="/ai-chat"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  AI Chat
                </a>
                <a
                  href="/resume-builder"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Resume Builder
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoCloseSharp className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MdOutlineMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 flex flex-col pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Companies
            </a>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Community
            </a>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Internship
            </a>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Mentorship
            </a>
            <a
              href="#"
              className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Resume Builder
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
