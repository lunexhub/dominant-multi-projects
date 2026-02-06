import { Link } from "react-router-dom";
import { Shield, Target, Users, Award, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import MetaTags from "@/components/MetaTags";
import heroImage from "@/assets/team-fochville.jpg";
import miningImage from "@/assets/team-equipment.jpg";
import riotImage from "@/assets/riot-team.jpg";
import strikeImage from "@/assets/team-roadside.jpg";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "200+", label: "Major Contracts" },
  { number: "3,500+", label: "Personnel" },
  { number: "50+", label: "Mining Sites Secured" },
];

const services = [
  {
    icon: Shield,
    title: "Mine Security",
    description: "Comprehensive security solutions for mining operations across South Africa and the continent.",
    image: miningImage,
  },
  {
    icon: Target,
    title: "Riot Control",
    description: "Specialized units trained in crowd management and civil unrest containment.",
    image: riotImage,
  },
  {
    icon: Users,
    title: "Strike Management",
    description: "Professional mediation and security during industrial action and labor disputes.",
    image: strikeImage,
  },
];

const clients = [
  "Anglo American",
  "Sibanye-Stillwater",
  "Impala Platinum",
  "Harmony Gold",
  "Gold Fields",
  "AngloGold Ashanti",
];

const Index = () => {
  return (
    <>
      <MetaTags
        title="Dominant Multi Projects | Elite Security Services | Johannesburg"
        description="South Africa's premier tactical security company specializing in mine security, riot control, and strike management. PSIRA registered, ISO 9001 certified. Based in Johannesburg."
        keywords="security company johannesburg, mine security south africa, riot control, strike management, private security, tactical security, PSIRA registered"
        canonicalUrl="/"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden max-w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full">
          <img
            src={heroImage}
            alt="Dominant Multi Projects Security Team"
            className="w-full h-full object-cover max-w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/60" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12 md:py-16 max-w-full w-full">
          <div className="max-w-4xl w-full">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-sm mb-4 sm:mb-6 flex-wrap max-w-full">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground/90 tracking-wider font-medium break-words">
                PSIRA REGISTERED | ISO 9001 CERTIFIED
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] mb-4 sm:mb-6 [text-shadow:_3px_3px_25px_rgba(0,0,0,0.9)] break-words">
              <span className="block text-gradient-gold drop-shadow-2xl">DOMINANT</span>
              <span className="block text-gradient-gold drop-shadow-2xl">MULTI</span>
              <span className="block mt-1 sm:mt-2">PROJECTS</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mb-6 sm:mb-8 leading-relaxed font-medium break-words">
              Protecting mining operations, managing civil unrest, and securing high-value assets with military-grade precision. Based in Johannesburg, operating nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/contact">
                  Request Contract Quote
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients - DARK */}
      <section className="py-16 bg-card border-y border-border/50 overflow-hidden max-w-full w-full">
        <div className="container mx-auto px-4 sm:px-6 max-w-full w-full">
          <div className="text-center mb-10">
            <span className="text-muted-foreground text-sm tracking-wider uppercase">
              Trusted by Industry Leaders
            </span>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-12 md:gap-20 animate-scroll-infinite">
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="text-foreground font-display text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold whitespace-nowrap flex-shrink-0"
                >
                  {client}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="text-foreground font-display text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold whitespace-nowrap flex-shrink-0"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - LIGHT */}
      <section className="py-16 section-light border-y border-border/50 overflow-x-hidden max-w-full w-full">
        <div className="container mx-auto px-4 sm:px-6 max-w-full w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 camo-pattern overflow-x-hidden max-w-full w-full">
        <div className="container mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
            <div className="w-full min-w-0">
              <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
                About Dominant Multi Projects
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 break-words">
                TRUSTED BY SOUTH AFRICA'S LARGEST CORPORATIONS
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed break-words">
                For over 15 years, Dominant Multi Projects has been the security partner of choice for mining corporations, industrial facilities, and government institutions across South Africa.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed break-words">
                Our tactical teams, dressed in distinctive camouflage uniforms, represent the highest standard of professionalism in the private security industry. We don't just provide security—we provide peace of mind.
              </p>
              
              <div className="space-y-4 mb-8">
                {["PSIRA Grade A & B Registered", "Military-Trained Personnel", "24/7 Rapid Response Teams", "Advanced Surveillance Technology"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="tactical" asChild>
                <Link to="/about">
                  Learn Our Story
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative w-full min-w-0">
              <div className="aspect-square bg-card rounded overflow-hidden tactical-border w-full">
                <img
                  src={miningImage}
                  alt="Mining Operations Security"
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
              <div className="absolute bottom-2 md:-bottom-6 left-2 md:-left-6 bg-accent text-accent-foreground p-3 md:p-6 rounded shadow-tactical max-w-[calc(100%-0.5rem)] md:max-w-none">
                <div className="font-display text-xl md:text-3xl">15+</div>
                <div className="text-xs md:text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - LIGHT */}
      <section className="py-16 md:py-24 section-light overflow-x-hidden max-w-full w-full">
        <div className="container mx-auto px-4 sm:px-6 max-w-full w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              SPECIALIZED SECURITY SERVICES
            </h2>
            <p className="text-muted-foreground">
              From mining site protection to riot control and strike management, our tactical teams are equipped to handle any security challenge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border/50 rounded overflow-hidden hover:border-primary/50 transition-all duration-500 w-full flex flex-col"
              >
                <div className="aspect-[4/3] md:aspect-video overflow-hidden w-full flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all mt-auto"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - LIGHT */}
      <section className="py-24 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-tactical-gradient opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              READY TO SECURE YOUR OPERATIONS?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Contact our contracts team today for a comprehensive security assessment and customized quote for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Quote
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-foreground/30 text-foreground hover:bg-foreground/10" asChild>
                <a href="tel:0784330816">
                  Call 078 433 0816
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Index;
