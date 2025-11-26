import Image from "next/image";
import truckImage from "../../public/images/truck_bishop.webp";



export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-[80vh] bg-gray-900 text-white">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
  src={truckImage}
  alt="Work truck background"
  fill
  className="object-cover"
  priority
/>

      </div>

      <div className="p-8 md:p-16">
        <h1 className="text-5xl font-bold mb-4 border-dotted border-2 border-slate-600 p-4">
          Bishop&apos;s Storm Drain
        </h1>
        <p className="text-xl mb-6 text-gray-300 border-dotted border-2 border-slate-700 p-2">
          [ Tagline or short mission statement goes here ]
        </p>

        <div className="flex justify-center gap-4">
          <a href="tel:+16019325838" className="btn btn-primary">
            Call Us
          </a>
          <button className="btn btn-outline border-white text-white">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
