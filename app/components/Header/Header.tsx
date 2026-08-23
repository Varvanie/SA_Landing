import Image from 'next/image';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Surveyor&apos;s Assistant</h1>
      </div>
      <div className="header-sponsors">
        
        <Image src="/2_FASIE_v2.png" alt="FASIE sponsor" width={200} height={50}/>
        <Image src="/3_SFEDU.png" alt="SFEDU sponsor" width={100} height={50}/>
        <Image src="/1_SA.png" alt="Surveyor's Assistant logo" width={100} height={50} />
      </div>
    </header>
  );
}
