import React from "react";
import { menuLinks, type MenuLink } from "../data/menuLinks";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gray-800 border-solid border-t-1 border-gray-500 text-gray-300 py-6">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Left side */}
                <p className="text-sm">&copy; {new Date().getFullYear()} My Context API Project. All rights reserved.</p>

                {/* Right side */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {menuLinks.map((menuLink: MenuLink) => (
                        <Link
                            key={menuLink.id}
                            to={menuLink.path}
                            className="hover:text-white transition">
                            {menuLink.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;