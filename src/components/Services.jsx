import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Individual hanging tag card with scroll-linked activation state
const TagCard = ({
  number,
  title,
  text,
  className = '',
  aosDelay,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) => {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Trigger active state when scroll line passes the card's vertical position
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef?.current) return

    const containerHeight = containerRef.current.offsetHeight || 1350
    const cardTop = cardRef.current.offsetTop

    // Compare latest * containerHeight with the card's top relative to the container + 50px
    if (latest * containerHeight >= cardTop + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_35px_rgba(255,42,42,0.35)]'
          : 'bg-white shadow-xl'
      } ${className}`}
    >
      {/* Punched hole cutout at top of tag */}
      <div
        className={`w-4 h-4 rounded-full border-2 mx-auto mt-2 transition-colors duration-700 ${
          isActive ? 'border-white/50 bg-red-800' : 'border-gray-300 bg-gray-100'
        }`}
      />

      {/* Inner card panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <div>
          <span className="font-serif italic text-3xl font-black opacity-60 block mb-2">
            {number}
          </span>
          <h3 className="text-2xl font-black mb-3 tracking-tight">
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isActive ? 'text-white/90' : 'text-gray-600'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  const containerRef = useRef(null)

  // Track vertical scroll progression relative to the process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Smooth scroll progress value using a spring physics simulation
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Desktop coordinate positions and responsive tilt angles for each step card
  const cardConfigs = [
    {
      position:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      position:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      position:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      position:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  // Curving S-curve vector path connecting cards on desktop screens
  const desktopPathD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-mono uppercase tracking-widest text-[#ff2a2a] mb-4">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight">
              {skillsContent.heading}
            </h2>
            {/* Small hand-drawn arrow pointing toward process steps */}
            <svg
              className="absolute -bottom-8 right-0 w-8 h-8 text-[#ff2a2a] stroke-current stroke-2 fill-none hidden md:block pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-6 text-sm md:text-base text-gray-500 leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop 3-Layer Animated SVG Path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Faint background guide path */}
          <path
            d={desktopPathD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2: Mask animated by spring scroll progress */}
          <mask id="path-mask">
            <motion.path
              d={desktopPathD}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Solid progressive dashed line revealed by mask */}
          <path
            d={desktopPathD}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile 3-Layer Animated Vertical SVG Path */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          {/* Layer 1: Mobile faint guide path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 6"
          />

          {/* Layer 2: Mobile scroll progress mask */}
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="10"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Mobile progressive dashed path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const config = cardConfigs[index] || {
              position: 'relative',
              aosType: 'fade-up',
              aosDelay: index * 100,
            }

            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.position}
                aosType={config.aosType}
                aosDelay={config.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Handwritten End Note in Caveat cursive font */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  )
}

export default Services
