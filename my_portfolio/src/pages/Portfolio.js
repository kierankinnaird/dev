const projects = [
    { title: "Project 1", description: "A cool project about...", link: "#" },
    { title: "Project 2", description: "Another great project...", link: "#" },
    { title: "Project 3", description: "Coming soon...", link: "#" }
  ];
  
  export default function Portfolio() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 mt-4 inline-block">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }