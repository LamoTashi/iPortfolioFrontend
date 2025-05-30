import { useEffect, useState } from "react";
import axios from "../api/axios";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("/Projects");
                setProjects(res.data);
            } catch (err) {
                setError("Failed to load projects.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <p className="text-white p-4">Loading projects...</p>;
    if (error) return <p className="text-red-500 p-4">{error}</p>;

    return (
        <div className="min-h-screen p-8 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6 mt-8">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length === 0 ? (
                    <p>No projects found.</p>
                ) : (
                    projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-xl shadow-md p-4 flex flex-col">
                            <img
                                src={project.image || "https://via.placeholder.com/300x180"}
                                alt={project.title}
                                className="rounded mb-4 w-full h-40 object-cover"
                            />
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p className="text-sm my-2 flex-grow">{project.description}</p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects;