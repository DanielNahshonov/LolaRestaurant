import React from 'react';

export default function Location() {
  return (
    <div>
      <h2>Our Location</h2>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.525464591968!2d34.78494151512172!3d31.95675148121424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b55a8047d61%3A0x8eaef15cbf349f3e!2sHaTayelet%2017%2C%20Rishon%20LeTsiyon%2C%20Israel!5e0!3m2!1sen!2s!4v1623920950823!5m2!1sen!2s"
      ></iframe>
    </div>
  );
}
