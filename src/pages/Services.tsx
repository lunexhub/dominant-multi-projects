import { Link } from "react-router-dom";
import { Shield, Target, Users, Truck, Eye, Lock, AlertTriangle, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import MetaTags from "@/components/MetaTags";
import miningImage from "@/assets/mining-operations.jpg";
import riotImage from "@/assets/riot-control.jpg";
import vipImage from "@/assets/vip-protection.jpg";
import heroImage from "@/assets/team-lineup.jpg";
import armedResponseImage from "@/assets/armed-response-unit.jpg";
import riotShieldsImage from "@/assets/riot-shields.jpg";
import armedVehicleImage from "@/assets/armed-vehicle-squad.jpg";
import vipTrioImage from "@/assets/vip-trio-bmw.jpg";
import coalMineImage from "@/assets/coal-mine-team.jpg";
import miningTeamImage from "@/assets/mining-team.jpg";

const services = [
  {
    id: "mine-security",
    icon: Shield,
    title: "Mine Security",
    subtitle: "Comprehensive Mining Protection",
    description: "Our flagship service provides 24/7 security coverage for mining operations of all sizes, from small-scale operations to major platinum and gold mines.",
    image: armedResponseImage,
    features: [
      "Perimeter security and access control",
      "Underground security patrols",
      "Asset and precious metal protection",
      "Anti-theft surveillance systems",
      "Emergency response teams",
      "CCTV monitoring and control rooms",
    ],
    stats: { number: "50+", label: "Mining Sites Secured" },
  },
  {
    id: "riot-control",
    icon: Target,
    title: "Riot Control",
    subtitle: "Civil Unrest Management",
    description: "Specialized tactical units trained in crowd management, civil unrest containment, and de-escalation techniques. Our teams operate with precision and restraint.",
    image: riotShieldsImage,
    features: [
      "Crowd management and control",
      "Protective formations and tactics",
      "Non-lethal response capabilities",
      "De-escalation trained personnel",
      "Coordination with law enforcement",
      "Post-incident documentation",
    ],
    stats: { number: "100+", label: "Successful Operations" },
  },
  {
    id: "strike-management",
    icon: AlertTriangle,
    title: "Strike Management",
    subtitle: "Industrial Action Security",
    description: "Professional security presence during labor disputes and industrial action. We maintain operational continuity while ensuring the safety of all parties.",
    image: armedVehicleImage,
    features: [
      "Secure passage for personnel",
      "Property and equipment protection",
      "Peaceful demonstration monitoring",
      "Essential services continuity",
      "Neutral stance mediation support",
      "24/7 situation monitoring",
    ],
    stats: { number: "200+", label: "Disputes Managed" },
  },
  {
    id: "vip-protection",
    icon: Users,
    title: "VIP Protection",
    subtitle: "Executive Security Services",
    description: "Discrete and professional close protection for executives, dignitaries, and high-profile individuals. Our teams blend military precision with corporate discretion.",
    image: vipTrioImage,
    features: [
      "Close protection officers",
      "Advance security assessments",
      "Secure transportation",
      "Residential security",
      "Travel security planning",
      "Threat intelligence briefings",
    ],
    stats: { number: "500+", label: "Principals Protected" },
  },
  {
    id: "asset-protection",
    icon: Lock,
    title: "Asset Protection",
    subtitle: "High-Value Asset Security",
    description: "Specialized security for cash-in-transit, precious metals, and high-value cargo. Military-grade protection for your most valuable assets.",
    image: coalMineImage,
    features: [
      "Armed escort services",
      "Secure vault protection",
      "Cargo security and tracking",
      "Warehouse and depot security",
      "Insurance-compliant procedures",
      "Chain of custody documentation",
    ],
    stats: { number: "R50B+", label: "Assets Secured Annually" },
  },
  {
    id: "surveillance",
    icon: Eye,
    title: "Surveillance & Intelligence",
    subtitle: "Advanced Monitoring Solutions",
    description: "State-of-the-art surveillance systems and intelligence gathering to identify and neutralize threats before they materialize.",
    image: miningTeamImage,
    features: [
      "CCTV system design and installation",
      "Remote monitoring centers",
      "Threat assessment and analysis",
      "Counter-surveillance operations",
      "Investigation support",
      "Digital forensics capabilities",
    ],
    stats: { number: "1,000+", label: "Cameras Monitored" },
  },
];

const Services = () => {
  return (
    <>
      <MetaTags
        title="Security Services | Dominant Multi Projects | Mine Security, Riot Control & More"
        description="Comprehensive tactical security services including mine security, riot control, strike management, VIP protection, asset protection, and surveillance. Serving South Africa's largest corporations."
        keywords="mine security services, riot control services, strike management, VIP protection, asset protection, surveillance services, tactical security solutions"
        canonicalUrl="/services"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden max-w-full">
        <div className="absolute inset-0 w-full">
          <img
            src={heroImage}
            alt="Tactical Security Solutions"
            className="w-full h-full object-cover max-w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 [text-shadow:_2px_2px_20px_rgba(0,0,0,0.8)]">
              TACTICAL SECURITY
              <span className="block text-gradient-gold">SOLUTIONS</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Comprehensive security services designed for South Africa's most demanding environments and highest-stakes situations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 overflow-x-hidden max-w-full w-full">
        <div className="container mx-auto px-4 sm:px-6 max-w-full w-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-24 last:mb-0 max-w-full w-full ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} w-full max-w-full`}>
                <div className="inline-flex items-center gap-3 mb-4 flex-wrap">
                  <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-accent text-sm font-medium tracking-widest uppercase break-words">
                    {service.subtitle}
                  </span>
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 break-words">
                  {service.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed break-words">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm break-words">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="stat-card inline-block">
                    <div className="font-display text-2xl text-accent break-words">{service.stats.number}</div>
                    <div className="text-xs text-muted-foreground break-words">{service.stats.label}</div>
                  </div>
                  <Button variant="tactical" asChild className="w-full sm:w-auto">
                    <Link to="/contact">
                      Request Quote
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} w-full max-w-full`}>
                <div className="aspect-[4/3] md:aspect-video bg-card rounded overflow-hidden tactical-border w-full max-w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain md:object-cover max-w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process - LIGHT */}
      <section className="py-24 section-light border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              HOW WE WORK
            </h2>
            <p className="text-muted-foreground">
              A systematic approach to delivering world-class security solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Assessment", desc: "Comprehensive security audit of your operations" },
              { step: "02", title: "Planning", desc: "Custom security strategy development" },
              { step: "03", title: "Deployment", desc: "Trained personnel and systems installation" },
              { step: "04", title: "Monitoring", desc: "Continuous oversight and improvement" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-primary/20 border border-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-2xl text-accent">{item.step}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <ChevronRight className="w-6 h-6 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 camo-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Resources
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              TACTICAL CAPABILITIES
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Truck, label: "Armored Vehicles", count: "50+" },
              { icon: Users, label: "Trained Personnel", count: "3,500+" },
              { icon: Eye, label: "Surveillance Drones", count: "25+" },
              { icon: Shield, label: "K9 Units", count: "30+" },
            ].map((item, index) => (
              <div key={index} className="stat-card text-center">
                <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-display text-2xl text-foreground mb-1">{item.count}</div>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              READY TO DISCUSS YOUR SECURITY NEEDS?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our contracts team is ready to provide a comprehensive assessment and customized quote for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-foreground/30 text-foreground hover:bg-foreground/10" asChild>
                <a href="tel:0784330816">
                  Call Now
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

export default Services;
