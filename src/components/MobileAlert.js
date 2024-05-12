import React, { useEffect, useState } from 'react';

const MobileAlert = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is less than or equal to a certain value (e.g., 768px for tablets)
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <>
      {isMobile ? null : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <p className="text-lg font-medium mb-4">
              This is a micro site open on mobile for better experience.
            </p>
            <button
              className="bg-[#fed52a] text-black px-12 py-3 rounded-md"
              onClick={() => setIsMobile(true)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileAlert;
