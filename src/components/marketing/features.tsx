import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Turn Marketing Data Into <br />
            <span className="font-subheading italic">Revenue Growth</span>
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            Our AI marketing platform combines automation, insights, and
            optimization to help you launch smarter campaigns, boost
            conversions, and scale your brand faster than ever.
          </p>
        </div>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">
        {FEATURES.map((feature, index) => (
          <Container
            key={feature.title}
            delay={0.1 + index * 0.1}
            className={cn(
              "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
              index === 3 && "lg:col-span-2",
              index === 2 && "md:col-span-2 lg:col-span-1"
            )}
          >
            <MagicCard
              gradientFrom="#a855f7"
              gradientTo="#a855f7"
              className="p-4 lg:p-6 lg:rounded-3xl"
              gradientColor="rgba(168,85,247,0.1)"
            >
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <feature.icon className="size-5 text-primary" />
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>

              <div className="mt-6 w-full bg-card/50 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </MagicCard>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default Features;
