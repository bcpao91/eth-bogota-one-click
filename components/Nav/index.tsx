import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Link href={'/'}>
          <div className="">Outsider Trading</div>
        </Link>
      </div>
    </nav>
  );
}
