import { Home, Github, AlertTriangle, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onGoHome: () => void;
}

const NotFoundPage = ({ onGoHome }: NotFoundPageProps) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0a1628] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-500/10 dark:bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Giant Number */}
        <div className="relative mb-6 select-none">
          <div className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#1e3a5f] via-[#2d5a87] to-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400 opacity-20 dark:opacity-30 absolute inset-0 flex items-center justify-center blur-sm">
            404
          </div>
          <div className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#1e3a5f] via-[#2d5a87] to-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400 relative">
            404
          </div>
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 mb-6 shadow-lg">
          <AlertTriangle className="w-10 h-10 text-red-500 dark:text-red-400" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Halaman Tidak Ditemukan
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-md mx-auto">
          Oops! Halaman yang kamu cari tidak ada atau telah dipindahkan. 
          Coba kembali ke halaman utama.
        </p>

        {/* Code snippet decoration */}
        <div className="inline-block bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3 mb-10 font-mono text-sm text-left shadow-md">
          <span className="text-slate-400 dark:text-slate-500 select-none">$ </span>
          <span className="text-red-500 dark:text-red-400">Error 404: </span>
          <span className="text-slate-700 dark:text-slate-300">Page not found</span>
          <span className="inline-block w-2 h-4 bg-slate-400 dark:bg-slate-500 ml-1 animate-pulse align-middle" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGoHome}
            id="btn-go-home"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1e3a5f] dark:bg-blue-600 hover:bg-[#2d5a87] dark:hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-visit-github"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <Github className="w-4 h-4" />
            Kunjungi GitHub
          </a>
        </div>

        {/* Back link */}
        <button
          onClick={onGoHome}
          className="inline-flex items-center gap-1.5 mt-8 text-sm text-slate-500 dark:text-slate-400 hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Atau klik di sini untuk kembali</span>
        </button>
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,95,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,95,1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default NotFoundPage;
