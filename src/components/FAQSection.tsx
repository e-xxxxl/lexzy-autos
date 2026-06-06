import { HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    order: '01',
    question: 'Do you sell tokunbo cars in Ibadan?',
    answer: 'Yes! We have a regularly updated selection of clean, verified tokunbo cars in Ibadan at honest prices. Visit us or chat us on WhatsApp to see what\'s available.',
  },
  {
    order: '02',
    question: 'Can I buy a car from Lexzy Autos if I\'m in Lagos?',
    answer: 'Absolutely. We operate in both Ibadan and Lagos. Our team can arrange viewings, paperwork, and delivery across both cities.',
  },
  {
    order: '03',
    question: 'How do I know the cars are genuine and in good condition?',
    answer: 'Every vehicle in our collection — new, fairly used, or exotic — goes through our thorough inspection process before it\'s listed. We stand behind every car we sell.',
  },
  {
    order: '04',
    question: 'Do you offer any financing or payment plans?',
    answer: 'Reach out to us directly and we\'ll discuss the best options for your situation. We\'re here to make your car ownership journey as smooth as possible.',
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 sm:py-32 w-full bg-obsidian border-b border-gold/5"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div id="faq-header" className="text-center mb-16 max-w-xl mx-auto">
          <span
            id="faq-sublabel"
            className="font-inter text-gold text-xs font-light tracking-[0.45em] uppercase mb-4 block select-none"
          >
            RESOLVED / INFORMATION
          </span>
          <h2
            id="faq-heading"
            className="font-cormorant text-cream text-3xl sm:text-4xl md:text-5xl font-light tracking-wide"
          >
            Questions? We've Got Answers.
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        {/* Native HTML5 Accordions Layer */}
        <div id="faq-accordions-container" className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <details
              id={`faq-item-${item.order}`}
              key={item.order}
              className="group bg-surface border border-gold/10 rounded-sm transition-all duration-300 open:border-gold/30"
            >
              <summary
                id={`faq-summary-${item.order}`}
                className="flex items-center justify-between p-6 sm:p-8 cursor-pointer list-none outline-none select-none text-left"
              >
                <div className="flex items-center space-x-4 sm:space-x-6">
                  {/* Decorative numeric sequence */}
                  <span className="font-mono text-xs text-gold/60 font-light select-none">
                    {item.order}
                  </span>
                  <h3 className="font-cormorant text-cream text-lg sm:text-xl font-light tracking-wide group-hover:text-gold transition-colors duration-300">
                    {item.question}
                  </h3>
                </div>

                {/* Custom toggle arrow with rotation */}
                <div className="text-gold flex-shrink-0 ml-4">
                  <HelpCircle
                    id={`faq-icon-${item.order}`}
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-open:rotate-180 group-open:text-gold-light"
                  />
                </div>
              </summary>

              {/* Collapsed Panel Content */}
              <div
                id={`faq-panel-${item.order}`}
                className="px-6 pb-8 sm:px-8 sm:pb-10 font-inter text-muted text-sm sm:text-base font-light leading-relaxed border-t border-gold/5 pt-6 text-left"
              >
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Dynamic CTA link trigger below FAQ */}
        <div id="faq-footer-advocacy" className="text-center mt-12 select-none">
          <p className="font-inter text-xs text-muted font-light tracking-wide">
            Still have questions? Chat directly with us on{' '}
            <a
              href="https://wa.me/+2347041476698"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light underline decoration-gold/20 hover:decoration-gold transition-colors duration-300"
            >
              WhatsApp
            </a>{' '}
            for an instantaneous response.
          </p>
        </div>
      </div>
    </section>
  );
}
