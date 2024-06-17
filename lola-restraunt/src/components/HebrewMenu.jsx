import React from 'react'
import { menuEnglish } from './MenyData'

export default function HebrewMenu() {
    return (
      <div className="bg-peach min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">menu</h1>
        {Object.keys(menuEnglish).map((category, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded">{category}</h2>
            {Object.keys(menuEnglish[category]).map((subcategory, subIdx) => (
              <div key={subIdx} className="mb-6">
                <h3 className="text-xl font-medium mb-2 bg-gray-100 p-2 rounded">{subcategory}</h3>
                {menuEnglish[category][subcategory].map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between border-b border-gray-300 py-2">
                    <p className="text-lg">{item.name}</p>
                    <p className="text-lg">{item.price}₪</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }