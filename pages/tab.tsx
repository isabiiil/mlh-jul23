import { useEffect, useState } from 'react';
import Image from 'next/image'

export default function Tab({ title, winner, company }: { title?: string; winner: boolean; company?: string}) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center rounded-t-full bg-red-300 w-1/6">
      {domLoaded && (
        <div>
          {winner && <span className='text-xl'>🏆</span>}
          {(!company) ? <></> : 
            <div className="py-auto relative">
              <Image src={company} alt="company" layout='fill' objectFit='contain'/>
            </div>}
          <span className="text-s pl-2">{title}</span>
        </div>
      )}
    </div>
  );
}