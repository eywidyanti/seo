import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Proyek Saya',
  description: 'Halaman Proyek saya.',
  openGraph: {
    title: 'Proyek Saya | Eka Yulianita Widyanti',
    description: 'Halaman Proyek saya.',
    images: ["https://example.com/default-image.jpg"],
    url: "https://example.com",
  },
};

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: string;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
  return (
    <li>
      <a href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={imageSrc} alt={name} width={400} height={300} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Projects({metadata}: any) {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
        <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>
      </header>

      <div className="mt-16">
        <h2 className="text-2xl">Aplikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
          <ProjectItem
            name="Aplikasi 1"
            url="https://example.com"
            urlDisplay="App Store"
            imageSrc="/images/project1.jpg"
          />
          <ProjectItem
            name="Aplikasi 2"
            url="https://example.com"
            urlDisplay="Google Play"
            imageSrc="/images/project2.jpg"
          />
        </ul>
      </div>
    </div>
  );
}
