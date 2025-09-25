import Link from 'next/link';

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI Insights & Resources
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Stay updated with the latest trends, practical guides, and success stories in AI adoption and implementation.
          </p>
          <button className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Subscribe to Our Newsletter
          </button>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Articles Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Placeholder Featured Article 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">The Future of AI in Nonprofit Organizations</h3>
                    <p className="text-gray-600 mb-4">Discover how AI is transforming the nonprofit sector, enabling organizations to do more with limited resources...</p>
                    <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                      Read More →
                    </Link>
                  </div>
                </div>

                {/* Placeholder Featured Article 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">5 Ways to Integrate AI into Your Existing Workflows</h3>
                    <p className="text-gray-600 mb-4">Learn practical strategies for incorporating AI tools into your team's daily processes without disrupting productivity...</p>
                    <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                      Read More →
                    </Link>
                  </div>
                </div>

                {/* Placeholder Featured Article 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Ethical Considerations for AI Implementation</h3>
                    <p className="text-gray-600 mb-4">Explore the key ethical considerations organizations should address when implementing AI solutions...</p>
                    <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                      Read More →
                    </Link>
                  </div>
                </div>

                {/* Placeholder Featured Article 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">AI Tools Every Small Team Should Consider</h3>
                    <p className="text-gray-600 mb-4">A curated list of AI tools that can help small teams boost productivity and streamline operations...</p>
                    <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Articles Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Recent Articles
              </h2>
              <div className="space-y-8">
                {/* Placeholder Recent Article 1 */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Understanding Large Language Models for Non-Technical Teams</h3>
                  <p className="text-gray-500 mb-3">April 1, 2025</p>
                  <p className="text-gray-600 mb-4">A simplified explanation of how large language models work and how they can benefit organizations without technical expertise...</p>
                  <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                    Read More →
                  </Link>
                </div>

                {/* Placeholder Recent Article 2 */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Case Study: How a Local Media Station Automated Content Tagging</h3>
                  <p className="text-gray-500 mb-3">March 25, 2025</p>
                  <p className="text-gray-600 mb-4">Learn how a regional media station implemented AI to automatically tag and categorize their video archives, saving hundreds of hours...</p>
                  <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                    Read More →
                  </Link>
                </div>

                {/* Placeholder Recent Article 3 */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">The Role of Human Oversight in AI Systems</h3>
                  <p className="text-gray-500 mb-3">March 18, 2025</p>
                  <p className="text-gray-600 mb-4">Why human oversight remains crucial in AI implementation and how to design systems that balance automation with human judgment...</p>
                  <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-800">
                    Read More →
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search Box */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Search</h3>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700">
                  Search
                </button>
              </div>
            </div>

            {/* Categories Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Browse by Topic</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-2">•</span>
                    <span>AI Trends</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Implementation Guides</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Case Studies</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Industry Insights</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-2">•</span>
                    <span>AI Ethics</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">AI Tools</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Automation</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Nonprofits</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Workflow</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">ChatGPT</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Training</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Implementation</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Ethics</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Stay Informed</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest insights on AI implementation, tips for optimizing workflows, and updates on emerging tools.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization (optional)</label>
                  <input 
                    type="text" 
                    id="organization" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">Interests</span>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="interest-trends" className="mr-2" />
                      <label htmlFor="interest-trends">AI Trends</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="interest-implementation" className="mr-2" />
                      <label htmlFor="interest-implementation">Implementation Guides</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="interest-case-studies" className="mr-2" />
                      <label htmlFor="interest-case-studies">Case Studies</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="interest-industry" className="mr-2" />
                      <label htmlFor="interest-industry">Industry Insights</label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Featured Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Featured Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-start">
                    <span className="mr-2 text-lg">📄</span>
                    <span>AI Readiness Assessment Template</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-start">
                    <span className="mr-2 text-lg">📄</span>
                    <span>Prompt Engineering Guide for Beginners</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-indigo-600 hover:text-indigo-800 flex items-start">
                    <span className="mr-2 text-lg">📄</span>
                    <span>AI Implementation Checklist</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Have a Question About AI Implementation?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-600">
            Our team is ready to help you navigate the complexities of AI adoption.
          </p>
          <Link href="/contact" className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
