import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

import instagramLogo from "../../assets/1298747_instagram_brand_logo_social media_icon.png";
import googleLogo from "../../assets/7123025_logo_google_g_icon.png";
import facebookLogo from "../../assets/317727_facebook_social media_social_icon.png";
import amazonLogo from "../../assets/104477_amazon_icon.png";
import atlassianLogo from "../../assets/4373272_atlassian_logo_logos_icon.png";
// import jpmorganLogo from "../assets/JP-Morgan-Chase-Logo.png";
// import morganstanleyLogo from "../assets/morganStanley.png";
import tcsLogo from "../../assets/tcs.jpg";
import { Navigate } from "react-router-dom";
// import ibmLogo from "../assets/ibm.png";
// import wiproLogo from "../assets/wipro.png";
// import ciscoLogo from "../assets/cisco.png";
// import netflixLogo from "../assets/netflix.jpg";
// import deepmindLogo from "../assets/deepmmind.jpg";
// import coinbaseLogo from "../assets/coinbase.png";

export const FeaturedJobs = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Graphics & Design", icon: "🎨", openPositions: 357 },
    { name: "Code & Programing", icon: "</>", openPositions: 312 },
    { name: "Digital Marketing", icon: "📢", openPositions: 297 },
    { name: "Video & Animation", icon: "🎥", openPositions: 247 },
    { name: "Music & Audio", icon: "🎵", openPositions: 204 },
    { name: "Account & Finance", icon: "📊", openPositions: 167 },
    { name: "Health & Care", icon: "🏥", openPositions: 125 },
    { name: "Data & Science", icon: "🔬", openPositions: 57 },
  ];

  const featuredJobs = [
    {
      title: "Senior UX Designer",
      company: "Up",
      location: "Australia",
      salary: "$30K-$35K",
      type: "Contract Base",
      daysRemaining: 4,
      logo: instagramLogo,
    },
    {
      title: "Software Engineer",
      company: "Apple",
      location: "China",
      salary: "$50K-$60K",
      type: "Full Time",
      daysRemaining: 4,
      logo: facebookLogo,
    },
    {
      title: "Junior Graphic Designer",
      company: "Figma",
      location: "Canada",
      salary: "$50K-$70K",
      type: "Full Time",
      daysRemaining: 4,
      logo: amazonLogo,
    },
    {
      title: "Product Designer",
      company: "Udemy",
      location: "United States",
      salary: "$35K-$40K",
      type: "Full Time",
      daysRemaining: 4,
      logo: googleLogo,
    },
    {
      title: "Marketing Officer",
      company: "Facebook",
      location: "Germany",
      salary: "$50K-$90K",
      type: "Internship",
      daysRemaining: 4,
      logo: atlassianLogo,
    },
    {
      title: "Interaction Designer",
      company: "Google",
      location: "France",
      salary: "$5K-$10K",
      type: "Full Time",
      daysRemaining: 4,
      logo: tcsLogo,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Explore by Category</h2>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{category.icon}</div>
                <div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-500">
                    {category.openPositions} Open position
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Job</h2>
          <button  onClick={()=>navigate('/job-list')} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {featuredJobs.map((job, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src={job.logo} alt={job.company} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-gray-700" />
                      <span>{job.location}</span>

                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                    {job.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <CiClock2 className="text-gray-700 mx-2" />
                    <span>{job.daysRemaining} Days Remaining</span>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <CiBookmark className="text-gray-700" />
                  </button>
                  <button className="px-4 py-2 bg-purple-800 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
