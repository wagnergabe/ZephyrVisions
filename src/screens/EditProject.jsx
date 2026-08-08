import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProject() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [projectType, setProjectType] = useState("");
    const [status, setStatus] = useState("Scheduled");
    const [description, setDescription] = useState("");
    const [flightDate, setFlightDate] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [clientId, setClientId] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
                setName(data.project.name || "");
                setProjectType(data.project.projectType || "");
                setStatus(data.project.status || "Scheduled");
                setDescription(data.project.description || "");
                setClientId(String(data.project.client.id));

                setFlightDate(
                    data.project.flightDate
                        ? data.project.flightDate.slice(0, 10)
                        : ""
                );

                setDeliveryDate(
                    data.project.deliveryDate
                        ? data.project.deliveryDate.slice(0, 10)
                        : ""
                );
            } catch (error) {
                setError(error.message);
            }
        }

        loadProject();
    }, [projectId]);

const handleSubmit = async (event) => {
  event.preventDefault();

  setError("");
  setIsLoading(true);

  try {
    const token = sessionStorage.getItem("authToken");

    const response = await fetch(
      `http://localhost:5000/api/projects/${projectId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          clientId,
          name,
          projectType,
          status,
          description,
          flightDate,
          deliveryDate,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to update project.");
    }

    navigate(`/admin/projects/${projectId}`);
  } catch (error) {
    setError(error.message);
  } finally {
    setIsLoading(false);
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
        <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
            <section className="mx-auto max-w-2xl">
                <h1 className="text-4xl font-bold">Edit Project</h1>

                <p className="mt-3 text-slate-300">
                    Editing {project.name}
                </p>

<form
  onSubmit={handleSubmit}
  className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6"
>
  <div className="space-y-5">
    <div>
      <label className="mb-2 block font-semibold text-slate-200">
        Project name
      </label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none focus:border-[#07C0EA]"
      />
    </div>

    <div>
      <label className="mb-2 block font-semibold text-slate-200">
        Project type
      </label>
      <input
        type="text"
        value={projectType}
        onChange={(event) => setProjectType(event.target.value)}
        className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none focus:border-[#07C0EA]"
      />
    </div>

    <div>
      <label className="mb-2 block font-semibold text-slate-200">
        Status
      </label>
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none focus:border-[#07C0EA]"
      >
        <option value="Scheduled">Scheduled</option>
        <option value="In Progress">In Progress</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block font-semibold text-slate-200">
        Description
      </label>
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows="4"
        className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none focus:border-[#07C0EA]"
      />
    </div>

    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="mb-2 block font-semibold text-slate-200">
          Flight date
        </label>
        <input
          type="date"
          value={flightDate}
          onChange={(event) => setFlightDate(event.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none focus:border-[#07C0EA]"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold text-slate-200">
          Delivery date
        </label>
        <input
          type="date"
          value={deliveryDate}
          onChange={(event) => setDeliveryDate(event.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none focus:border-[#07C0EA]"
        />
      </div>
    </div>
  </div>
  <div className="mt-6 flex gap-3">
  <button
    type="button"
    onClick={() => navigate(`/admin/projects/${projectId}`)}
    className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition hover:bg-slate-800"
  >
    Cancel
  </button>

  <button
    type="submit"
    disabled={isLoading || !name.trim()}
    className="rounded-lg bg-[#07C0EA] px-5 py-3 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {isLoading ? "Saving..." : "Save changes"}
  </button>
</div>
</form>

              
            </section>
        </main>
    );
}

export default EditProject;