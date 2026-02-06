import Layout from "@/components/layout/Layout";
import MetaTags from "@/components/MetaTags";
import { Shield, Users, Award, Target } from "lucide-react";
import teamUnity from "@/assets/team-unity.jpg";
import teamLineup from "@/assets/team-lineup.jpg";
import teamSite from "@/assets/team-site.jpg";
import riotTeam from "@/assets/riot-team.jpg";
import teamRoadside from "@/assets/team-roadside.jpg";
import teamEquipment from "@/assets/team-equipment.jpg";
import vipTeam from "@/assets/vip-team.jpg";
import formalTeam from "@/assets/formal-team.jpg";
import executiveTeam from "@/assets/executive-team.jpg";
import teamFochville from "@/assets/team-fochville.jpg";
import fleetVehicles from "@/assets/fleet-vehicles.jpg";
import miningTeam from "@/assets/mining-team.jpg";
import teamVan from "@/assets/team-van.jpg";
import orTamboTeam from "@/assets/or-tambo-team.jpg";
import catLoaderTeam from "@/assets/cat-loader-team.jpg";
import teamBriefing from "@/assets/team-briefing.jpg";
import fochvilleTeam2 from "@/assets/fochville-team-2.jpg";
import coalMineTeam from "@/assets/coal-mine-team.jpg";
import riotShields from "@/assets/riot-shields.jpg";
import mineGroup from "@/assets/mine-group.jpg";
import vipBodyguards from "@/assets/vip-bodyguards.jpg";
import securityTeamGathering from "@/assets/security-team-gathering.jpg";
import executiveLimoTeam from "@/assets/executive-limo-team.jpg";
import executiveDuo from "@/assets/executive-duo.jpg";
import armedResponseUnit from "@/assets/armed-response-unit.jpg";
import tacticalVestTeam from "@/assets/tactical-vest-team.jpg";
import camoTrio from "@/assets/camo-trio.jpg";
import executiveFullTeam from "@/assets/executive-full-team.jpg";
import vipTrioBmw from "@/assets/vip-trio-bmw.jpg";
import armedVehicleSquad from "@/assets/armed-vehicle-squad.jpg";
import teamTrainingSession from "@/assets/team-training-session.jpg";
import fullTeamCanopy from "@/assets/full-team-canopy.jpg";
import trafficPoliceDuo from "@/assets/traffic-police-duo.jpg";
import camoTeamPose from "@/assets/camo-team-pose.jpg";
import fullCompanyPhoto from "@/assets/full-company-photo.jpg";

const teamValues = [
  {
    icon: Shield,
    title: "Discipline",
    description: "Military-grade training and strict protocols ensure consistent excellence.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Our teams work as one cohesive unit, supporting each other in any situation.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "From camouflage to formal attire, we maintain the highest standards.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every operation is executed with tactical precision and attention to detail.",
  },
];

const galleryImages = [
  { src: riotShields, alt: "Riot control unit with shields", category: "Riot Control" },
  { src: teamUnity, alt: "Team unity formation", category: "Team Building" },
  { src: miningTeam, alt: "Mining site security team", category: "Mining Operations" },
  { src: teamSite, alt: "On-site security team", category: "Field Operations" },
  { src: orTamboTeam, alt: "O.R. Tambo security team", category: "Corporate Security" },
  { src: teamRoadside, alt: "Road security deployment", category: "Field Operations" },
  { src: coalMineTeam, alt: "Coal mine security", category: "Mining Operations" },
  { src: vipTeam, alt: "VIP protection unit", category: "VIP Security" },
  { src: teamVan, alt: "Mobile response team", category: "Field Operations" },
  { src: mineGroup, alt: "Mining site deployment", category: "Mining Operations" },
  { src: teamFochville, alt: "Team at Fochville site", category: "Field Operations" },
  { src: formalTeam, alt: "Formal event security", category: "Executive Protection" },
  { src: catLoaderTeam, alt: "Heavy equipment security", category: "Asset Protection" },
  { src: teamBriefing, alt: "Team tactical briefing", category: "Training" },
  { src: fochvilleTeam2, alt: "Fochville operations team", category: "Field Operations" },
  { src: teamLineup, alt: "Security team lineup", category: "Field Operations" },
  { src: fleetVehicles, alt: "Response vehicle fleet", category: "Fleet Operations" },
  { src: teamEquipment, alt: "Equipment security team", category: "Asset Protection" },
  { src: riotTeam, alt: "Riot response unit", category: "Specialized Units" },
  { src: executiveTeam, alt: "Executive security team", category: "Corporate Events" },
  { src: vipBodyguards, alt: "VIP bodyguard detail", category: "VIP Security" },
  { src: securityTeamGathering, alt: "Security team gathering", category: "Team Building" },
  { src: executiveLimoTeam, alt: "Executive limousine security", category: "VIP Security" },
  { src: executiveDuo, alt: "Executive protection pair", category: "VIP Security" },
  { src: armedResponseUnit, alt: "Armed response unit", category: "Specialized Units" },
  { src: tacticalVestTeam, alt: "Tactical vest team", category: "Field Operations" },
  { src: camoTrio, alt: "Camouflage unit", category: "Specialized Units" },
  { src: executiveFullTeam, alt: "Full executive detail", category: "Corporate Events" },
  { src: vipTrioBmw, alt: "VIP security with BMW", category: "VIP Security" },
  { src: armedVehicleSquad, alt: "Armed vehicle squad", category: "Specialized Units" },
  { src: teamTrainingSession, alt: "Team training session", category: "Training" },
  { src: fullTeamCanopy, alt: "Full team under canopy", category: "Team Building" },
  { src: trafficPoliceDuo, alt: "Traffic police coordination", category: "Field Operations" },
  { src: camoTeamPose, alt: "Camouflage team pose", category: "Specialized Units" },
  { src: fullCompanyPhoto, alt: "Full company photo", category: "Team Building" },
];

