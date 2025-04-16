import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyek Saya | Eka Yulianita Widyanti",
  description: "Kumpulan proyek aplikasi yang telah dikembangkan oleh Eka Yulianita Widyanti.",
  openGraph: {
    title: "Proyek Saya | Eka Yulianita Widyanti",
    description: "Lihat koleksi proyek aplikasi yang menarik dan telah dipublikasikan.",
    images: ["https://example.com/default-image.jpg"],
    url: "https://example.com/projects",
    type: "website",
  },
};

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: string;
};

const ProjectItem = ({ name, url, urlDisplay, imageSrc }: ProjectItemProps) => (
  <li>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover group-hover:brightness-95 transition duration-300"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-blue-600 transition">
          {name}
        </h3>
        <div className="mt-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {urlDisplay}
          </span>
        </div>
      </div>
    </a>
  </li>
);

export default function Projects() {
  const projects = [
    {
      name: "Game",
      url: "https://example.com",
      urlDisplay: "App Store",
      imageSrc: "/images/project1.jpg",
    },
    {
      name: "Talk",
      url: "https://example.com",
      urlDisplay: "Google Play",
      imageSrc: "/images/project2.jpg",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 py-5">
      <header className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl font-extrabold text-zinc-900">Proyek Saya</h1>
        <p className="mt-4 text-zinc-600 text-base leading-relaxed">
          Beberapa aplikasi dan proyek yang pernah saya kembangkan, tersedia di berbagai platform.
        </p>
      </header>

      <section className="w-full max-w-7xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </ul>
      </section>
    </main>
  );
}
