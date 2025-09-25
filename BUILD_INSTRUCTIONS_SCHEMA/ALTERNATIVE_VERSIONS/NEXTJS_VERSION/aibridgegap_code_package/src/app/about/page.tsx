import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Team Behind AIBridgeGap
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Experienced, competent, and human-centered AI consultants dedicated to making AI accessible and valuable for your organization.
          </p>
          <Link href="#our-story" className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Get to Know Us
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Our Story
            </h2>
            <div className="text-lg text-gray-600 space-y-6">
              <p>
                AIBridgeGap was founded with a clear mission: to help organizations navigate the rapidly evolving AI landscape without getting lost in technical complexity. We saw a growing gap between the potential of AI tools and the ability of teams to effectively implement them. Our founder's background in both operations management and technology created the perfect foundation for bridging this gap.
              </p>
              <p>
                We believe that AI should enhance human creativity and efficiency, not replace it. This philosophy guides everything we do, from the solutions we design to the way we communicate with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Our mission is to demystify AI and make it accessible, practical, and valuable for small and midsize teams. We bridge the knowledge gap between staff and emerging AI tools, enabling organizations to optimize operations and reduce manual workflows while preserving what makes them unique: human creativity and insight.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Our Approach: The AIBridgeGap Difference
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              What sets us apart is our balanced approach to AI integration. We combine technical expertise with a deep understanding of organizational dynamics and human factors.
            </p>
            
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Key Principles:</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-indigo-700 mb-2">Start with People, Not Technology</h4>
                <p className="text-gray-600">We begin by understanding your team's needs, challenges, and workflows before recommending any AI solutions.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-indigo-700 mb-2">Focus on Practical Applications</h4>
                <p className="text-gray-600">We prioritize real-world applications that deliver measurable results over theoretical possibilities.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-indigo-700 mb-2">Build Capacity, Not Dependency</h4>
                <p className="text-gray-600">We transfer knowledge and skills to your team, ensuring you can maintain and evolve your AI solutions independently.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-indigo-700 mb-2">Ethical Implementation</h4>
                <p className="text-gray-600">We ensure all AI solutions are implemented ethically, with appropriate oversight and transparency.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-indigo-700 mb-2">Continuous Learning</h4>
                <p className="text-gray-600">We stay at the forefront of AI developments, constantly evaluating new tools and approaches for their practical value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team brings together expertise in:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">AI and Machine Learning</h3>
                <p className="text-gray-600">Deep understanding of current AI capabilities and limitations</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Operations Management</h3>
                <p className="text-gray-600">Experience optimizing workflows and processes across various industries</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Change Management</h3>
                <p className="text-gray-600">Skills in helping teams adapt to and embrace new technologies</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-indigo-700">Industry-Specific Knowledge</h3>
                <p className="text-gray-600">Specialized experience with nonprofits, media stations, educational institutions, and community organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              While our approach can benefit any organization looking to leverage AI, we have specialized experience working with:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Nonprofits</h3>
                <p className="text-gray-600">Helping mission-driven organizations do more with limited resources</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Media Stations</h3>
                <p className="text-gray-600">Streamlining content production, archiving, and distribution</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Educational Institutions</h3>
                <p className="text-gray-600">Enhancing administrative efficiency and supporting innovative teaching methods</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Community Organizations</h3>
                <p className="text-gray-600">Improving outreach and engagement through intelligent automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Placeholder team member cards */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-1 text-gray-800">Team Member</h3>
              <p className="text-gray-500 mb-4">Position</p>
              <p className="text-gray-600 text-center">Team member bio coming soon.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-1 text-gray-800">Team Member</h3>
              <p className="text-gray-500 mb-4">Position</p>
              <p className="text-gray-600 text-center">Team member bio coming soon.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-6"></div>
              <h3 className="text-xl font-bold mb-1 text-gray-800">Team Member</h3>
              <p className="text-gray-500 mb-4">Position</p>
              <p className="text-gray-600 text-center">Team member bio coming soon.</p>
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
