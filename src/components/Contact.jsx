import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Scroll parallax for the giant background word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Ignore submit if currently sending
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form?.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form?.querySelector('#lastName')?.value?.trim() || ''
    const email = form?.querySelector('#email')?.value?.trim() || ''
    const message = form?.querySelector('#message')?.value?.trim() || ''

    // Validation: firstName, email, or message must not be empty
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: direct mailto client
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      )
      setStatus('success')
      form?.reset()
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    } else {
      // EmailJS configuration detected
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        setStatus('success')
        formRef.current?.reset()
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
      setTimeout(() => {
        setStatus('idle')
      }, 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900 justify-end"
    >
      {/* Behind: Giant Contact parallax typography */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full pointer-events-none z-0"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red contact card aligned to the right */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] ml-auto p-8 md:p-16 relative z-10 text-white"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between gap-4 mb-12">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white text-white text-xs md:text-sm font-medium tracking-wide hover:bg-white hover:text-[#ff2a2a] transition-all duration-300"
          >
            DM on Instagram
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          {/* Two-column layout on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Underline-only input fields */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Underline-only textarea */}
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white focus:outline-none resize-none text-white transition-colors"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Note, Urgent Mailto, Submit Button */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="permission"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-white/40 bg-transparent text-black accent-black focus:ring-0 cursor-pointer"
              />
              <label
                htmlFor="permission"
                className="text-xs md:text-sm text-white/90 select-none cursor-pointer leading-relaxed"
              >
                I agree to have my details processed to get in touch regarding opportunities or collaborations.
              </label>
            </div>

            {/* Info and Submit Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
              <div className="flex flex-col gap-1 text-xs md:text-sm text-white/80">
                <p>
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <p>
                  For urgent inquiries, email directly:{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    {personalInfo.emails.primary}
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <div className="shrink-0">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={
                    status === 'sending'
                      ? 'inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-white/20 border border-white/40 text-white/70 cursor-not-allowed'
                      : status === 'success'
                        ? 'inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-emerald-600 border border-emerald-500 text-white cursor-default'
                        : status === 'error'
                          ? 'inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-red-950 border border-red-800 text-white cursor-pointer'
                          : 'group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base border border-white text-white hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 cursor-pointer'
                  }
                >
                  {status === 'sending' && (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  )}

                  {status === 'success' && <span>Sent Successfully ✓</span>}

                  {status === 'error' && <span>Failed — Try Again</span>}

                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
