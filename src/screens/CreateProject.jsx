import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

function CreateProject() {
    const navigate = useNavigate();

    const [clients, setClients] = useState([]);
    const [selectedClientId, setSelectedClientId] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [projectType, setProjectType] = useState("");
    const [status, setStatus] = useState("Scheduled");
    const [description, setDescription] = useState("");
    const [flightDate, setFlightDate] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function loadClients() {
            try {
                const token = sessionStorage.getItem("authToken");

                const response = await fetch(`${API_BASE_URL}/api/clients`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Unable to load clients.");
                }

                setClients(data.clients);
            } catch (error) {
                setError(error.message);
            }
        }

        loadClients();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setIsLoading(true);

        try {
            const token = sessionStorage.getItem("authToken");

            const response = await fetch(`${API_BASE_URL}/api/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    clientId: selectedClientId,
                    name,
                    projectType,
                    status,
                    description,
                    flightDate,
                    deliveryDate,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to create project.");
            }

            navigate("/admin");
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
            <section className="mx-auto max-w-2xl">
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07C0EA]">
                        Zephyr Visions
                    </p>

                    <h1 className="mt-3 text-4xl font-bold">Create Project</h1>

                    <p className="mt-3 text-slate-300">
                        Create a new project and assign it to a client.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl sm:p-8"
                >

                    <label
                        htmlFor="client"
                        className="mb-2 block font-semibold text-slate-200"
                    >
                        Client
                    </label>

                    <select
                        id="client"
                        value={selectedClientId}
                        onChange={(event) => setSelectedClientId(event.target.value)}
                        className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
                    >
                        <option value="">Select a client</option>

                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.company
                                    ? `${client.company} — ${client.firstName} ${client.lastName}`
                                    : `${client.firstName} ${client.lastName}`}
                            </option>
                        ))}
                    </select>

                    <div className="mt-5">
                        <label
                            htmlFor="name"
                            className="mb-2 block font-semibold text-slate-200"
                        >
                            Project name
                        </label>

                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
                        />
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="projectType"
                            className="mb-2 block font-semibold text-slate-200"
                        >
                            Project type
                        </label>

                        <input
                            id="projectType"
                            type="text"
                            value={projectType}
                            onChange={(event) => setProjectType(event.target.value)}
                            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
                        />
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="status"
                            className="mb-2 block font-semibold text-slate-200"
                        >
                            Status
                        </label>

                        <select
                            id="status"
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
                        >
                            <option value="Scheduled">Scheduled</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>

                    <div className="mt-5">
                        <label
                            htmlFor="description"
                            className="mb-2 block font-semibold text-slate-200"
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            rows="4"
                            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
                        />
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="flightDate"
                                className="mb-2 block font-semibold text-slate-200"
                            >
                                Flight date
                            </label>

                            <input
                                id="flightDate"
                                type="date"
                                value={flightDate}
                                onChange={(event) => setFlightDate(event.target.value)}
                                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="deliveryDate"
                                className="mb-2 block font-semibold text-slate-200"
                            >
                                Delivery date
                            </label>

                            <input
                                id="deliveryDate"
                                type="date"
                                value={deliveryDate}
                                onChange={(event) => setDeliveryDate(event.target.value)}
                                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#07C0EA] focus:ring-2 focus:ring-[#07C0EA]/30"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="mt-4 rounded-lg border border-amber-500/40 bg-amber-950/40 p-4 text-sm text-amber-100">
                            {error}
                        </p>
                    )}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => navigate("/admin")}
                            className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={isLoading || !selectedClientId || !name.trim()}
                            className="rounded-lg bg-[#07C0EA] px-5 py-3 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading ? "Creating..." : "Create project"}
                        </button>
                    </div>

                </form>
            </section>
        </main>
    );
}

export default CreateProject;