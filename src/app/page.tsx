export default function X402Landing() {
  interface Project {
    title: string;
    category: string;
    description: string;
    team: string;
    status: "Live" | "Beta" | "Development" | string;
    link: string;
  }

  const projects: Project[] = [
    {
      title: "Payment Gateway",
      category: "Payment Processing",
      description:
        "A comprehensive payment solution for merchants enabling seamless x402 transactions with fraud protection and real-time settlement.",
      team: "5–10",
      status: "Live",
      link: "https://example.com/",
    },
    {
      title: "Wallet Integration",
      category: "Wallet",
      description:
        "Seamless wallet connectivity supporting multiple types with intuitive UX and security.",
      team: "3–5",
      status: "Beta",
      link: "https://example.com/",
    },
    {
      title: "Analytics Dashboard",
      category: "Analytics",
      description:
        "Real-time insights and reporting for x402 transactions, giving merchants analytics and performance metrics.",
      team: "2–4",
      status: "Live",
      link: "https://example.com/",
    },
    {
      title: "DeFi Protocol",
      category: "DeFi",
      description:
        "Decentralized finance protocol built on x402, enabling AMM and liquidity provision for payment networks.",
      team: "8–15",
      status: "Development",
      link: "https://example.com/",
    },
    {
      title: "NFT Marketplace",
      category: "NFT",
      description:
        "Marketplace with x402 payment integration allowing creators to monetize digital assets instantly.",
      team: "6–12",
      status: "Beta",
      link: "https://example.com/",
    },
    {
      title: "Gaming Platform",
      category: "Gaming",
      description:
        "Blockchain gaming platform utilizing x402 for in-game purchases, tournaments, and rewards with micro-transactions.",
      team: "10–20",
      status: "Live",
      link: "https://example.com/",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-indigo-600">x402 Ecosystem</h1>
          <nav className="flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#ecosystem" className="hover:text-indigo-600">Ecosystem</a>
            <a href="#submit" className="hover:text-indigo-600">Submit Project</a>
            <a href="#docs" className="hover:text-indigo-600">Documentation</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          The Internet-Native Payment Protocol
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Fast, cheap, and AI-friendly payments for the x402 ecosystem.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#ecosystem"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Explore Ecosystem
          </a>
          <a
            href="#submit"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition"
          >
            Submit Project
          </a>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Ecosystem Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p: Project) => (
            <div
              key={p.title}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{p.title}</h4>
                <p className="text-sm text-indigo-600 mb-3">{p.category}</p>
                <p className="text-gray-600 mb-4">{p.description}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Team: {p.team}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    p.status === "Live"
                      ? "bg-green-100 text-green-700"
                      : p.status === "Beta"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <a
                href={p.link}
                className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Project */}
      <section id="submit" className="bg-indigo-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Submit Your Project
          </h3>
          <p className="text-gray-600 text-center mb-10">
            Building something amazing on x402? Share it with the ecosystem and get discovered.
          </p>
          <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Name *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select a category</option>
                  <option value="payment">Payment Processing</option>
                  <option value="wallet">Wallet Integration</option>
                  <option value="defi">DeFi Protocol</option>
                  <option value="nft">NFT Platform</option>
                  <option value="gaming">Gaming</option>
                  <option value="social">Social Platform</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Team Size *</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select team size</option>
                  <option value="1">Solo Developer</option>
                  <option value="2-5">2–5 People</option>
                  <option value="6-10">6–10 People</option>
                  <option value="11-25">11–25 People</option>
                  <option value="25+">25+ People</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email *</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
              <textarea
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Submit Project
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to have your project reviewed and potentially featured on our ecosystem page.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200">
        © {new Date().getFullYear()} x402 Ecosystem. All rights reserved.
      </footer>
    </main>
  );
}
