const Quote = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
      <div className="mt-24 md:mt-28 lg:mt-32 border border-gray-700 rounded-lg p-6 max-w-4xl mx-auto relative">
        <svg 
          className="absolute -top-6 left-6 h-12 w-12 text-gray-700" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <div className="mt-4">
          <p className="text-lg">With great power comes great electricity bill</p>
          <div className="flex justify-end mt-2">
            <span className="text-primary">- Dr. Who</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
