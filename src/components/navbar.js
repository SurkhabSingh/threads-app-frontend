import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-black text-white ">
    
      <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center justify-between">
          
            <div className="text-2xl font-bold">
              <span className="text-3xl">@</span> Threads
            </div>

          
            <div className="flex items-center gap-6">
             
              <div className="hidden sm:flex items-center gap-4">
                <button className="px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors">
                  Log in
                </button>
                <button className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">
                  Sign up
                </button>
              </div>

             
              <button className="px-4 py-2 text-sm border border-neutral-700 rounded-full hover:bg-neutral-900 transition-colors">
                Create Thread
              </button>

             
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg py-1">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                       
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
