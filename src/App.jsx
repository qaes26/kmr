import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Heart, Music, Play, Pause, Image as ImageIcon, Stars } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const heartAnimation = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const App = () => {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube player state
  const handleStart = () => {
    setStarted(true);
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 overflow-hidden font-sans selection:bg-rose-200">

      {/* Floating Circular Video Player */}
      {/* Simple Visible Video Player for reliability */}
      {/* Persistent Player - Always mounted to ensure loading */}
      {/* Persistent Player - robust logic */}
      {/* Persistent Player - Always rendered, transparency 1 to bypass browser checks */}
      {/* Reliable Music Player */}
      {/* Reliable Music Player - Standard Rectangle */}
      <motion.div
        animate={{
          x: started ? 0 : 0,
          opacity: started ? 1 : 0,
          scale: started ? 1 : 0.8
        }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto"
      >
        {/* Helper text */}
        {!isPlaying && started && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-rose-gold whitespace-nowrap mb-1 border border-rose-100"
          >
            🎥 اضغطي هنا لتشغيل الفيديو
          </motion.div>
        )}

        <div className="w-64 h-36 rounded-xl overflow-hidden border-4 border-rose-gold shadow-2xl bg-black relative z-50">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/X-UvAbhFM3I?autoplay=1&loop=1&playlist=X-UvAbhFM3I&controls=1&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>

      <AnimatePresence>
        {!started ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col items-center justify-center relative"
          >
            {/* ... floating hearts background ... */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-soft-pink opacity-50"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: Math.random() * 0.5 + 0.5,
                  }}
                  animate={{
                    y: [null, Math.random() * -100],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Heart fill="currentColor" size={Math.random() * 30 + 10} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center z-10 flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-gold shadow-2xl mb-8">
                <img src="/rahaf.png" alt="Rahaf" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-rose-gold mb-8 drop-shadow-sm">
                مرحباً بجميلتي رهف
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="bg-rose-gold text-white px-8 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
              >
                <Heart fill="white" size={24} />
                اضغطي هنا
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div

            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="pb-20"
          >
            {/* Music Player Control removed - merged into floating video above */}

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-pink-50 to-white pt-20">
              <motion.div
                variants={heartAnimation}
                animate="animate"
                className="absolute top-20 right-20 text-rose-gold opacity-20 hidden md:block"
              >
                <Heart size={100} fill="currentColor" />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-center px-4"
              >
                <h2 className="text-2xl md:text-3xl text-gray-500 mb-4 font-light">إلى أغلى ما أملك</h2>
                <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-gold to-pink-400 mb-6 py-2">
                  جميلتي رهف
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  أنتِ أجمل ما في عامي، وأجمل صدفة في حياتي
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10"
              >
                <span className="text-rose-gold text-sm tracking-widest">تصفحي للأسفل</span>
              </motion.div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 md:px-20 bg-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl text-center text-rose-gold font-bold mb-16 flex items-center justify-center gap-3"
              >
                <Stars size={32} />
                ذكرياتنا الجميلة
                <Stars size={32} />
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  { src: "/rahaf.png", id: 1 },
                  { src: "/rahaf_baby.png", id: 2 },
                  { src: "/rahaf_2.png", id: 3 }
                ].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -10 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-300"
                  >
                    <div className="w-full h-full flex items-center justify-center bg-rose-50 text-rose-200">
                      <img src={item.src} className="w-full h-full object-cover" alt="Memory" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Message Section */}
            <section className="py-20 bg-rose-50">
              <div className="max-w-4xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl relative"
                >
                  <Heart className="absolute -top-6 -right-6 text-rose-gold fill-rose-gold" size={64} />

                  <p className="text-2xl md:text-3xl leading-loose text-center font-handwriting text-gray-700">
                    " كل عام وأنتِ النور الذي يضيء حياتي. وجودك بجانبي هو أعظم هدية، وضحكتك هي موسيقاي المفضلة. أحبك يا رهف أكثر مما تتخيلين. "
                  </p>

                  <div className="mt-12 text-center">
                    <span className="text-rose-gold font-bold text-xl block">- حبيبك</span>
                  </div>
                </motion.div>
              </div>
            </section>

            <footer className="text-center py-10 text-gray-400 text-sm">
              Made with ❤️ for Rahaf
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
