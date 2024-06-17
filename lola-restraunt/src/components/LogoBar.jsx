import React from 'react';
// import logo from '../pics/logo.JPG'; // Путь к вашему логотипу

export default function LogoBar() {
  return (
    <div className="bg-peach p-4 text-center">
      {/* <img src={logo} alt="Lola Restaurant Logo" className="mx-auto mb-4 w-24 h-24 object-cover rounded-full" /> */}
      <h1 className="text-4xl font-bold text-black">Lola Restaurant</h1>
    </div>
  );
}
