'use client';

import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  const scrollToZone1 = () => {
    const element = document.getElementById('zone1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-content">
          <h2>Добро пожаловать в Surveyor&apos;s Assistant</h2>
          <p>
            Откройте для себя идеальный инструмент для геодезистов, работающий на основе ИИ и повышающий точность и эффективность полевых работ.
          </p>
          <button className="hero-button" onClick={scrollToZone1}>Ознакомиться</button>
        </div>
      </div>
      <div className="hero-right">
        <Image
          src="/surveyor2.webp"
          alt="Surveyor with tools"
          width={400}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
}
