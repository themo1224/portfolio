import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectImage } from "@/components/project-image";
import { experience, projects, site, skills } from "@/lib/site-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Container
        component="header"
        wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        className="mx-auto max-w-7xl flex items-center justify-between h-16 uppercase"
      >
        <div className="text-xl font-bold font-mono tracking-tighter">
          {site.shortName}
          <span className="text-primary">_</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground ">
          <Link
            href="#projects"
            className="hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors">
            Skills
          </Link>
          <Link
            href="#experience"
            className="hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Link
          href={site.resumePath}
          download
          className={cn(
            buttonVariants({ variant: "outline" }),
            "font-mono text-xs border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary",
          )}
        >
          {site.resumeLabel}
        </Link>
      </Container>

      <Container
        wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="absolute inset-0 z-0">
          <div className="relative w-[100vw] h-[100vh] bg-background overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {site.availability}
            </div>
            <h1 className="text-6xl md:text-8xl font-display tracking-tighter leading-[0.9]">
              FULL
              <br />
              STACK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                DEV_
              </span>
            </h1>
            <p className="md:text-xl text-muted-foreground max-w-md leading-relaxed">
              {site.tagline}
            </p>
            <div className="flex gap-4 pt-4 items-center">
              <Link
                href="#projects"
                className={cn("uppercase", buttonVariants({ size: "lg" }))}
              >
                View projects <ArrowRight className="size-4" />
              </Link>
              <div className="flex gap-2">
                <Link
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative h-[500px] w-full border border-border/30 bg-card/10 backdrop-blur-sm p-8">
            <div className="absolute top-0 left-0 size-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 size-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 size-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 size-4 border-b-2 border-r-2 border-primary"></div>

            <div className="h-full w-full flex flex-col justify-between font-mono text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>ROLE: {site.title.toUpperCase()}</span>
                <span>STACK: FULL</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>CPU_LOAD</span>
                  <span>75%</span>
                </div>
                <div className="h-1 w-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary w-[42%]"></div>
                </div>
                <div className="flex justify-between">
                  <span>MEM_USAGE</span>
                  <span>42%</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-bold text-foreground">
                  {String(site.activeProjectCount).padStart(2, "0")}
                </span>
                <span>ACTIVE_PROJECTS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container
        id="projects"
        component="section"
        wrapperClassName="py-24 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-4">
              SELECTED
              <br />
              WORKS
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <p className="text-muted-foreground max-w-sm text-left">
            {site.projectsIntro}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] grid-rows-[repeat(3,auto)] gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="pt-0 group bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-none overflow-hidden grid grid-rows-subgrid row-span-3 content-start items-start"
            >
              <ProjectImage src={project.image} alt={project.title} />
              <div className="grid gap-4">
                <CardHeader className="grid gap-4">
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </div>
              <CardFooter className="flex justify-between pt-0">
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                  >
                    LIVE DEMO <ExternalLink className="size-3" />
                  </Link>
                ) : (
                  <span />
                )}
                {project.repo ? (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-display flex items-center hover:text-primary transition-colors gap-2"
                  >
                    CODE <Github className="size-3" />
                  </Link>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
      <Container
        id="skills"
        component="section"
        wrapperClassName="py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-display tracking-tighter mb-6">
              TECH_STACK
            </h2>
            <p className="text-muted-foreground mb-8">
              Preferred tools for shipping full-stack products. Always learning,
              always evolving.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Code2 className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">CLEAN_CODE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Database className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">SCALABLE_DB</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">PERFORMANCE</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Terminal className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">CI_CD</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-6">
                <h3 className="text-xl font-display border-b border-primary/30 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between group"
                    >
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-[2px] w-12 bg-secondary group-hover:bg-primary transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container
        id="experience"
        className="py-24 border-t border-border max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-display mb-12 uppercase">Experience</h2>

        <div className="grid gap-8">
          {experience.map((item) => (
            <div key={`${item.company}-${item.period}`} className="group">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] items-baseline justify-between mb-2">
                <h3 className="text-2xl font-display group-hover:text-primary transition-colors text-balance">
                  {item.role} · {item.company}
                </h3>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                {item.summary}
              </p>
              <div className="h-[1px] w-full bg-border group-hover:bg-primary/50 transition-colors"></div>
            </div>
          ))}
        </div>
      </Container>
      <Container id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-2xl justify-self-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-4">INITIATE_CONTACT</h2>
            <p className="text-muted-foreground">
              Have a product in mind? Email {site.email} or send a note below.
            </p>
          </div>

          <form
            className="grid gap-6"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono text-muted-foreground"
                >
                  NAME
                </label>
                <Input id="name" name="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono text-muted-foreground"
                >
                  EMAIL
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-mono text-muted-foreground"
              >
                MESSAGE
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message..."
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              SEND TRANSMISSION
            </Button>
          </form>
        </div>
      </Container>
      <Container
        component="footer"
        className="py-8 border-t border-border bg-background text-center max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-muted-foreground">
            © 2026 {site.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-xs font-mono text-muted-foreground">
            <Link
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              GITHUB
            </Link>
            <Link
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              LINKEDIN
            </Link>
            <Link
              href={site.socials.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              SITE
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
