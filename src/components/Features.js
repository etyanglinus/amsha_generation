const Features = () => {
  return (
    <section className="features py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-indigo-600">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white shadow-lg p-8 rounded-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Financial Freedom</h3>
            <p className="text-gray-700">Our platform empowers students to achieve financial freedom through strategic savings plans.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card bg-white shadow-lg p-8 rounded-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Reduced Student Debt</h3>
            <p className="text-gray-700">Smart savings plans help reduce the burden of student loans while securing a better financial future.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card bg-white shadow-lg p-8 rounded-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Stress-Free Future</h3>
            <p className="text-gray-700">Plan and save easily to ensure a financially secure and stress-free future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
