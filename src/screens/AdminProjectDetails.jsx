import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function AdminProjectDetails() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [error, setError] = useState("");
    const [deliverables, setDeliverables] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");

    useEffect(() => {

        async function loadProject() {



            try {
                const token = sessionStorage.getItem("authToken");

                const response = await fetch(
                    `http://localhost:5000/api/projects/${projectId}`,
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
                    `http://localhost:5000/api/projects/${projectId}/deliverables`,
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
            }
        }
        loadProject();
    }, [projectId]);

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        setUploadError("");
        setIsUploading(true);

        try {
            const token = sessionStorage.getItem("authToken");

            const formData = new FormData();
            formData.append("file", selectedFile);

            const response = await fetch(
                `http://localhost:5000/api/projects/${projectId}/deliverables`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to upload deliverable.");
            }

            setDeliverables((current) => [
                data.deliverable,
                ...current,
            ]);

            setSelectedFile(null);
        } catch (error) {
            setUploadError(error.message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleDownload = async (deliverable) => {
        try {
            const token = sessionStorage.getItem("authToken");

            const response = await fetch(
                `http://localhost:5000/api/projects/deliverables/${deliverable.id}/download`,
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
                <p>Loading project...</p>
            </main>
        );
    }



    return (
        <main className="min-h-screen bg-slate-950 p-10 text-white">
            <Link
                to="/admin"
                className="mb-6 inline-block font-semibold text-[#07C0EA] transition hover:text-cyan-300"
            >
                ← Back to dashboard
            </Link>

            <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
                <div className="border-b border-slate-700 p-6">
                    <h2 className="text-xl font-bold">Project information</h2>
                    <button
                        type="button"
                        onClick={() => navigate(`/admin/projects/${project.id}/edit`)}
                        className="rounded-lg bg-[#07C0EA] px-5 py-3 font-bold text-black transition hover:bg-cyan-300 mt-3"
                    >
                        Edit project
                    </button>
                </div>

                <div className="grid gap-6 p-6 sm:grid-cols-2">
                    <div>
                        <p className="text-sm text-slate-400">Client</p>
                        <p className="mt-1 font-semibold">
                            {project.client.company ||
                                `${project.client.firstName} ${project.client.lastName}`}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">Contact</p>
                        <p className="mt-1 font-semibold">
                            {project.client.firstName} {project.client.lastName}
                        </p>
                        <p className="text-sm text-slate-300">{project.client.email}</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">Project type</p>
                        <p className="mt-1 font-semibold">
                            {project.projectType || "Not specified"}
                        </p>
                    </div>

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
            <section className="mx-auto mt-6 max-w-4xl rounded-2xl border border-slate-700 bg-slate-900">
                <div className="border-b border-slate-700 p-6">
                    <h2 className="text-xl font-bold">Deliverables</h2>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <input
                            type="file"
                            onChange={(event) => setSelectedFile(event.target.files[0])}
                            className="block text-sm text-slate-300"
                        />

                        <button
                            type="button"
                            onClick={handleUpload}
                            disabled={!selectedFile || isUploading}
                            className="rounded-lg bg-[#07C0EA] px-5 py-2.5 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isUploading ? "Uploading..." : "Upload deliverable"}
                        </button>
                    </div>

                    {uploadError && (
                        <p className="mt-3 text-sm text-red-400">
                            {uploadError}
                        </p>
                    )}
                </div>

                <div className="p-6">
                    {deliverables.length === 0 ? (
                        <p className="text-slate-400">No deliverables uploaded yet.</p>
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
                                        className="rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-200 transition hover:border-[#07C0EA] hover:text-[#07C0EA]"
                                    >
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default AdminProjectDetails;