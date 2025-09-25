import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Bridge Your AI Gap Together
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Ready to optimize your operations with AI? We're here to help you get started.
          </p>
          <a href="#contact-form" className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Send Message
          </a>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form Section */}
          <div className="lg:w-2/3" id="contact-form">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization*</label>
                  <input 
                    type="text" 
                    id="organization" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                <select 
                  id="source" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Please select</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="blog">Blog or Article</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">What services are you interested in?</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start">
                    <input type="checkbox" id="service-automation" className="mt-1 mr-2" />
                    <label htmlFor="service-automation">Process Automation using AI</label>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="service-prompt" className="mt-1 mr-2" />
                    <label htmlFor="service-prompt">Custom AI Prompt Engineering</label>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="service-training" className="mt-1 mr-2" />
                    <label htmlFor="service-training">Internal AI Training</label>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="service-app" className="mt-1 mr-2" />
                    <label htmlFor="service-app">Lightweight App/Automation Development</label>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="service-strategy" className="mt-1 mr-2" />
                    <label htmlFor="service-strategy">AI Infrastructure Strategy</label>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" id="service-other" className="mt-1 mr-2" />
                    <label htmlFor="service-other">Other</label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about your organization and what you're looking to achieve*</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-method" className="block text-sm font-medium text-gray-700 mb-1">Preferred contact method</label>
                  <select 
                    id="contact-method" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-time" className="block text-sm font-medium text-gray-700 mb-1">Best time to contact</label>
                  <select 
                    id="contact-time" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="morning">Morning (9am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-5pm)</option>
                    <option value="evening">Evening (after 5pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <button type="submit" className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Send Message
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✉️</span>
                  <span>Email: contact@aibridgegap.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">📱</span>
                  <span>Phone: (Coming soon)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">🕒</span>
                  <span>Hours: Monday-Friday, 9am-5pm (EST)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">🔗</span>
                  <span>Social Media: (Coming soon)</span>
                </li>
              </ul>
            </div>

            {/* Map Section (Placeholder) */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Location</h3>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-700">What size organizations do you work with?</h3>
              <p className="text-gray-600">
                We primarily work with small and midsize teams, including nonprofits, media stations, educational institutions, and community organizations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-700">Do we need technical expertise to work with you?</h3>
              <p className="text-gray-600">
                Not at all. We specialize in making AI accessible to teams without technical backgrounds. Our approach focuses on practical applications and knowledge transfer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-700">How long does a typical AI integration project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity. Simple automations can be implemented in a few weeks, while comprehensive AI strategies may take several months to fully deploy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-700">What is your pricing structure?</h3>
              <p className="text-gray-600">
                We offer flexible pricing options based on project scope and organizational needs. Contact us for a customized quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-700">Do you offer ongoing support after implementation?</h3>
              <p className="text-gray-600">
                Yes, we provide various support options to ensure your team can effectively maintain and evolve your AI solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-700">How do you ensure AI is implemented ethically?</h3>
              <p className="text-gray-600">
                Ethical implementation is a core principle of our approach. We prioritize transparency, fairness, and appropriate human oversight in all AI solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Not Ready to Reach Out Yet?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our <Link href="/blog" className="text-indigo-600 hover:text-indigo-800">blog</Link> for insights on AI implementation or learn more <Link href="/about" className="text-indigo-600 hover:text-indigo-800">about us</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Explore Our Blog
            </Link>
            <Link href="/about" className="bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
