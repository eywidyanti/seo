type FooterLinkProps = {
  text: string;
  url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
  return (
    <a className="transition hover:text-teal-500" href={url}>
      {text}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 . Teknik Informatika.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="hover:underline me-4 md:me-6">
            <FooterLink text="Tentang Saya" url="/" />
          </li>
          <li className="hover:underline me-4 md:me-6">
            <FooterLink text="Proyek" url="/projects" />
          </li>
          <li>
            <FooterLink text="Esai" url="/essays" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
