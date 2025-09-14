import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 text-gray-600 text-xs py-8 mt-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12 justify-between">
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-sm mb-2">Shop and Learn</h3>
          <ul>
            <li><a href="#" className="hover:underline">Store</a></li>
            <li><a href="#" className="hover:underline">Mac</a></li>
            <li><a href="#" className="hover:underline">iPad</a></li>
            <li><a href="#" className="hover:underline">iPhone</a></li>
            <li><a href="#" className="hover:underline">Watch</a></li>
            <li><a href="#" className="hover:underline">AirPods</a></li>
            <li><a href="#" className="hover:underline">TV & Home</a></li>
            <li><a href="#" className="hover:underline">AirTag</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:underline">Gift Cards</a></li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-sm mb-2">Account</h3>
          <ul>
            <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
            <li><a href="#" className="hover:underline">Apple Store Account</a></li>
            <li><a href="#" className="hover:underline">iCloud.com</a></li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-sm mb-2">Apple Store</h3>
          <ul>
            <li><a href="#" className="hover:underline">Find a Store</a></li>
            <li><a href="#" className="hover:underline">Genius Bar</a></li>
            <li><a href="#" className="hover:underline">Today at Apple</a></li>
            <li><a href="#" className="hover:underline">Group Reservations</a></li>
            <li><a href="#" className="hover:underline">Apple Camp</a></li>
            <li><a href="#" className="hover:underline">Apple Trade In</a></li>
            <li><a href="#" className="hover:underline">Ways to Buy</a></li>
            <li><a href="#" className="hover:underline">Recycling Programme</a></li>
            <li><a href="#" className="hover:underline">Order Status</a></li>
            <li><a href="#" className="hover:underline">Shopping Help</a></li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-sm mb-2">For Business</h3>
          <ul>
            <li><a href="#" className="hover:underline">Apple and Business</a></li>
            <li><a href="#" className="hover:underline">Shop for Business</a></li>
          </ul>
          <h3 className="font-semibold text-sm mt-4 mb-2">For Education</h3>
          <ul>
            <li><a href="#" className="hover:underline">Apple and Education</a></li>
            <li><a href="#" className="hover:underline">Shop for Education</a></li>
            <li><a href="#" className="hover:underline">Shop for University</a></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm mb-2">Apple Values</h3>
          <ul>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Education</a></li>
            <li><a href="#" className="hover:underline">Environment</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Supply Chain Innovation</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4">
        <p className="text-gray-500">
          Copyright © 2024 Apple Inc. All rights reserved. <span className="mx-2">|</span> Privacy Policy <span className="mx-2">|</span> Terms of Use <span className="mx-2">|</span> Sales Policy <span className="mx-2">|</span> Legal <span className="mx-2">|</span> Site Map <span className="float-right hidden md:block">India</span>
        </p>
      </div>
    </div>
  </footer>
);


export default Footer;
