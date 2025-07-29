import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <Container>
          <div className="flex flex-col items-start justify-start md:max-w-[200px]">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/logo.png"
                alt="Stratix Hub logo"
                height={40}
                width={150}
              />
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              The AI-powered marketing platform that transforms campaigns,
              boosts conversions, and scales your brand effortlessly.
            </p>
          </div>
        </Container>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Container delay={0.1} className="h-auto">
              <h3 className="text-base font-medium text-foreground">Product</h3>
              <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                <li className="mt-2">
                  <Link
                    href="#features"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    AI Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#pricing"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    Pricing Plans
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#integrations"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    Integrations
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#languages"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    Global Languages
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#api"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    API Access
                  </Link>
                </li>
              </ul>
            </Container>
            <Container delay={0.2} className="h-auto">
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-foreground">
                  Solutions
                </h3>
                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                  <li>
                    <Link
                      href="#small-business"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      Small Business
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="#agencies"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      Marketing Agencies
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="#ecommerce"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      E-commerce
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="#enterprise"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      Enterprise
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="#saas"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      SaaS Companies
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Container delay={0.3} className="h-auto">
              <h3 className="text-base font-medium text-foreground">
                Resources
              </h3>
              <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                <li className="mt-2">
                  <Link
                    href="/blog"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    Marketing Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/guides"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    AI Marketing Guides
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/case-studies"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/support"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/webinars"
                    className="link hover:text-foreground transition-all duration-300"
                  >
                    Webinars
                  </Link>
                </li>
              </ul>
            </Container>
            <Container delay={0.4} className="h-auto">
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-foreground">
                  Company
                </h3>
                <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/careers"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/contact"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/privacy"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/terms"
                      className="link hover:text-foreground transition-all duration-300"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
        <div className="mt-8 md:flex md:items-center md:justify-between footer w-full">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Stratix Hub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Made with ❤️ by{" "}
            <Link
              href="https://vrushikvisavadiya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:text-primary transition-colors duration-300"
            >
              Vrushik Visavadiya
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
