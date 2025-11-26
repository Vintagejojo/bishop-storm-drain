export default function ServiceCard({ title }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
      {/* Mock: Service Image */}
      <div className="mock-component h-[200px] border-white">
        <p className="text-white">Service Image: {title}</p>
      </div>

      {/* Mock: Service Title */}
      <div className="p-6">
        <div className="mock-component border-white mb-4">
          <p className="text-white">{title}</p>
        </div>

        {/* Mock: Service Description */}
        <div className="mock-component border-white mb-4">
          <p className="text-white">Service Description</p>
        </div>

        {/* Mock: Learn More Link */}
        <div className="mock-component border-white">
          <p className="text-white">Learn More Link</p>
        </div>
      </div>
    </div>
  );
}