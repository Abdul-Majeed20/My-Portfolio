import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, efficient code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with teams to achieve common goals.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with over 2 years of experience creating
            digital solutions that bridge the gap between design and
            functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-semibold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into web development began with a deep curiosity
                about building things from scratch. What started as tweaking
                simple website templates soon turned into a passion for
                developing full-stack applications that solve real-world
                problems efficiently.
              </p>
              <p>
                I specialize in the MERN stack, Shopify theme development, and
                WordPress customization, integrating clean code with intuitive
                UI/UX design. Staying updated with modern frameworks and SEO
                best practices helps me build scalable, high-performing
                solutions.
              </p>
              <p>
                When I'm not coding, I enjoy learning emerging technologies,
                designing user-focused interfaces, and optimizing websites for
                search engines. I also spend time sharing knowledge, mentoring
                fellow developers, and contributing to impactful projects.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative animate-scale-in">
            <div className="card-professional rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center space-y-4 w-full h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/Profile.jpeg" // Ensure correct path
                    alt="Profile Picture"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="card-professional p-6 text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
