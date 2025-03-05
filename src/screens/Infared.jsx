import inspection from '../assets/matrice_mapping.png'

const Infared = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
          Real-Time Thermal Imaging Services
        </h1>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Description & Features */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-lg">
              Experience the power of real-time thermal imaging with our advanced drone services.
              Using the DJI Matrice 4T, our cutting-edge technology captures precise temperature data on-the-fly,
              enabling rapid identification of hotspots, energy loss, and potential hazards.
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <span className="font-semibold">Instant Temperature Mapping:</span> View live thermal data with high accuracy.
              </li>
              <li>
                <span className="font-semibold">Hotspot Detection:</span> Quickly identify heat anomalies for efficient response.
              </li>
              <li>
                <span className="font-semibold">Geotagged Thermal Data:</span> Benefit from RTK precision positioning for centimeter-level accuracy.
              </li>
              <li>
                <span className="font-semibold">Versatile Applications:</span> Ideal for industrial inspections, emergency response, energy audits, and more.
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://www.ferntech.co.nz/assets/images/crystal-clear-vision(1).jpg"
              alt="DJI Matrice 4T Thermal Imaging"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>

    
        <div className="mt-12 w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">
             Capabilities
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
         
            <div className="flex flex-col items-center w-full md:w-1/3">
              <img
                src="https://images.ctfassets.net/go54bjdzbrgi/2p8snalLFBb6vrGXLBtFWj/6d5c814a8f49aaebe414d2619a44e84c/An_aerial_map_of_a_farm_through_an_NIR_sensor.jpg"
                alt="Hotspot Detection"
                className="w-full h-48 object-cover rounded shadow-md"
              />
              <p className="mt-4 text-lg text-center">
                Identify hotspots instantly to mitigate risks and prevent potential hazards.
              </p>
            </div>

            <div className="flex flex-col items-center w-full md:w-1/3">
              <img src="https://www1.djicdn.com/cms/uploads/6758aba21b42c590757a9e08ec123d40.png"
          
                alt="Ai Data"
                className="w-full h-48 object-cover rounded shadow-md"
              />
              <p className="mt-4 text-lg text-center">
              RTK-enabled geotagging ensures precise mapping of thermal data in real-world coordinates.
              </p>
            </div>
     
            <div className="flex flex-col items-center w-full md:w-1/3">
              <img
                src={inspection}
                alt="Industrial Inspections"
                className="w-full h-48 object-cover rounded shadow-md"
              />
              <p className="mt-4 text-lg text-center">
                Reliable performance for industrial inspections, emergency responses, and energy audits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infared
