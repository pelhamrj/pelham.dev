import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex h-full flex-col items-center justify-center md:flex-row">
            <Image src="/profile.png" alt="profile" width={350} height={350} />
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-5xl font-bold">Ryan Pelham</h1>
                <h3 className="text-xl">Senior Software Engineer</h3>
                <h6 className="flex gap-1 text-gray-400">
                    <MapPin className="text-emerald-600" />
                    Tampa Bay Area
                </h6>
            </div>
        </div>
    );
}
