import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function AdminLogin({ setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username.trim() || !password.trim()) {
            alert("Please enter both username and password");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("/login", {
                username,
                password,
            });

            const token = response.data.token;

            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("isAdmin", "true");// <-- Important for protected routes
                setToken(token);  // Notify App about new token
                navigate("/admin/dashboard");
            } else {
                alert("Invalid response from server");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Incorrect username or password, or server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-black text-white">
            <div className="bg-gray-800 p-8 rounded-xl space-y-6 shadow-xl w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center">Admin Login</h2>

                <input
                    type="text"
                    className="p-2 rounded w-full bg-gray-700"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    disabled={loading}
                />

                <input
                    type="password"
                    className="p-2 rounded w-full bg-gray-700"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    disabled={loading}
                />

                <button
                    type="button"
                    onClick={handleLogin}
                    disabled={loading}
                    className={`w-full py-2 rounded ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
        </div>
    );
}

export default AdminLogin;