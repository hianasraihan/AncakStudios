'use client';

const projects = [
  { title: 'Video Editing', image: '/works1.png' },
  { title: 'Instagram Feeds', image: '/works2.png' },
  { title: 'Graphic Design', image: '/works3.png' },
  { title: 'Graphic Design', image: '/works4.png' },
  { title: 'Instagram Feeds', image: '/works5.png' },
  { title: 'Video Editing', image: '/works6.png' },
];

export default function Works() {
  return (
    <section id="works" className="bg-black text-white px-4 md:px-8 lg:px-16 py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase text-orange-500">
        Our Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-lg overflow-hidden bg-neutral-900 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold uppercase text-orange-400">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
