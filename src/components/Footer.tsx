export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md text-black shadow-sm py-10 px-4 md:px-8 lg:px-16 text-center">
      <div className="max-w-5xl mx-auto space-y-2">
        <p className="text-sm text-gray-700">&copy; {new Date().getFullYear()} AncakStudios. All rights reserved.</p>
      </div>
    </footer>
  );
}
