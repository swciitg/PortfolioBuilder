// Option2.js
import { Mail, Phone, Linkedin, Github, MapPin, Clock } from "lucide-react";

const Option2 = (props) => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@example.com",
      description: "Send me an email anytime",
      href: "mailto:contact@example.com",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      href: "tel:+15551234567",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/yourname",
      description: "Let's connect professionally",
      href: "https://linkedin.com/in/yourname",
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-50 ",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/yourusername",
      description: "Check out my projects",
      href: "https://github.com/yourusername",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work",
      href: "#",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-50",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster",
      href: "#",
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50 ",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactDetails.map((detail) => (
            <div
              key={detail.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-muted rounded-2xl"
            >
              <a
                href={detail.href}
                target={detail.href.startsWith("http") ? "_blank" : undefined}
                rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block p-8"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${detail.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <detail.icon className={`h-7 w-7 ${detail.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{detail.title}</h3>
                <p className="text-base font-medium text-foreground/90 mb-2">{detail.value}</p>
                <p className="text-sm text-muted-foreground">{detail.description}</p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl">
            <div className="p-10">
              <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Start a Conversation?</h3>
              <p className="text-muted-foreground text-lg">
                Whether you have a question, a project idea, or just want to say hello, 
                I'd love to hear from you. Choose any method above to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option2;
