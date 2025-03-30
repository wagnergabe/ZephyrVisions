export default function Roof() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-logo-blue text-center mb-6">
          Advanced Roof Inspections with the DJI Matrice 4T
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Experience faster, safer, and more detailed roof inspections using the powerful DJI Matrice 4T. Services provide thermal imaging, high-resolution visuals, and real-time data — ideal for property managers, insurers, and homeowners.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-2">
            <img
              src="https://img.freepik.com/free-photo/high-angle-beautiful-roof-wooden-house_23-2149343706.jpg?t=st=1743366160~exp=1743369760~hmac=3e614708b30346425fec4bd22434fb6f27882dbf57c7b2df5f6ea4ae7c3f89f3&w=740"
              alt="Aerial Roof Shot"
              className="rounded-2xl shadow-md w-full"
            />
            <p className="text-center text-sm text-gray-500">Aerial Roof Inspection</p>
          </div>
          <div className="space-y-2">
            <img
              src="https://blog.ivytools.com/wp-content/uploads/2013/12/flir-t420-roof.jpg"
              alt="Thermal Roof Imaging"
              className="rounded-2xl shadow-md w-full"
            />
            <p className="text-center text-sm text-gray-500">Thermal Roof Imaging</p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-logo-blue mb-4">
          Why Use Drones for Roof Inspections?
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl space-y-4 mb-10">
          <li><strong>Safety First:</strong> No need for ladders or scaffolding — drones keep inspectors safely on the ground.</li>
          <li><strong>Thermal Detection:</strong> With the Matrice 4T’s thermal camera, detect water damage, heat loss, or insulation issues invisible to the naked eye.</li>
          <li><strong>Detailed Imagery:</strong> High-resolution zoom and wide-angle cameras provide unparalleled detail, ideal for identifying cracks, wear, and potential leaks.</li>
          <li><strong>Time Efficient:</strong> Complete inspections in minutes instead of hours, minimizing disruption for homeowners and businesses.</li>
          <li><strong>Cost Effective:</strong> Avoid unnecessary labor or equipment rental costs with aerial solutions.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-logo-blue mb-4">
          The Matrice 4T Advantage
        </h3>

        <img
        src="https://cdn.shopify.com/s/files/1/0754/1882/9074/files/Matrice-4T-2.jpg?v=1736442525"
        alt= "Matrice 4T"
        className="shadow-md w-full mb-4" 
        />
        <p className="text-gray-700 text-lg md:text-3xl mb-4 leading-relaxed">
          The DJI Matrice 4T is engineered for precision and versatility. Its thermal imaging capabilities, 56× zoom, laser rangefinder, and long flight time make it the ideal tool for roof inspections. Whether it’s residential, commercial, or industrial — the Matrice 4T delivers actionable insights, fast.
        </p>

        <p className="text-gray-700 text-lg md:text-3xl leading-relaxed">
          As drone technology evolves, more industries are turning to UAVs for reliable, high-quality inspections. Drones reduce liability, increase efficiency, and provide richer data — and we're ready to bring that power to your next roof inspection.
        </p>
      </div>
    </section>
  );
}
