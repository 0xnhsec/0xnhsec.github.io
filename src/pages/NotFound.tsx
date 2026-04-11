import { Link } from 'react-router-dom';
import { Home, AlertTriangle, Github } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0a0f1a] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-[#1e3a5f] dark:text-blue-400 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1e3a5f] dark:bg-blue-600 text-white font-medium hover:bg-[#152a45] dark:hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            Kunjungi GitHub
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  );
}
