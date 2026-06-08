export default function Background({ children }) {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      {/* grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.07]">
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Background />
      <Navbar  />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

