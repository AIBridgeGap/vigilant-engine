import Link from 'next/link';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI Solutions Tailored to Your Organization's Needs
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            We offer a comprehensive suite of AI consulting and integration services designed to help small and midsize teams optimize operations and bridge the knowledge gap.
          </p>
          <Link href="/contact" className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Discuss Your Needs
          </Link>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
            At AIBridgeGap, we understand that implementing AI can seem overwhelming. Our services are designed to make AI accessible, practical, and valuable for your organization. We focus on real-world applications that deliver measurable results while ensuring your team feels confident and empowered.
          </p>
        </div>
      </section>

      {/* Service 1: Process Automation using AI */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-indigo-700">Process Automation using AI</h2>
            <h3 className="text-xl text-gray-600 mb-6">Streamline operations and reduce manual workflows</h3>
            <p className="text-gray-600 mb-8">
              We help you identify and automate repetitive tasks using AI, freeing your team to focus on creative and strategic work. From parsing emails to tagging video archives and generating summaries, our AI automation solutions are designed to enhance efficiency without sacrificing quality.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Reduce time spent on repetitive tasks by up to 70%</li>
                <li>Improve accuracy and consistency in routine processes</li>
                <li>Enable staff to focus on high-value activities</li>
                <li>Scale operations without proportionally increasing workload</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Use Cases:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Automated email categorization and response generation</li>
                <li>Content tagging and metadata extraction</li>
                <li>Document summarization and key point extraction</li>
                <li>Data entry and validation</li>
                <li>Report generation and distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Custom AI Prompt Engineering */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-indigo-700">Custom AI Prompt Engineering</h2>
            <h3 className="text-xl text-gray-600 mb-6">Harness the power of AI language models for your specific needs</h3>
            <p className="text-gray-600 mb-8">
              We help you integrate tools like ChatGPT, Claude, or Perplexity into your daily workflows through custom prompt engineering. Our expertise ensures you get consistent, high-quality outputs tailored to your organization's unique requirements.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Transform generic AI tools into specialized assistants for your team</li>
                <li>Ensure consistent results across users and departments</li>
                <li>Reduce the learning curve for effective AI utilization</li>
                <li>Create proprietary prompt libraries specific to your industry</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Use Cases:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Customer service response templates</li>
                <li>Content creation frameworks</li>
                <li>Research and analysis protocols</li>
                <li>Internal knowledge base querying</li>
                <li>Data interpretation and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Internal AI Training */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-indigo-700">Internal AI Training</h2>
            <h3 className="text-xl text-gray-600 mb-6">Empower your team with AI skills and confidence</h3>
            <p className="text-gray-600 mb-8">
              We provide hands-on workshops and training sessions to help your team understand and effectively use generative AI tools for text, image, and video. Our training programs are designed to build confidence and competence, ensuring your investment in AI technology translates to real-world adoption.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Accelerate AI adoption across your organization</li>
                <li>Reduce resistance to new technology</li>
                <li>Ensure consistent and ethical AI usage</li>
                <li>Develop internal AI champions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Training Modules:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>AI Fundamentals for Non-Technical Staff</li>
                <li>Effective Prompt Writing for Different AI Tools</li>
                <li>Ethical Considerations in AI Usage</li>
                <li>AI for Content Creation and Editing</li>
                <li>AI for Research and Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Lightweight App/Automation Development */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-indigo-700">Lightweight App/Automation Development</h2>
            <h3 className="text-xl text-gray-600 mb-6">Custom solutions without enterprise-level complexity</h3>
            <p className="text-gray-600 mb-8">
              We develop lightweight applications and automations using Google Workspace, App Scripts, and third-party AI tools. Our solutions are designed to be user-friendly, maintainable, and scalable, providing the benefits of custom development without the overhead.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Rapid development and deployment</li>
                <li>Integration with existing tools and workflows</li>
                <li>Lower cost than traditional custom development</li>
                <li>Easy maintenance and updates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Example Solutions:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Custom Google Workspace add-ons</li>
                <li>Automated data processing workflows</li>
                <li>AI-enhanced document generation</li>
                <li>Intelligent form processing</li>
                <li>Cross-platform data synchronization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: AI Infrastructure Strategy */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-indigo-700">AI Infrastructure Strategy</h2>
            <h3 className="text-xl text-gray-600 mb-6">Build systems that scale while preserving human creativity</h3>
            <p className="text-gray-600 mb-8">
              We help you develop a comprehensive strategy for integrating AI into your organization's infrastructure. Our approach ensures that AI enhances human creativity and decision-making rather than replacing it, creating a balanced ecosystem that leverages the strengths of both.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Align AI initiatives with organizational goals</li>
                <li>Ensure ethical and responsible AI implementation</li>
                <li>Create a roadmap for sustainable AI adoption</li>
                <li>Maximize ROI on AI investments</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Strategy Components:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>AI Readiness Assessment</li>
                <li>Technology Stack Recommendations</li>
                <li>Data Strategy and Governance</li>
                <li>Implementation Roadmap</li>
                <li>Training and Change Management Plan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-gradient-to-r from-indigo-800 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organization with AI?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's discuss how our services can help you bridge the gap between your team and emerging AI tools.
          </p>
          <Link href="/contact" className="bg-white text-indigo-800 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
