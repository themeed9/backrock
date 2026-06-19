'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FadeRise } from '@/components/motion/FadeRise';
import { StaggerChildren, StaggerChild } from '@/components/motion/StaggerChildren';

const team = [
  { name: 'Chukwuemeka Obi', role: 'Managing Director', bio: 'Two decades steering BackRock\'s strategic vision and underwriter relationships.' },
  { name: 'Adaora Nwosu', role: 'Head of Claims', bio: 'Champion of client advocacy with a 98% claims satisfaction record.' },
  { name: 'Babatunde Adeyemi', role: 'Senior Broker — Life & Health', bio: 'Specialist in life and health cover for individuals and families across Nigeria.' },
  { name: 'Ngozi Eze', role: 'Business Insurance Lead', bio: 'Expert in SME risk management, liability cover, and business continuity.' },
  { name: 'Kehinde Fashola', role: 'Client Relations Manager', bio: 'Dedicated to ensuring every client feels heard, valued, and fully protected.' },
  { name: 'Amara Diallo', role: 'Digital Operations', bio: 'Drives BackRock\'s technology roadmap and digital-first claims experience.' },
  { name: 'Femi Oladipo', role: 'Underwriting Liaison', bio: 'Bridges client needs with underwriter requirements for optimal policy terms.' },
  { name: 'Ifeoma Uche', role: 'Financial Advisor', bio: 'Holistic financial planning integrated with comprehensive insurance strategies.' },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2);
}

export function TeamGrid() {
  return (
    <section className="section" style={{ background: '#000000' }}>
      <div className="container mx-auto px-4">
        <FadeRise className="text-center mb-16">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">Our People</p>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            The people behind your protection.
          </h2>
        </FadeRise>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <StaggerChild key={member.name}>
              <motion.div
                className="bg-black-mid border border-white/10 p-6 flex flex-col items-center text-center gap-4"
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(201,168,76,0.12)', borderColor: 'rgba(201,168,76,0.3)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 flex items-center justify-center text-gold font-display font-semibold text-lg"
                  style={{ background: '#111', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  {getInitials(member.name)}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
                  <p className="text-gold text-xs mb-3">{member.role}</p>
                  <p className="text-mist text-xs leading-relaxed">{member.bio}</p>
                </div>

                <motion.a
                  href="#"
                  className="text-mist hover:text-gold transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                  whileHover={{ scale: 1.15 }}
                >
                  <ExternalLink size={16} />
                </motion.a>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
