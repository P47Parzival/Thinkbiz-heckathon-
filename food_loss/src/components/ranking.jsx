import React, { useState } from 'react';

const ProfileCard = ({ name, role, socialLinks }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg">
      <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor" className="bi bi-person-fill text-white" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <figcaption className="sr-only">{name}, {role}</figcaption>
      </figure>
      <h2 className="mt-4 text-xl font-bold text-indigo-600">{name}</h2>
      <p className="mb-4 text-gray-600">{role}</p>
      <div className="relative">
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Contact
        </button>
        
        {showDropdown && (
          <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 transform rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
            <div className="flex flex-col space-y-2">
              {socialLinks.github && (
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md p-2 hover:bg-gray-100"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md p-2 hover:bg-gray-100"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-md p-2 hover:bg-gray-100"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileGrid = () => {
  const profiles = [
    { 
      name: "Dhruv Mali", 
      role: "Web Developer",
      socialLinks: {
        github: "https://github.com/dhruv",
        linkedin: "https://linkedin.com/in/dhruv",
        twitter: "https://twitter.com/dhruv"
      }
    },
    { 
      name: "Dhwanish Desai", 
      role: "UI Designer",
      socialLinks: {
        github: "https://github.com/dhwanish",
        linkedin: "https://linkedin.com/in/dhwanish"
      }
    },
    { 
      name: "Siddhant", 
      role: "Frontend Dev",
      socialLinks: {
        github: "https://github.com/siddhant",
        linkedin: "https://linkedin.com/in/siddhant",
        twitter: "https://twitter.com/siddhant"
      }
    },
    { 
      name: "Tanish Chaudhari", 
      role: "UX Designer",
      socialLinks: {
        linkedin: "https://linkedin.com/in/tanish",
        twitter: "https://twitter.com/tanish"
      }
    },
    { 
      name: "Pranjal Patel", 
      role: "Full Stack Dev",
      socialLinks: {
        github: "https://github.com/pranjal",
        linkedin: "https://linkedin.com/in/pranjal"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            socialLinks={profile.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;