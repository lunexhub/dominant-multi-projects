import { useState } from "react";
import { Shield, Phone, Mail, MapPin, Clock, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import MetaTags from "@/components/MetaTags";
import heroImage from "@/assets/executive-team.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Store form reference before async operation
    const form = e.currentTarget;
    
    try {
      // Create FormData and append all form values
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "1b824f87-bf87-4422-94c6-faa9c49eba7e");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("service", formData.service);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", `New Contact Form Submission from ${formData.name}`);
      formDataToSend.append("from_name", "Dominant Multi Projects Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      // Check if response is successful - Web3Forms returns success: true on success
      if (data.success === true) {
        toast({
          title: "Enquiry Submitted Successfully",
          description: "Our contracts team will contact you within 24 hours.",
        });
        
        // Reset form state
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        
        // Reset the form element if it still exists
        if (form) {
          form.reset();
        }
      } else {
        // Show user-friendly error message
        const errorMessage = data.message || data.error || "Please try again or contact us directly.";
        toast({
          title: "Submission Failed",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred. Please try again or contact us directly at 078 433 0816.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["600 Louis Avenue", "Bramley", "Johannesburg, South Africa"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["078 433 0816"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Dominantmp@gmail.com"],
    },
    {
      icon: Clock,
      title: "Operations",
      details: ["24/7 Control Room", "Business Hours: 07:00 - 18:00"],
    },
  ];

  const services = [
    "Mine Security",
    "Riot Control",
    "Strike Management",
    "VIP Protection",
    "Asset Protection",
    "Surveillance & Intelligence",
    "Other",
  ];

  return (
    <>
      <MetaTags
        title="Contact Us | Dominant Multi Projects | Request Security Quote"
        description="Contact Dominant Multi Projects for security services. Located in Bramley, Johannesburg. Call 078 433 0816 or request a quote online. 24/7 emergency response available."
        keywords="contact security company, security quote request, johannesburg security company, emergency security response, security consultation"
        canonicalUrl="/contact"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact Dominant Multi Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 [text-shadow:_2px_2px_20px_rgba(0,0,0,0.8)]">
              GET YOUR
              <span className="block text-gradient-gold">CONTRACT QUOTE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Ready to secure your operations? Contact our contracts team for a comprehensive security assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - LIGHT */}
      <section className="py-16 md:py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-2">
                REQUEST A QUOTE
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below and our contracts team will contact you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-foreground mb-2 block">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-foreground mb-2 block">Company *</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      required
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-foreground mb-2 block">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.co.za"
                      required
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-foreground mb-2 block">Phone</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 00 000 0000"
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-foreground mb-2 block">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-sm bg-card border border-border/50 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-sm text-foreground mb-2 block">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your security requirements, location, and any specific needs..."
                    required
                    rows={5}
                    className="bg-card border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. All information is kept strictly confidential.
                </p>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-2">
                CONTACT INFORMATION
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out directly or visit our head office in Bramley, Johannesburg.
              </p>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-card border border-border/50 rounded hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map */}
              <div className="aspect-video bg-card border border-border/50 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?q=600+Louis+Avenue,+Bramley,+Johannesburg,+South+Africa&zoom=15&maptype=roadmap"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Dominant Multi Projects Location - 600 Louis Avenue, Bramley, Johannesburg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-destructive/10 border-y border-destructive/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <Phone className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">
                  24/7 EMERGENCY RESPONSE
                </h3>
                <p className="text-muted-foreground">
                  Immediate tactical response available around the clock
                </p>
              </div>
            </div>
            <Button variant="destructive" size="xl" asChild>
              <a href="tel:0784330816">
                078 433 0816
                <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl text-foreground mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "What is your minimum contract duration?",
                  a: "Our standard contracts range from 6 months to multi-year agreements. We offer flexibility based on project requirements.",
                },
                {
                  q: "How quickly can you deploy personnel?",
                  a: "For emergency deployments, we can mobilize teams within 24-48 hours. Standard deployments typically require 2-4 weeks for proper assessment and training.",
                },
                {
                  q: "Are your personnel armed?",
                  a: "Yes, our tactical teams include PSIRA-registered armed response officers. All personnel undergo rigorous weapons training and psychological assessments.",
                },
                {
                  q: "Do you operate outside of South Africa?",
                  a: "Yes, we have expanded operations to neighboring African countries including Botswana, Namibia, Mozambique, and Zimbabwe.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded p-6"
                >
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Contact;
