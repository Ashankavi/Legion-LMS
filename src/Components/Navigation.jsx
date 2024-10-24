import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Components/Assets/Navigation/Logo.png';
import OverviewICon from '../Components/Assets/Navigation/OverviewICon.svg';
import ListIcon from '../Components/Assets/Navigation/Listing.svg';
import PackageIcon from '../Components/Assets/Navigation/Package.svg';
import PlaygroundIcon from '../Components/Assets/Navigation/Cord.svg';
import CertificateIcon from '../Components/Assets/Navigation/Certificate.svg';
import SkillIcon from '../Components/Assets/Navigation/Badge.svg';
import UsersIcon from '../Components/Assets/Navigation/User.svg';
import ContactIcon from '../Components/Assets/Navigation/Message.svg';
import LogoutIcon from '../Components/Assets/Navigation/Logout.svg';

const Navigation = () => {
  return (
    <div className="flex flex-row h-auto">
      <div className="flex flex-col bg-[#181D1D] h-auto w-auto">
        <div className="flex flex-row items-center justify-center mt-4 mb-7">
          <img src={Logo} alt="logo" className="w-10 h-10 mr-2" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-blue-500">L <span className="text-white">EGION</span> C<span className="text-white">ODE</span></h1>
            <h1 className="text-xl font-semibold text-white">IT SOLUTIONS</h1>
          </div>
        </div>

        <nav className="pl-4 space-y-3 font-roboto">

        <Link to="/overview" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={OverviewICon} alt="overview icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Overview</span>
          </Link>

          <Link to="/listing" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={ListIcon} alt="listing icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Listing</span>
          </Link>

          <Link to="/package" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={PackageIcon} alt="package icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Package</span>
          </Link>

          <Link to="/playground" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={PlaygroundIcon} alt="playground icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Playground</span>
            </Link>

            <Link to="/certificate" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={CertificateIcon} alt="certificate icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Certificate</span>
            </Link>

            <Link to="/badge" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={SkillIcon} alt="badge icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Badge</span>
            </Link>

            <Link to="/user" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={UsersIcon} alt="users icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Users</span>
            </Link>
            <Link to="/contact" className="flex items-center p-3 bg-[#1C2323] rounded-lg text-white w-full">
            <img src={ContactIcon} alt="contact icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Contact</span>
            </Link>

          <button className="flex items-center p-3 bg-[#BC4141] rounded-lg text-white w-full">
            <img src={LogoutIcon} alt="logout icon" className="w-5 h-5 ml-4 mr-8" style={{ filter: 'invert(1)' }} />
            <span className="ml-5 mr-8 ">Log Out</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
