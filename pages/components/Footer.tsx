// components/Footer.tsx
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className='container w-full mx-auto px-4 py-8'>
        {/* Follow Section */}
        <div className='flex flex-row items-center h-[81px] border-b-[1px]'>
          <h6 className='font-bold my-3 pr-6 cursor-default'>Follow us</h6>
          <a href="https://similarwatch.com/">
            <FontAwesomeIcon icon={faTwitter} className='w-4 mx-3 duration-300 hover:scale-125 cursor-pointer' />
          </a>
          <a href="https://similarwatch.com/">
            <FontAwesomeIcon icon={faYoutube} className='w-4 mx-3 duration-300 hover:scale-125 cursor-pointer' />
          </a>
          <a href="https://similarwatch.com/">
            <FontAwesomeIcon icon={faFacebookF} className='w-3 mx-3 duration-300 hover:scale-125 cursor-pointer'/>
          </a>
        </div>

        {/* List */}
        <div className='flex justify-center my-7'>
          <div className='px-4 w-full mb-5'>
            <h6 className='font-bold my-7'>Internal Links</h6>
            <ul className='list-none'>
              <a href="https://similarwatch.com/">
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Documentaries</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Themes</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Chrome casts</li>
              </a>
            </ul>
          </div>
          <div className='px-4 w-full mb-5'>
            <h6 className='font-bold my-7'>Enterprise</h6>
            <ul className='list-none'>
              <a href="https://similarwatch.com/">
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Download Chrome Browser</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Chrome Browser for Enterprise</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Chrome Browser Devices</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>ChromeOS</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Google Cloud</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Google Workspace</li>
              </a>
            </ul>
          </div>
          <div className='px-4 w-full mb-5'>
            <h6 className='font-bold my-7'>Internal Links</h6>
            <ul className='list-none'>
              <a href="https://similarwatch.com/">
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Documentaries</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Themes</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Chrome casts</li>
              </a>
            </ul>
          </div>
          <div className='px-4 w-full mb-5'>
            <h6 className='font-bold my-7'>Enterprise</h6>
            <ul className='list-none'>
              <a href="https://similarwatch.com/">
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Download Chrome Browser</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Chrome Browser for Enterprise</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Chrome Browser Devices</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>ChromeOS</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Google Cloud</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Google Workspace</li>
              </a>
            </ul>
          </div>
          <div className='px-4 w-full mb-5'>
            <h6 className='font-bold my-7'>Internal Links</h6>
            <ul className='list-none'>
              <a href="https://similarwatch.com/">
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Documentaries</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Themes</li>
                <li className='mb-3 hover:scale-105 duration-300 hover:border-b-[1px]'>Chrome casts</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between border-t border-gray-300 mt-8 pt-8">
          <div className="flex items-center">
          <Image
            src="/logo-footer.png"
            alt="Similar Watch"
            width={190}
            height={0}
            className="mr-4"
          />          
          <div className="flex space-x-4 ml-4">
            <a href="#" className="text-sm hover:scale-105 duration-300 hover:border-b-[1px]">Privacy Policy</a>
            <a href="#" className="text-sm hover:scale-105 duration-300 hover:border-b-[1px]">Terms and conditions</a>
            <a href="#" className="text-sm hover:scale-105 duration-300 hover:border-b-[1px]">Cookies Policy</a>
            <a href="#" className="text-sm hover:scale-105 duration-300 hover:border-b-[1px]">About us</a>
            <a href="#" className="text-sm hover:scale-105 duration-300 hover:border-b-[1px]">EULA</a>
            <a href="#" className="text-sm hover:scale-105 duration-300 hover:border-b-[1px]">Contact</a>
          </div>
          </div>
          <div>
            <Image src="/moon.png" alt="moon" width={190}  height={1} className='w-[60px]'/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
