import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="max-w-lg mx-auto py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900">Kontaktformular</h2>
      <p className="mt-3 text-gray-600">Schicken Sie uns Ihre Anfrage und wir melden uns so schnell wie möglich bei Ihnen.</p>

      <div className="mt-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <div className="mt-1">
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
        <div className="mt-1">
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefonnummer</label>
        <div className="mt-1">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Absenden
        </button>
      </div>
    </form>
  );
};

export default ContactForm;