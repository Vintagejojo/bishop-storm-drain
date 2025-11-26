export default function CallToAction() {
  return (
    <section className="py-16 bg-red-600">
      <div className="container mx-auto px-4 text-center">
        {/* Mock: CTA Headline */}
        <div className="mock-component mb-6 border-white">
          <p className="text-white">CTA Headline</p>
        </div>

        {/* Mock: CTA Subtext */}
        <div className="mock-component mb-8 border-white">
          <p className="text-white">CTA Description Text</p>
        </div>

        {/* Mock: CTA Button */}
        <div className="flex justify-center">
          <div className="mock-component bg-white border-gray-600 min-w-[250px]">
            <p>Get a Quote Button</p>
          </div>
        </div>
      </div>
    </section>
  );
}