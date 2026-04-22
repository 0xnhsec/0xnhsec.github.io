import { Github, ExternalLink, Code2, Briefcase, GraduationCap, User, BookOpen, HelpCircle } from 'lucide-react';
import { projects, getCategoryColor, getCategoryLabel } from '../data/projects';
import type { Project } from '../data/projects';

const CategoryIcon = ({ category }: { category: Project['category'] }) => {
  switch (category) {
    case 'School':
      return <BookOpen className="w-4 h-4" />;
    case 'College':
      return <GraduationCap className="w-4 h-4" />;
    case 'Work':
      return <Briefcase className="w-4 h-4" />;
    case 'Personal':
      return <User className="w-4 h-4" />;
    case 'Unknown':
      return <HelpCircle className="w-4 h-4" />;
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:border-[#1e3a5f]/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
            <CategoryIcon category={project.category} />
            {getCategoryLabel(project.category)}
          </span>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#1e3a5f] dark:group-hover:text-blue-400 transition-colors" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-[#1e3a5f] dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
            >
              <Code2 className="w-3 h-3 mr-1" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700/50 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">View on GitHub</span>
        <Github className="w-5 h-5 text-slate-400 group-hover:text-[#1e3a5f] dark:group-hover:text-blue-400 transition-colors" />
      </div>
    </a>
  );
};

const Hero = () => {
  const stats = [
    { label: 'Total Project', value: projects.length },
    { label: 'Tugas Sekolah', value: projects.filter(p => p.category === 'School').length },
    { label: 'Project Kuliah', value: projects.filter(p => p.category === 'College').length },
    { label: 'Project Pribadi', value: projects.filter(p => p.category === 'Personal').length },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#2d5a87] dark:from-[#050a12] dark:via-[#0a1628] dark:to-[#0f2744] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium">Project Portfolio</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Koleksi Project
            <span className="block text-blue-200 mt-2">Saya</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Berbagai project yang telah saya kerjakan mulai dari tugas sekolah, 
            kuliah, pekerjaan, hingga project pribadi. Semua tersedia di GitHub.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-blue-200/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z"
            fill="currentColor"
            className="text-slate-100 dark:text-[#0a0f1a]"
          />
        </svg>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Daftar Project
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Klik pada card project untuk melihat detail lengkap di GitHub
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Add More Hint */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
            <Code2 className="w-4 h-4" />
            <span className="text-sm">
              Untuk menambah project baru, edit file <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-800 dark:text-slate-200 font-mono text-xs">src/data/projects.ts</code>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f2744] dark:bg-[#050a12] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Portfolio Project</h3>
            <p className="text-blue-200/70 text-sm">
              Koleksi project dan pengalaman pengembangan software
            </p>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
          >
            <Github className="w-5 h-5" />
            Kunjungi GitHub
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-blue-200/50 text-sm">
            © {new Date().getFullYear()} Portfolio Project. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0a0f1a]">
      <Hero />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
