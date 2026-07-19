import { githubProjects, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GitHubProjectPill } from "@/components/ui/GithubProjectPill";
import { FiExternalLink } from "react-icons/fi";

export function Projects() {
  return (
    <SectionShell id="projects" label="Portfolio" title="Selected projects" variant="light" titleClassName="text-[1.95rem] md:text-[3.3rem]">
      <div className="space-y-12">
        {/* 2x2 balanced grid for featured projects */}
        <div className="grid w-full max-w-5xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.05}>
              <div className="w-full aspect-square max-h-[420px] sm:max-h-[450px]">
                <ProjectCard {...project} className="h-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div
          className="rounded-[2.5rem] p-6 shadow-sm sm:p-8 border"
          style={{
            background: 'rgba(109,31,59,0.12)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold">More Projects</h3>
              <p className="mt-3 max-w-2xl text-sm text-grey">
                A compact list of additional GitHub work so visitors can explore more without distracting from the featured projects.
              </p>
            </div>
            <a
              href="https://github.com/MaryamNaeemDevv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-burgundy transition hover:underline"
            >
              View full GitHub profile
              <FiExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {githubProjects.map((repo) => (
              <GitHubProjectPill key={repo.name} {...repo} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
