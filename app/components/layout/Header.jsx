import { MapPin, Mail, Phone } from "lucide-react";

export default function Header() {
  return (
    <div className="mock-component bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center py-2 text-sm">
          {/* Mock: Address */}
          {/* <div className="flex items-center gap-2 mock-component border-white">
            <MapPin className="w-4 h-4" />
            <p>Address Component</p>
          </div> */}

          {/* Mock: Email */}
          <div className="flex items-center gap-2 mock-component border-white">
            <Mail className="w-4 h-4" />
            <p>Email Component</p>
          </div>

          {/* Mock: Phone */}
          <div className="flex items-center gap-2 mock-component border-white">
            <Phone className="w-4 h-4" />
            <p>Phone Component</p>
          </div>
        </div>
      </div>
    </div>
  );
}