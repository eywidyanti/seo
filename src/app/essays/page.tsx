import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Esai",
  description: "Halaman tentang esai yang telah saya tulis.",
  openGraph: {
    title: "Tentang Esai | Eka Yulianita Widyanti",
    description: "Halaman tentang esai yang telah saya tulis.",
  },
};

export default function Essays() {
  return (
    <div className="mt-16 px-8 text-center mb-20">
      <h1 className="text-4xl font-extrabold text-zinc-800 tracking-tight">
        Esai Saya
      </h1>
      <p className="text-lg mt-4 text-zinc-600 max-w-2xl mx-auto">
        Saya menulis esai tentang berbagai topik, termasuk teknologi, pengembangan perangkat lunak, dan tren terbaru di dunia IT.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <EssayCard 
          title="Pentingnya UI/UX dalam Pengembangan Web" 
          description="Bagaimana desain yang baik dapat meningkatkan pengalaman pengguna secara signifikan."
          link="#"
        />
        <EssayCard 
          title="Mengenal Laravel dan Keunggulannya" 
          description="Sebuah panduan untuk memahami framework Laravel dan bagaimana menggunakannya dalam proyek web."
          link="#"
        />
        <EssayCard 
          title="Masa Depan Kecerdasan Buatan" 
          description="Bagaimana AI mengubah dunia teknologi dan dampaknya di masa depan."
          link="#"
        />
      </div>
    </div>
  );
}

function EssayCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 flex flex-col justify-between text-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="mt-6">
        <a
          href={link}
          className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
        >
          Selengkapnya
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
