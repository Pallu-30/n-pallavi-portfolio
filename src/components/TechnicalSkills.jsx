import { technicalSkills } from '../data/portfolioData'

// Individual skill badge pill with hover tint
const SkillBadge = ({ name }) => (
  <span className="inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200">
    {name}
  </span>
)

// Category card with frosted glass background, hover scale, and red glow
const SkillCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] flex flex-col"
  >
    <h3 className="text-white text-lg font-black uppercase tracking-wide border-b border-white/10 pb-3 mb-5">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill, idx) => (
        <SkillBadge key={idx} name={skill.name} />
      ))}
    </div>
  </div>
)

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred background red circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-red-500 mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            My Skillset
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50">
            A comprehensive overview of programming languages, analytical frameworks, and data platforms I work with.
          </p>
        </div>

        {/* Responsive Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
