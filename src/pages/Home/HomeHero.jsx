import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../lib/motion';
import Button from '../../components/ui/Button';

export default function HomeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Background Image with darken overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-900 opacity-60"
        style={{ backgroundImage: `url('./images/hero_bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/40 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-6"
        >
          <span className="text-sm md:text-base font-semibold uppercase tracking-wider text-orange-400 bg-orange-950/40 px-4 py-1.5 rounded-full inline-block">
            Because every life matters
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Kindness on the Streets
          </h1>
          
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-200 leading-relaxed font-light">
            We rescue, feed, vaccinate, and advocate for Ahmedabad's community animals. Join our mission to build a safe, compassionate coexistence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link to="/get-involved" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto flex items-center gap-2 py-4 px-8 text-base">
                Get Involved <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/our-work" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 bg-transparent py-4 px-8 text-base">
                See Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
