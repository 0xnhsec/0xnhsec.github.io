export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'School' | 'College' | 'Work' | 'Personal' | 'Unknown';
  githubUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Aplikasi Peminjaman Buku Digital",
    description: "Aplikasi Peminjaman Buku Digital Bojonegoro. Aplikasi ini kami buat untuk menggantikan sistem peminjaman buku manual di perpustakaan sekolah yang masih pakai buku besar rentan salah dan lambat.",
    category: "School",
    githubUrl: "https://github.com/0xnhsec/APLIKASI-PEMINJAMAN-BUKU-DIGITAL-BOJONEGORO.git",
    techStack: ["Netbeans", "MySQL", "Java", "XAMPP"]
  },
  {
    id: 2,
    title: "Unknown",
    description: "Unknown",
    category: "Unknown",
    githubUrl: "https://github.com/username/Unknown.git",
    techStack: ["Unknown"]
  },
  {
    id: 3,
    title: "Unknown",
    description: "Unknown",
    category: "Unknown",
    githubUrl: "https://github.com/username/Unknown.git",
    techStack: ["Unknown"]
  },
  {
    id: 4,
    title: "Unknown",
    description: "Unknown",
    category: "Unknown",
    githubUrl: "https://github.com/username/Unknown.git",
    techStack: ["Unknown"]
  }
];

export const getCategoryColor = (category: Project['category']) => {
  const colors: Record<Project['category'], string> = {
    School: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700',
    College: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    Work: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700',
    Personal: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
    Unknown: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700',
  };
  return colors[category] ?? colors['Unknown'];
};

export const getCategoryLabel = (category: Project['category']) => {
  const labels: Record<Project['category'], string> = {
    School: 'Tugas Sekolah',
    College: 'Kuliah',
    Work: 'Pekerjaan',
    Personal: 'Pribadi',
    Unknown: 'Tidak Diketahui',
  };
  return labels[category] ?? 'Tidak Diketahui';
};
