// src/components/AdminDashboard.jsx
import { useState, useEffect } from "react";
import axios from "../api/axios";

function AdminDashboard() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(true);

    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        github: "",
        image: "",
    });

    const [editingProjectId, setEditingProjectId] = useState(null);
    const [editingProjectData, setEditingProjectData] = useState({
        title: "",
        description: "",
        github: "",
        image: "",
    });

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get("/Projects");
                setProjects(res.data);
            } catch (err) {
                console.error("Failed to fetch projects", err);
            } finally {
                setLoading(false);
            }
        };

        const fetchMessages = async () => {
            try {
                const res = await axios.get("/contact");
                setMessages(res.data);
            } catch (err) {
                console.error("Failed to fetch messages", err);
            } finally {
                setLoadingMessages(false);
            }
        };

        fetchProjects();
        fetchMessages();
    }, []);

    const handleAddProject = async () => {
        try {
            const res = await axios.post("/Projects", newProject);
            setProjects([...projects, res.data]);
            setNewProject({ title: "", description: "", github: "", image: "" });
        } catch (err) {
            console.error("Failed to add project", err);
        }
    };

    const handleDeleteProject = async (id) => {
        try {
            await axios.delete(`/Projects/${id}`);
            setProjects(projects.filter((p) => p.id !== id));
        } catch (err) {
            console.error("Failed to delete project", err);
        }
    };

    const startEdit = (project) => {
        setEditingProjectId(project.id);
        setEditingProjectData({
            title: project.title,
            description: project.description,
            github: project.github,
            image: project.image,
        });
    };

    const cancelEdit = () => {
        setEditingProjectId(null);
    };

    const saveEdit = async () => {
        try {
            const res = await axios.put(`/Projects/${editingProjectId}`, editingProjectData);
            setProjects(projects.map((p) => (p.id === editingProjectId ? res.data : p)));
            setEditingProjectId(null);
        } catch (err) {
            console.error("Failed to update project", err);
        }
    };

    const handleDeleteMessage = async (id) => {
        try {
            await axios.delete(`/contact/${id}`);
            setMessages(messages.filter((m) => m.id !== id));
        } catch (err) {
            console.error("Failed to delete message", err);
        }
    };

    if (loading) {
        return <div className="text-white p-8">Loading projects...</div>;
    }

    return (
        <div className="min-h-screen p-8 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-6 mt-10 text-center">Admin Dashboard</h1>

            {/* Add Project */}
            <div className="bg-gray-800 p-6 rounded mb-10 max-w-lg">
                <h2 className="text-xl font-bold mb-4 text-center">Add New Project</h2>
                <input className="p-2 rounded bg-gray-700 w-full mb-3" placeholder="Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                />
                <input className="p-2 rounded bg-gray-700 w-full mb-3" placeholder="Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
                <input className="p-2 rounded bg-gray-700 w-full mb-3" placeholder="GitHub Link"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                />
                <input className="p-2 rounded bg-gray-700 w-full mb-4" placeholder="Image URL"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                    onClick={handleAddProject}
                >
                    Add Project
                </button>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) =>
                    editingProjectId === project.id ? (
                        <div key={project.id} className="bg-gray-800 rounded-xl shadow-md p-4 flex flex-col">
                            <input className="p-2 rounded bg-gray-700 mb-2"
                                value={editingProjectData.title}
                                onChange={(e) => setEditingProjectData({ ...editingProjectData, title: e.target.value })}
                                placeholder="Title"
                            />
                            <textarea className="p-2 rounded bg-gray-700 mb-2 resize-none" rows={3}
                                value={editingProjectData.description}
                                onChange={(e) => setEditingProjectData({ ...editingProjectData, description: e.target.value })}
                                placeholder="Description"
                            />
                            <input className="p-2 rounded bg-gray-700 mb-2"
                                value={editingProjectData.github}
                                onChange={(e) => setEditingProjectData({ ...editingProjectData, github: e.target.value })}
                                placeholder="GitHub Link"
                            />
                            <input className="p-2 rounded bg-gray-700 mb-4"
                                value={editingProjectData.image}
                                onChange={(e) => setEditingProjectData({ ...editingProjectData, image: e.target.value })}
                                placeholder="Image URL"
                            />
                            <div className="flex space-x-2">
                                <button onClick={saveEdit}
                                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                                >Save</button>
                                <button onClick={cancelEdit}
                                    className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
                                >Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <div key={project.id} className="bg-gray-800 rounded-xl shadow-md p-4 flex flex-col">
                            <img src={project.image || "https://via.placeholder.com/300x180"}
                                alt={project.title} className="rounded mb-4 w-full h-40 object-cover"
                            />
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p className="text-sm my-2 flex-grow">{project.description}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="text-blue-400 underline"
                            >
                                View on GitHub
                            </a>
                            <div className="mt-4 flex space-x-2">
                                <button onClick={() => startEdit(project)}
                                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm"
                                >Edit</button>
                                <button onClick={() => handleDeleteProject(project.id)}
                                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                                >Delete</button>
                            </div>
                        </div>
                    )
                )}
            </div>

            {/* Contact Messages */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Messages</h2>
                {loadingMessages ? (
                    <p className="text-gray-400 text-center">Loading messages...</p>
                ) : messages.length === 0 ? (
                    <p className="text-gray-500 text-center">No messages received yet.</p>
                ) : (
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {messages.map((msg) => (
                            <div key={msg.id}
                                className="bg-gray-800 rounded-xl p-4 border border-gray-700"
                            >
                                <p className="text-sm text-gray-400">
                                    {new Date(msg.createdAt).toLocaleString()}
                                </p>
                                <h3 className="text-lg font-semibold">{msg.name}</h3>
                                <p className="mt-2 mb-4">{msg.message}</p>
                                <button
                                    onClick={() => handleDeleteMessage(msg.id)}
                                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;