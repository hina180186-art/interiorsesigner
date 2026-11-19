export default function Marquee() {
  const words = [
    'Residential Design',
    '✦',
    'Space Planning',
    '✦',
    'Material Curation',
    '✦',
    'Custom Furniture',
    '✦',
    'Art Consultation',
    '✦',
    'Renovation',
    '✦',
    'Styling',
    '✦',
  ];

  return (
    <div className="bg-cream py-6 overflow-hidden border-y border-charcoal/5">
      <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`mx-6 md:mx-10 font-serif text-lg md:text-xl ${
              word === '✦' ? 'text-sage text-sm' : 'text-charcoal/40 font-light italic'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
