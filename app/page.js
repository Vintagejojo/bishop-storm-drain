

export default function Home() {
  return (
    <main className="text-white flex items-center justify-center min-h-screen px-4">
      <div className="text-center max-w-md animate-fadeIn">
        <h1 className="text-4xl font-bold mb-2">
          Bishop&apos;s Storm Drain
        </h1>
        <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full"></div>

        <p className="text-lg mb-6 text-gray-300">
          We’re getting ready to launch something powerful. Stay tuned!
        </p>

        <div className="flex justify-center gap-8 mt-6 text-gray-300">
          <div className="text-center">
            <span className="text-3xl">💧</span>
            <p className="text-sm mt-2">Drainage Solutions</p>
          </div>
          <div className="text-center">
            <span className="text-3xl">📹</span>
            <p className="text-sm mt-2">Camera & Location Services</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="tel:+16019325838"
            className="bg-[var(--color-accent)] hover:bg-amber-500 text-gray-900 font-semibold py-2 px-6 rounded shadow-md hover:shadow-lg"
          >
            Call Us
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          © 2025 Bishop&apos;s Storm Drain. All rights reserved.
        </p>
      </div>
    </main>
  );
}
