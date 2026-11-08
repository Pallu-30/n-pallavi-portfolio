import { internshipsList } from '../data/portfolioData'

// Individual internship / experience card
const InternshipCard = ({ intern, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
  >
    <div>
      {/* Top Row: Duration and Mini Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
          {intern.duration}
        </span>
        <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest">
          Internship
        </span>
      </div>

      {/* Role and Organization */}
      <h3 className="text-2xl font-black text-white leading-tight">
        {intern.role}
      </h3>
      <p className="uppercase text-red-200 text-sm font-bold tracking-wider mt-1 mb-6">
        {intern.organization}
      </p>

      {/* Skills Gained List */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
          Skills Gained:
        </p>
        <ul className="space-y-1.5 text-sm text-white/90 list-disc list-inside">
          {intern.skills.map((skill, sIdx) => (
            <li key={sIdx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies Row */}
    <div className="pt-4 border-t border-white/10 mt-auto">
      <p className="text-xs uppercase font-mono text-white/40 tracking-wider mb-2">
        Technologies:
      </p>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t, tIdx) => (
          <span
            key={tIdx}
            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 font-mono text-xs"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const Internships = () => {
  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Inverted torn-paper SVG divider along top edge flowing from previous dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#0a0a0a"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
          />
        </svg>
      </div>

      {/* Decorative pulsing black star (bottom-left) */}
      <svg
        className="absolute bottom-12 left-8 w-10 h-10 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tight">
            Work Experience
          </h2>
          <p className="text-red-100 mt-4 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Practical training, technical internships, and real-world project contributions.
          </p>
        </div>

        {/* Responsive Internship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
