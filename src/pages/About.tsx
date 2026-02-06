import { Link } from "react-router-dom";
import { Shield, Target, Users, Award, ChevronRight, CheckCircle, Medal, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import MetaTags from "@/components/MetaTags";
import heroImage from "@/assets/team-briefing.jpg";
import executiveLimoImage from "@/assets/executive-limo-team.jpg";
import founderImage from "@/assets/WhatsApp Image 2026-02-06 at 08.55.00.jpeg";

const milestones = [
  { year: "2009", title: "Company Founded", description: "Established in Johannesburg with 50 personnel" },
  { year: "2012", title: "First Major Mining Contract", description: "Secured contract with leading platinum mine" },
  { year: "2015", title: "Expansion to 1,000+ Personnel", description: "Became one of SA's largest private security firms" },
  { year: "2018", title: "ISO 9001 Certification", description: "Achieved international quality management standards" },
  { year: "2021", title: "3,500+ Personnel", description: "Operating across all major mining regions" },
  { year: "2024", title: "Continental Operations", description: "Expanded services to neighboring African nations" },
];

const values = [
  {
    icon: Shield,
    title: "Unwavering Protection",
    description: "We stand as the first line of defense for our clients' assets, operations, and personnel.",
  },
  {
    icon: Medal,
    title: "Military Discipline",
    description: "Our teams operate with military-grade discipline, training, and professionalism.",
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Every operation is meticulously planned and executed with tactical precision.",
  },
  {
    icon: Building,
    title: "Corporate Integrity",
    description: "We uphold the highest ethical standards in every engagement and interaction.",
  },
];

const leadership = [
  {
    name: "Col. (Ret.) James Ndlovu",
    role: "Chief Executive Officer",
    bio: "Former Special Forces commander with 25+ years of military and security experience.",
  },
  {
    name: "Brig. (Ret.) Sarah Mokoena",
    role: "Chief Operations Officer",
    bio: "Former SAPS tactical unit commander specializing in crowd management and crisis response.",
  },
  {
    name: "Capt. (Ret.) David van der Berg",
    role: "Director of Training",
    bio: "Former Recce operator and tactical training specialist with international certification.",
  },
];

const About = () => {
  return (
    <>
      <MetaTags
        title="About Us | Dominant Multi Projects | Elite Security Services"
        description="Learn about Dominant Multi Projects - South Africa's premier tactical security company. Founded in 2009 with 3,500+ trained personnel, military-grade training, and ISO 9001 certification."
        keywords="about dominant multi projects, security company history, tactical security team, military-trained security, PSIRA registered security company"
        canonicalUrl="/about"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden max-w-full">
        <div className="absolute inset-0 w-full">
          <img
            src={heroImage}
            alt="Dominant Multi Projects Team"
            className="w-full h-full object-cover max-w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 [text-shadow:_2px_2px_20px_rgba(0,0,0,0.8)]">
              A LEGACY OF
              <span className="block text-gradient-gold">PROTECTION</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Since 2009, Dominant Multi Projects has been setting the standard for tactical security in South Africa's most demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 camo-pattern overflow-x-hidden max-w-full w-full">
        <div className="container mx-auto px-4 sm:px-6 max-w-full w-full">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-full w-full">
            <div className="w-full max-w-full">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 break-words">
                BORN FROM MILITARY EXCELLENCE
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed break-words">
                Dominant Multi Projects was founded by a group of former military officers who recognized the need for military-grade security in the private sector.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed break-words">
                Our distinctive camouflage uniforms aren't just a choice—they're a statement. They represent our roots in military tradition and our commitment to tactical excellence in every operation we undertake.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed break-words">
                Today, we are proud to be the security partner of choice for South Africa's largest mining corporations, industrial facilities, and high-profile clients requiring discrete and effective protection.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <div className="font-display text-3xl text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Years in Operation</div>
                </div>
                <div className="stat-card">
                  <div className="font-display text-3xl text-accent">3,500+</div>
                  <div className="text-sm text-muted-foreground">Trained Personnel</div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full max-w-full">
              <div className="aspect-[4/5] bg-card rounded overflow-hidden tactical-border w-full max-w-full">
                <img
                  src={executiveLimoImage}
                  alt="Executive Limo Team"
                  className="w-full h-full object-contain md:object-cover max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - LIGHT */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              WHAT DRIVES US
            </h2>
            <p className="text-muted-foreground">
              Our core values form the foundation of every operation, every decision, and every interaction with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/20 rounded flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              MILESTONES
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl text-accent">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              EXECUTIVE TEAM
            </h2>
            <p className="text-muted-foreground">
              Our leadership team brings decades of combined military and security experience.
            </p>
          </div>
          
          {/* Founder & CEO */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-background border border-border/50 rounded-lg overflow-hidden">
              <div className="aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden">
                <img
                  src={founderImage}
                  alt="Founder and CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  Founder & CEO
                </h3>
                <p className="text-muted-foreground">
                  Leading Dominant Multi Projects with decades of military and security expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Credentials
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              CERTIFICATIONS & COMPLIANCE
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["PSIRA Grade A & B", "ISO 9001:2015", "SABS Certified", "BEE Level 2"].map((cert, i) => (
              <div key={i} className="stat-card text-center">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - LIGHT */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              PARTNER WITH THE BEST
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover why South Africa's leading corporations trust Dominant Multi Projects with their security needs.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Contact Our Team
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default About;
