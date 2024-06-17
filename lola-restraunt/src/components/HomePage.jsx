import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-peach min-h-screen">
      <div className="p-4">
        <section className="text-center my-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to Lola Restaurant</h2>
          <p className="text-xl mb-4">Our restaurant offers the best flavors with a unique and inviting atmosphere.</p>
          {/* Добавляем стили для логотипа */}
          <img
            src="/src/pics/logo.JPG"
            alt="Lola Restaurant"
            className="mx-auto mb-8 rounded-full shadow-lg"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </section>
        <section className="my-8">
        </section>
        <section className="my-8 text-center">
          <h3 className="text-3xl font-bold mb-4">What Our Customers Say</h3>
          <p className="italic mb-4">"The best food in town! Excellent service and a pleasant atmosphere." - Jacob</p>
          <p className="italic">"Great restaurant with amazing food and friendly staff." - Rachel</p>
        </section>
      </div>
    </div>
  );
}
