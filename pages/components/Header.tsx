// components/Header.js
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        {/* Top Bar with Logo and Sign-in/Sign-up buttons */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="ZinTools Logo" width={170} height={70} />
          </div>

            {/* Search Bar */}
            <div className="flex p-[3px] w-[600px] rounded-full overflow-hidden bg-slate-100">
                <input
                className="px-4 py-2 w-full bg-slate-100 outline-none"
                type="search"
                placeholder="Search for Movies, TV Shows, Themes & Cast"
                />
                <button className="flex items-center justify-center px-4 border-l">
                <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
                </button>
            </div>

            {/* Sign-in/Sign-up buttons */}
            <div>
                <button className=" hover:text-blue-800 mr-4 hover:scale-105 duration-300">Log in</button>
                <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full hover:scale-105 duration-300">Sign up</button>
            </div>
            </div>

            <div className='flex w-full justify-items-center justify-center mt-7 mb-3'>
                {/* Navigation */}
                <nav>
                    <a href="https://elements.envato.com/stock-video" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Stock Video</a>
                    <a href="https://elements.envato.com/video-templates" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Video Templates</a>
                    <a href="https://elements.envato.com/audio" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Music</a>
                    <a href="https://elements.envato.com/sound-effects" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Sound Effects</a>
                    <a href="https://elements.envato.com/graphic-templates" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Graphic Templates</a>
                    <a href="https://elements.envato.com/graphics" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Graphics</a>
                    <a href="https://elements.envato.com/presentation-templates" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Presentation Templates</a>
                    <a href="https://elements.envato.com/photos" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Photos</a>
                    <a href="https://elements.envato.com/fonts" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Fonts</a>
                    <a href="https://elements.envato.com/add-ons" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">Add-ons</a>
                    <a href="https://elements.envato.com/" className="hover:border-b-[1px] duration-300 hover:text-gray-600 text-center mx-7">More</a>
                </nav>
            </div>

        </div>
    </header>
  );
};

export default Header;
