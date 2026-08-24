import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../services/api";


function ClientDashboard() {
  const [client, setClient] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const token = sessionStorage.getItem("authToken");

        const response = await fetch(
          `${API_BASE_URL}/api/clients/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load dashboard.");
        }

        setClient(data.client);
        setProjects(data.projects);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-950 p-10 text-white">
        <p>Loading dashboard...</p>
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

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07C0EA]">
            Zephyr Visions
          </p>

          <h1 className="mt-3 text-4xl font-bold">Client Dashboard</h1>

          <p className="mt-3 text-slate-300">
            Welcome back,{" "}
            {client?.company ||
              `${client?.firstName || ""} ${client?.lastName || ""}`.trim()}
            .
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <p className="text-slate-400">
              No projects are currently assigned to your account.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#07C0EA]">
                      {project.projectType || "Project"}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      {project.name}
                    </h2>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                      {project.description || "No description provided."}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300">
                    {project.status}
                  </span>
                </div>

                <div className="mt-7 grid gap-5 border-t border-slate-700 pt-5 sm:grid-cols-2">
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
                </div>
                <div className="mt-6">
  <Link
    to={`/portal/projects/${project.id}`}
    className="inline-flex rounded-lg bg-[#07C0EA] px-5 py-2.5 font-bold text-black transition hover:bg-cyan-300"
  >
    View project
  </Link>
</div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default ClientDashboard;