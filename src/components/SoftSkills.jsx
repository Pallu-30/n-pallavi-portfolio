import { softSkillsList } from '../data/portfolioData'

// Individual soft skill card with hover scale and emoji accent
const SoftSkillCard = ({ skill, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,42,42,0.15)] hover:border-red-300"
  >
    {/* Emoji icon inside a rounded square */}
    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110 shadow-xs">
      <span>{skill.icon}</span>
    </div>

    {/* Uppercase Skill Name */}
    <h3 className="text-base font-black uppercase text-gray-900 mb-2 group-hover:text-[#ff2a2a] transition-colors">
      {skill.name}
    </h3>

    {/* Description */}
    <p className="text-xs text-gray-500 leading-relaxed">
      {skill.desc}
    </p>
  </div>
)

const SoftSkills = () => {
  return (
    <section
      id="soft-skills"
      className="bg-white bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-mono uppercase tracking-widest text-[#ff2a2a] mb-4">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tight">
            Professional Soft Skills
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            Interpersonal strengths and analytical mindsets that empower effective teamwork and impactful outcomes.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
