import Image from 'next/image';
import Link from 'next/link';
import { ConnectKitButton } from 'connectkit';

export default function Nav() {
  return (
    <nav>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row border-b-2">
        <Link href={'/'}>
          <div className="cursor-pointer">Outsider Trading</div>
        </Link>
        <ConnectKitButton />
      </div>
    </nav>
  );
}
