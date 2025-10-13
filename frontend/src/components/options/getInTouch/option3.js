// src/components/options/getInTouch/option3.js
import { Mail, Linkedin, Github, Twitter, ArrowRight } from "lucide-react";

const Option3 = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@example.com",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yourusername",
      color: "hover:text-purple-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/yourhandle",
      color: "hover:text-sky-500",
    },
  ];

  return (
    <section className="min-h-screen bg-RGB(255, 250, 240) flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Main Content */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 mt-3 rounded-full bg-gray-200 text-black text-sm font-medium mb-4">
            Available for opportunities
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Let's Work
            <br />
            <span className="text-black">Together</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
        </div>

        {/* Email CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-500 transition-all duration-300 group"
          >
            <Mail className="h-5 w-5" />
            Send me an email
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-8">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
            Or connect via
          </p>
          <div className="flex justify-center gap-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-3 text-gray-500 transition-all duration-300 ${social.color} hover:scale-110 group`}
                  aria-label={social.name}
                >
                  <div className="p-4 rounded-2xl bg-gray-100 group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-16 border-t border-gray-200 mt-16">
          <p className="text-gray-500">
            Based in San Francisco • Open to remote opportunities worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Option3;