const Team = () => {
  return (
    <>
      <MetaTags
        title="Our Team | Dominant Multi Projects | 3,500+ Trained Security Personnel"
        description="Meet the dedicated professionals behind Dominant Multi Projects. Our 3,500+ strong team includes military-trained personnel, tactical specialists, and security experts serving South Africa."
        keywords="security team, tactical security personnel, military-trained security, security professionals, trained security guards, PSIRA registered security team"
        canonicalUrl="/team"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden max-w-full">
        <div className="absolute inset-0 w-full">
          <img
            src={teamUnity}
            alt="Dominant Multi Projects Team"
            className="w-full h-full object-cover max-w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 block">
              Our People
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 [text-shadow:_2px_2px_20px_rgba(0,0,0,0.8)]">
              THE TEAM BEHIND
              <span className="block text-gradient-gold">YOUR SECURITY</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Meet the dedicated professionals who make Dominant Multi Projects the most trusted security provider in South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values - LIGHT */}
      <section className="py-12 md:py-20 section-light border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              WHAT DRIVES US
            </h2>
            <p className="text-muted-foreground">
              Our team is built on core values that ensure excellence in every operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div
                key={index}
                className="bg-muted/30 border border-border/50 rounded p-8 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
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

      {/* Team Introduction */}
      <section className="py-24 camo-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
                3,500+ Strong
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                A FORCE TO BE RECKONED WITH
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our security personnel are carefully selected from military and law enforcement backgrounds. Each team member undergoes rigorous training in tactical operations, conflict resolution, and emergency response.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From our distinctive camouflage field units to our sharply dressed VIP protection teams, every member represents the highest standards of professionalism in the private security industry.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card/50 p-6 rounded border border-border/50">
                  <div className="font-display text-3xl text-accent mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Military & Law Enforcement Background</div>
                </div>
                <div className="bg-card/50 p-6 rounded border border-border/50">
                  <div className="font-display text-3xl text-accent mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Training Hours Per Personnel</div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full max-w-full">
              <div className="aspect-[4/3] bg-card rounded overflow-hidden tactical-border w-full max-w-full">
                <img
                  src={teamLineup}
                  alt="Security Team Lineup"
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-accent text-accent-foreground p-4 md:p-6 rounded shadow-tactical max-w-[calc(100%-1rem)]">
                <div className="font-display text-2xl md:text-3xl">24/7</div>
                <div className="text-xs md:text-sm">Ready Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - LIGHT */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Operations
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              TEAM IN ACTION
            </h2>
            <p className="text-muted-foreground">
              From mining sites to corporate events, our teams deliver excellence across all security operations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded tactical-border w-full ${
                  index === 0 || index === 6 || index === 14 || index === 22 || index === 30 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-accent font-medium tracking-wider uppercase">
                      {image.category}
                    </span>
                    <p className="text-foreground text-sm mt-1">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
              Specialized Units
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              OUR DIVISIONS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[4/3] md:aspect-video overflow-hidden rounded mb-6">
                <img
                  src={teamSite}
                  alt="Field Operations Division"
                  className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Field Operations</h3>
              <p className="text-muted-foreground text-sm">
                Tactical units deployed to mining sites, industrial facilities, and high-risk locations. Trained in crowd control, asset protection, and rapid response.
              </p>
            </div>

            <div className="group">
              <div className="aspect-[4/3] md:aspect-video overflow-hidden rounded mb-6">
                <img
                  src={vipTeam}
                  alt="VIP Protection Division"
                  className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">VIP Protection</h3>
              <p className="text-muted-foreground text-sm">
                Close protection specialists for executives, dignitaries, and high-profile individuals. Discrete, professional, and highly trained bodyguards.
              </p>
            </div>

            <div className="group">
              <div className="aspect-[4/3] md:aspect-video overflow-hidden rounded mb-6">
                <img
                  src={executiveTeam}
                  alt="Executive Services Division"
                  className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Executive Services</h3>
              <p className="text-muted-foreground text-sm">
                Corporate event security, board meeting protection, and executive travel security. Professional appearance with tactical capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Team;
