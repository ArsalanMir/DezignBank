import React, { useState } from "react";
import {
  Check,
  ExternalLink,
  Mail,
  Upload,
  Edit,
  ArrowRight,
} from "lucide-react";
import Navbar from "../Component/Dashboard/Navbar.jsx";

function Profile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const profileData = {
    name: "Studio Arketype",
    isElite: true,
    isVerified: true,
    avatarUrl:
      "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    website: "arketype.com",
    email: "hello@arketype.com",
    followers: 1,
    following: 1,
    monthlyViews: 10000,
    description:
      "We specialize in sustainable, modular residential design with expertise in modern minimalism.",
    experience:
      "I specialize in UX/UI design, brand strategy, and architecture development.",
    about:
      "I'm a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategy, and workflow optimization for startups looking to scale and reach a bigger audience. I'm proud to call myself a minimalist. I'm passionate about helping startups grow, improve their customer experience, and create without capital through good design.",
  };

  const products = [
    {
      id: "1",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "2",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "3",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "4",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "5",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "6",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "7",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "8",
      title: "Modern Dome Pavilion CAD Set",
      designerName: "Studio Arklo",
      imageUrl:
        "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const formatStat = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const formatViews = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-8xl mx-auto">
        <div className="rounded-lg overflow-hidden shadow-sm mb-6">
          {/* Profile Header */}
          <div className="relative">
            <div className="h-36 bg-slate-600 rounded-t-lg w-full"></div>
            <div className="px-6 pb-6 pt-0 bg-white">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative -mt-16">
                  <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden bg-white">
                    <img
                      src={profileData.avatarUrl}
                      alt={profileData.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h1 className="text-xl font-semibold">
                        {profileData.name}
                      </h1>
                      {profileData.isElite && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full font-medium">
                          Elite
                        </span>
                      )}
                      <button className="edit-btn ml-2 p-1 rounded-md">
                        <Edit size={18} />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span>Verified Vendor</span>
                      {profileData.isVerified && (
                        <span className="flex items-center justify-center bg-blue-500 rounded-full h-4 w-4">
                          <Check size={12} color="white" />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0 items-start md:items-center">
                    {/* Button Section */}
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <button className="bg-orange-500 text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
                        <Upload size={14} />
                        <span>Upload New Product</span>
                      </button>
                      <button className="bg-black text-white px-3 py-1.5 rounded-md text-sm flex items-center gap-1">
                        <span>Edit</span>
                      </button>
                    </div>

                    {/* Links Section*/}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:ml-4">
                      <a
                        href={profileData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm"
                      >
                        <span>Website</span>
                        <ExternalLink size={14} className="text-orange-500" />
                      </a>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="flex items-center gap-1 text-sm"
                      >
                        <span>Email</span>
                        <Mail size={14} className="text-orange-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Stats */}
          <div className="bg-white px-6 py-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div className="flex gap-1">
                <span className="font-medium">
                  {formatStat(profileData.followers)}
                </span>
                <span className="text-gray-500">followers</span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium">
                  {formatStat(profileData.following)}
                </span>
                <span className="text-gray-500">following</span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium">
                  {formatViews(profileData.monthlyViews)}
                </span>
                <span className="text-gray-500">monthly views</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {profileData.description}
            </p>
          </div>

          {/* Profile About */}
          <div className="bg-white px-6 py-4 border-t border-gray-100">
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-medium mb-2">Experience</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {profileData.experience}
                </p>
              </div>
              <div>
                <h2 className="text-base font-medium mb-2">About me</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isExpanded
                    ? profileData.about
                    : `${profileData.about.substring(0, 150)}...`}
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-orange-500 text-sm font-medium"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="bg-white px-6 py-6 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-base font-medium">Product Catalog</h2>
              <div className="flex gap-4 text-sm">
                <button className="text-gray-900 font-medium">
                  Product List
                </button>
                <button className="text-gray-400">Product Grid</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-sm font-medium truncate">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        by {product.designerName}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
