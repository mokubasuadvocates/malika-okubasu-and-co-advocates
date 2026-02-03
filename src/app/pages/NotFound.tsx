import Link from 'next/link';
import { Button } from '../components/Button';

export function NotFound() {
  return (
    <div className="lg:pt-0 pt-[72px] min-h-[60vh] flex items-center justify-center">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h1 className="text-6xl lg:text-8xl font-bold text-[#0B1E3A] mb-4">
          404
        </h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-[#5B6676] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="solid">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
