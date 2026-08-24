import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

function ClientProjectDetails() {
    const { projectId } = useParams();

    const [project, setProject] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [deliverables, setDeliverables] = useState([]);

    useEffect(() => {
        async function loadProject() {
            try {
                const token = sessionStorage.getItem("authToken");

                const response = await fetch(
                    `${API_BASE_URL}/api/clients/projects/${projectId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Unable to load project.");
                }

                setProject(data.project);

                const deliverablesResponse = await fetch(
                    `${API_BASE_URL}/api/clients/projects/${projectId}/deliverables`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const deliverablesData = await deliverablesResponse.json();

                if (!deliverablesResponse.ok) {
                    throw new Error(
                        deliverablesData.error || "Unable to load deliverables."
                    );
                }

                setDeliverables(deliverablesData.deliverables);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadProject();
    }, [projectId]);

    const handleDownload = async (deliverable) => {
        try {
            const token = sessionStorage.getItem("authToken");

            const response = await fetch(
                `${API_BASE_URL}/api/clients/deliverables/${deliverable.id}/download`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Unable to download file.");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = deliverable.filename;

            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoading) {
        return (
            <main className="min-h-screen bg-slate-950 p-10 text-white">
                <p>Loading project...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="min-h-screen bg-slate-950 p-10 text-white">
                <p>{error}</p>
            </main>
        );
    }

    if (!project) {
        return (
            <main className="min-h-screen bg-slate-950 p-10 text-white">
                <p>Project not found.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
            <section className="mx-auto max-w-4xl">
                <Link
                    to="/dashboard"
                    className="font-semibold text-[#07C0EA] transition hover:text-cyan-300"
                >
                    ← Back to dashboard
                </Link>

                <h1 className="mt-6 text-4xl font-bold">
                    Project Details
                </h1>

                <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900">
                    <div className="border-b border-slate-700 p-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#07C0EA]">
                            {project.projectType || "Project"}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold">
                            {project.name}
                        </h2>
                    </div>

                    <div className="grid gap-6 p-6 sm:grid-cols-2">
                        <div>
                            <p className="text-sm text-slate-400">Status</p>
                            <p className="mt-1 font-semibold">{project.status}</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-400">Flight date</p>
                            <p className="mt-1 font-semibold">
                                {project.flightDate
                                    ? new Date(project.flightDate).toLocaleDateString()
                                    : "Not scheduled"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-400">Delivery date</p>
                            <p className="mt-1 font-semibold">
                                {project.deliveryDate
                                    ? new Date(project.deliveryDate).toLocaleDateString()
                                    : "Not scheduled"}
                            </p>
                        </div>

                        <div className="sm:col-span-2">
                            <p className="text-sm text-slate-400">Description</p>
                            <p className="mt-1 whitespace-pre-wrap text-slate-200">
                                {project.description || "No description provided."}
                            </p>
                        </div>
                    </div>
                </div>

                <section className="mt-6 rounded-2xl border border-slate-700 bg-slate-900">
                    <div className="border-b border-slate-700 p-6">
                        <h2 className="text-xl font-bold">Project files</h2>
                    </div>

                    <div className="p-6">
                        {deliverables.length === 0 ? (
                            <p className="text-slate-400">
                                No files are currently available for this project.
                            </p>
                        ) : (
                            <div className="space-y-3">
                                {deliverables.map((deliverable) => (
                                    <div
                                        key={deliverable.id}
                                        className="flex flex-col gap-4 rounded-lg border border-slate-700 bg-slate-950 p-4 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div>
                                            <p className="font-semibold text-white">
                                                {deliverable.filename}
                                            </p>

                                            <p className="mt-1 text-sm text-slate-400">
                                                {(deliverable.filesize / 1024).toFixed(1)} KB
                                            </p>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Uploaded{" "}
                                                {new Date(deliverable.uploadedAt).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => handleDownload(deliverable)}
                                            className="rounded-lg bg-[#07C0EA] px-4 py-2 font-semibold text-black transition hover:bg-cyan-300"
                                        >
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </section>
        </main>
    );
}

export default ClientProjectDetails;