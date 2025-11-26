export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Mock: Page Title */}
      <div className="mock-component mb-8">
        <p>About Us Page Title</p>
      </div>

      {/* Mock: Company Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="mock-component">
          <p>Company Story Text</p>
        </div>
        <div className="mock-component">
          <p>Company Image</p>
        </div>
      </div>

      {/* Mock: Mission & Values */}
      <div className="mock-component mb-12">
        <p>Mission & Values Section</p>
      </div>

      {/* Mock: Team Section */}
      <div className="mock-component">
        <p>Team Members Section</p>
      </div>
    </div>
  );
}