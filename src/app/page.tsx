import { Code, Palette } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { JSX } from "react";

export const metadata: Metadata = {
  title: "Tentang Saya | Eka Yulianita Widyanti",
  description: "Halaman tentang saya sebagai mahasiswa Teknik Informatika.",
  openGraph: {
    title: "Tentang Saya | Eka Yulianita Widyanti",
    images: ["https://example.com/default-image.jpg"],
    url: "https://example.com",
  },
};

export default function Home({ metadata }: any) {
  return (
    <div className="text-center">
      <section className="mt-16 px-8">
        <h2 className="text-4xl font-extrabold text-zinc-800 tracking-tight">Tentang Saya</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan
          dalam pengembangan aplikasi berbasis web, desain UI/UX, dan database
          management.
        </p>
        <Image
          src="/images/foto.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="mx-auto mt-6 rounded-full shadow-lg"
        />
        <h3 className="text-2xl font-bold text-teal-500 mt-4">
          Eka Yulianita Widyanti
        </h3>
        <p className="text-gray-500">Laravel • React • MySQL</p>
      </section>

      <section className="mt-16 bg-gray-100 py-16">
        <h2 className="text-3xl font-semibold text-center">
          Keahlian & Layanan
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
          Saya memiliki pengalaman dalam pengembangan aplikasi web dan desain
          grafis.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard
            title="Web Development"
            description="Membangun aplikasi web menggunakan Laravel & React."
            icon={<Code size={32} className="text-teal-500 mx-auto" />}
          />
          <ServiceCard
            title="UI/UX Design"
            description="Merancang antarmuka yang menarik dan user-friendly."
            icon={<Palette size={32} className="text-teal-500 mx-auto" />}
          />
        </div>
      </section>
    </div>
  );
}

// Component untuk Service Card
function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 mt-3">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
