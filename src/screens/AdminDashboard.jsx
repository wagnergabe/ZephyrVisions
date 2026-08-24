import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../services/api";

const emptyStats = [
  { label: "Clients", value: 0 },
  { label: "Active projects", value: 0 },
  { label: "Delivered projects", value: 0 },
  { label: "Files uploaded", value: 0 },
];


function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState(emptyStats);
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const token = sessionStorage.getItem("authToken");

        const response = await fetch(`${API_BASE_URL}/api/admin/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Unable to load dashboard.");
        }

        const data = await response.json();


        setStats([
          { label: "Clients", value: data.clients },
          { label: "Active projects", value: data.activeProjects },
          { label: "Delivered projects", value: data.deliveredProjects },
          { label: "Files uploaded", value: data.filesUploaded },
        ]);

        setRecentProjects(data.recentProjects);

      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07C0EA]">
              Zephyr Visions
            </p>

            <h1 className="mt-3 text-4xl font-bold">Admin Dashboard</h1>

            <p className="mt-3 text-slate-300">
              Manage clients, projects, and deliverables.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/admin/clients/new")}
              className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              Add client
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/projects/new")}
              className="rounded-lg bg-[#07C0EA] px-5 py-3 font-bold text-black transition hover:bg-cyan-300"
            >
              Create project
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-700 bg-slate-900 p-5"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <div className="border-b border-slate-700 p-6">
            <h2 className="text-xl font-bold">Recent projects</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-950 text-sm text-slate-400">
                <tr>
                  <th className="px-6 py-4">Project</th>
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Delivery</th>
                </tr>
              </thead>

              <tbody>
                {recentProjects.length === 0 ? (
                  <tr className="border-t border-slate-700">
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-slate-400"
                    >
                      No projects yet.
                    </td>
                  </tr>
                ) : (
                  recentProjects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-t border-slate-700"
                    >
                      <td className="px-6 py-4 font-semibold">
                        <Link
                          to={`/admin/projects/${project.id}`}
                          className="transition hover:text-[#07C0EA]"
                        >
                          {project.name}
                        </Link>
                      </td>

                      <td className="px-6 py-4 text-slate-300">
                        {project.client || "No client assigned"}
                      </td>

                      <td className="px-6 py-4">
                        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">
                          {project.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-slate-300">
                        {project.deliveryDate
                          ? new Date(project.deliveryDate).toLocaleDateString()
                          : "Not scheduled"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminDashboard;