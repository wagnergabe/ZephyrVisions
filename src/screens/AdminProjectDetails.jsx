import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function AdminProjectDetails() {
    const { projectId } = useParams();
     const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [error, setError] = useState("");

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
            } catch (error) {
                setError(error.message);
            }
        }

        loadProject();
    }, [projectId]);

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
        </main>
    );
}

export default AdminProjectDetails;