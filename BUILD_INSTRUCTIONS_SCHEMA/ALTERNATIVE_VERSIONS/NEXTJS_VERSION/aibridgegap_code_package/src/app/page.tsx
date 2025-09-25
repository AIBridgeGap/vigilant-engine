import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bridging the AI Knowledge Gap for Your Organization
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            We help small and midsize teams optimize operations, reduce manual workflows, and effectively integrate AI tools into their daily processes.
          </p>
          <Link href="/contact" className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Get Started
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            AI Doesn't Need to Be Scary or Robotic
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
            At AIBridgeGap, we translate complex AI technology into usable, valuable tools that help your organization work better and faster. Our human-centered approach ensures that AI enhances your team's creativity rather than replacing it.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            How We Help You Harness AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">Process Automation</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Streamline operations with AI-powered workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Parse emails, tag content, generate summaries</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">Custom AI Prompt Engineering</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Integrate tools like ChatGPT, Claude, or Perplexity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Develop custom prompts for your specific needs</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">Internal AI Training</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Upskill your team on generative AI tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Hands-on workshops for text, image, and video AI</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">Lightweight App Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Google Workspace and App Scripts integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Third-party AI tool implementation</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">AI Infrastructure Strategy</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Build scalable AI systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Preserve human creativity while maximizing efficiency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Organizations Trust AIBridgeGap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Experience & Expertise</h3>
              <p className="text-gray-600">Deep understanding of both AI technology and organizational needs</p>
            </div>
            <div className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Human-Centered Approach</h3>
              <p className="text-gray-600">We focus on people first, technology second</p>
            </div>
            <div className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Practical Solutions</h3>
              <p className="text-gray-600">No hype, just real-world applications that deliver results</p>
            </div>
            <div className="p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Tailored for Your Industry</h3>
              <p className="text-gray-600">Specialized experience with nonprofits, media, education, and community organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section (Placeholder) */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            See How We've Helped Organizations Like Yours
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
            We've helped organizations across various industries implement AI solutions that drive real results. Check back soon for detailed case studies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder cards for future case studies */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[200px]">
              <p className="text-gray-400 text-center">Case Study Coming Soon</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[200px]">
              <p className="text-gray-400 text-center">Case Study Coming Soon</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center min-h-[200px]">
              <p className="text-gray-400 text-center">Case Study Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder testimonials */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-400 italic mb-4">Testimonial coming soon...</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-400">Client Name</p>
                  <p className="text-gray-400 text-sm">Organization</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-400 italic mb-4">Testimonial coming soon...</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-400">Client Name</p>
                  <p className="text-gray-400 text-sm">Organization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-gradient-to-r from-indigo-800 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bridge the AI Gap in Your Organization?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's discuss how we can help you harness the power of AI to optimize your operations and reduce manual workflows.
          </p>
          <Link href="/contact" className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
