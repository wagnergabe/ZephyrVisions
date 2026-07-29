import { FiDownload, FiFileText } from "react-icons/fi";

const demoProject = {
  client: "Acme Roofing",
  name: "Commercial Roof Inspection",
  type: "Thermal Roof Inspection",
  status: "Delivered",
  deliveryDate: "July 2026",
  description:
    "Aerial photographs, thermal imagery, inspection video, and final project documentation.",
  files: [
    "Thermal inspection report.pdf",
    "Aerial photos.zip",
    "Inspection video.mp4",
  ],
};

function ClientDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#07C0EA]">
            Zephyr Visions
          </p>

          <h1 className="mt-3 text-4xl font-bold">Client Dashboard</h1>

          <p className="mt-3 text-slate-300">
            Welcome back, {demoProject.client}.
          </p>
        </div>

        <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#07C0EA]">
                {demoProject.type}
              </p>

              <h2 className="mt-2 text-2xl font-bold">{demoProject.name}</h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                {demoProject.description}
              </p>
            </div>

            <span className="w-fit rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-300">
              {demoProject.status}
            </span>
          </div>

          <div className="my-7 border-y border-slate-700 py-5">
            <p className="text-sm text-slate-400">Delivery date</p>
            <p className="mt-1 font-semibold">{demoProject.deliveryDate}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Project files</h3>

            <ul className="mt-4 space-y-3">
              {demoProject.files.map((file) => (
                <li
                  key={file}
                  className="flex flex-col gap-3 rounded-lg border border-slate-700 bg-slate-950 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FiFileText className="text-xl text-[#07C0EA]" />
                    <span className="text-slate-200">{file}</span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#07C0EA] px-4 py-2 font-semibold text-black transition hover:bg-cyan-300"
                  >
                    <FiDownload />
                    Download
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ClientDashboard;