import { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Briefcase, GraduationCap, User, BookOpen, Moon, Sun, HelpCircle } from 'lucide-react';
import { projects, getCategoryColor, getCategoryLabel } from './data/projects';
import type { Project } from './data/projects';
import NotFoundPage from './components/NotFoundPage';

// ─── Theme Toggle ───────────────────────────────────────────────────────────

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-theme');
      if (stored === 'dark' || stored === 'light') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
};

// ─── Category Icon ────────────────────────────────────────────────────────────

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
    default:
      return <HelpCircle className="w-4 h-4" />;
  }
};

// ─── Theme Toggle Button ──────────────────────────────────────────────────────

const ThemeToggle = ({ theme, toggle }: { theme: 'light' | 'dark'; toggle: () => void }) => (
  <button
    id="btn-theme-toggle"
    onClick={toggle}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    className="
      fixed top-5 right-5 z-50
      w-11 h-11 rounded-full
      flex items-center justify-center
      bg-white/20 dark:bg-slate-800/70
      backdrop-blur-md
      border border-white/30 dark:border-slate-600/50
      text-white dark:text-yellow-300
      shadow-lg hover:shadow-xl
      transition-all duration-300 hover:scale-110 active:scale-95
      group
    "
  >
    {theme === 'dark' ? (
      <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
    ) : (
      <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
    )}
  </button>
);

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => {
  const isUnknown = project.title === 'Unknown' && project.description === 'Unknown';

  return (
    <a
      href={isUnknown ? '#' : project.githubUrl}
      target={isUnknown ? undefined : '_blank'}
      rel="noopener noreferrer"
      onClick={isUnknown ? (e) => e.preventDefault() : undefined}
      className={`
        group block rounded-xl border overflow-hidden
        transition-all duration-300 hover:-translate-y-1
        ${isUnknown
          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 opacity-70 cursor-not-allowed hover:translate-y-0'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 hover:border-[#1e3a5f]/30 dark:hover:border-blue-500/40'
        }
      `}
    >
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}>
            <CategoryIcon category={project.category} />
            {getCategoryLabel(project.category)}
          </span>
          {isUnknown ? (
            <span className="text-xs text-slate-400 dark:text-slate-500 italic">Segera hadir</span>
          ) : (
            <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-[#1e3a5f] dark:group-hover:text-blue-400 transition-colors" />
          )}
        </div>

        {/* Title */}
        <h3 className={`text-lg font-semibold mb-2 line-clamp-2 transition-colors ${
          isUnknown
            ? 'text-slate-400 dark:text-slate-500 italic'
            : 'text-slate-900 dark:text-slate-100 group-hover:text-[#1e3a5f] dark:group-hover:text-blue-400'
        }`}>
          {isUnknown ? 'Project Tidak Diketahui' : project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
          isUnknown ? 'text-slate-400 dark:text-slate-500 italic' : 'text-slate-600 dark:text-slate-400'
        }`}>
          {isUnknown ? 'Detail project ini belum tersedia.' : project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.filter(t => t !== 'Unknown').map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-medium"
            >
              <Code2 className="w-3 h-3 mr-1" />
              {tech}
            </span>
          ))}
          {project.techStack.every(t => t === 'Unknown') && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-400 dark:text-slate-500 text-xs italic">
              Stack belum diketahui
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className={`px-6 py-4 border-t flex items-center justify-between ${
        isUnknown
          ? 'bg-slate-50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-700/30'
          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50'
      }`}>
        <span className={`text-xs font-medium ${isUnknown ? 'text-slate-400 dark:text-slate-500' : 'text-slate-500 dark:text-slate-400'}`}>
          {isUnknown ? 'Tidak tersedia' : 'Lihat di GitHub'}
        </span>
        <Github className={`w-5 h-5 ${isUnknown ? 'text-slate-300 dark:text-slate-600' : 'text-slate-400 dark:text-slate-500 group-hover:text-[#1e3a5f] dark:group-hover:text-blue-400'} transition-colors`} />
      </div>
    </a>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = ({ theme, toggle }: { theme: 'light' | 'dark'; toggle: () => void }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f2744] via-[#1e3a5f] to-[#2d5a87] dark:from-[#060e1c] dark:via-[#0d1d36] dark:to-[#1a3359] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Theme Toggle (inside hero for visibility on hero bg) */}
      <ThemeToggle theme={theme} toggle={toggle} />

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
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{projects.length}</div>
              <div className="text-sm text-blue-200/70 mt-1">Total Project</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {projects.filter(p => p.category === 'School').length}
              </div>
              <div className="text-sm text-blue-200/70 mt-1">Tugas Sekolah</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {projects.filter(p => p.category === 'College').length}
              </div>
              <div className="text-sm text-blue-200/70 mt-1">Project Kuliah</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">
                {projects.filter(p => p.category === 'Personal').length}
              </div>
              <div className="text-sm text-blue-200/70 mt-1">Project Pribadi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z"
            className="fill-slate-100 dark:fill-[#0a1628]"
          />
        </svg>
      </div>
    </section>
  );
};

// ─── Projects Section ─────────────────────────────────────────────────────────

const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-[#0a1628] transition-colors duration-300">
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
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 shadow-sm">
            <Code2 className="w-4 h-4" />
            <span className="text-sm">
              Untuk menambah project baru, edit file{' '}
              <code className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded text-slate-800 dark:text-slate-200 font-mono text-xs">
                src/data/projects.ts
              </code>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <footer className="bg-[#0f2744] dark:bg-[#060e1c] text-white py-12 transition-colors duration-300">
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
            © {new Date().getFullYear()} Portfolio Project. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────

type Page = 'home' | '404';

function App() {
  const { theme, toggle } = useTheme();
  const [page, setPage] = useState<Page>('home');

  // Demo: simulate 404 via a button (in production you'd check the URL/route)
  // For GitHub Pages SPA, we handle unknown routes via the 404.html fallback.
  // Here we expose a way to navigate to 404 for demonstration.
  useEffect(() => {
    const path = window.location.hash;
    if (path && path !== '#/' && path !== '#') {
      // If hash routing used, handle unknown hashes
    }
  }, []);

  if (page === '404') {
    return <NotFoundPage onGoHome={() => setPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0a1628] transition-colors duration-300">
      <Hero theme={theme} toggle={toggle} />
      <ProjectsSection />
      <Footer />

      {/* Demo 404 trigger — remove in production */}
      <button
        id="btn-demo-404"
        onClick={() => setPage('404')}
        title="Demo halaman 404"
        className="
          fixed bottom-5 right-5 z-50
          text-xs px-3 py-1.5 rounded-lg
          bg-red-100 dark:bg-red-900/30
          text-red-700 dark:text-red-400
          border border-red-200 dark:border-red-700
          hover:bg-red-200 dark:hover:bg-red-900/50
          transition-all duration-200
          opacity-60 hover:opacity-100
          shadow-md
        "
      >
        Demo 404
      </button>
    </div>
  );
}

export default App;
