export default function GoogleMap() {
  const address = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States";
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section>
      <div className="w-full h-108">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={embedSrc}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}