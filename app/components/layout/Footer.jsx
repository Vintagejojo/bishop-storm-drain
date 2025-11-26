export default function Footer() {
  return (
    <footer className="w-full text-base-content mt-8">
      <div className="max-w-screen-xl mx-auto p-10 footer footer-horizontal footer-center">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a  href="#" className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* social icons */}
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()}</p>
        </aside>
      </div>
    </footer>
  );
}