import { projects, type Project } from "@/content";

/**
 * Project card
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="w-72 shrink-0 snap-start">
      <article className="flex h-104 flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-muted/40">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-[60%] w-full rounded-t-xl object-cover"
          />
        ) : (
          <div className="grid h-[60%] w-full place-items-center rounded-t-xl bg-linear-to-br from-accent/25 to-bg">
            <span className="font-mono text-4xl text-fg/30">
              {project.name.charAt(0)}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-serif text-lg font-medium text-fg">
            {project.name}
          </h3>
          <p className="mt-0.5 font-serif text-xs text-muted/60">
            {project.tags.join(" · ")}
          </p>
          <p className="mt-2 line-clamp-5 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto flex gap-4 pt-4 font-serif text-sm">
            {project.site && (
              <a
                href={project.site}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                site ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                github ↗
              </a>
            )}
            {project.download && (
              <a
                href={project.download}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                download ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

export function Projects() {
  return (
    <ul className="hscroll -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ul>
  );
}
