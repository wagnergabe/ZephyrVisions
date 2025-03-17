
export default function EventCoverage() {
    const events = [
        {
          title: "Music Festivals & Concerts",
          description: "Capture electrifying performances, massive crowds, and stunning lighting effects from a unique aerial perspective.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/cc5219fe-af23-4361-b38d-fc56503abdc8/Leonardo_Vision_XL_electric_music_festival_overhead_drone_0.jpg"
        },
        {
          title: "Sports Events & Competitions",
          description: "Follow high-speed action, track races, and showcase venues with dynamic aerial views.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/c7e47ac4-02f2-478b-a637-40443fc1a16c/Leonardo_Kino_XL_track_and_field_stadium_1.jpg"
        },
        {
          title: "Weddings & Special Occasions",
          description: "Create unforgettable wedding memories with breathtaking aerial footage of ceremonies and receptions.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/a4bba3a5-013c-414d-a90c-19fdc3133918/Leonardo_Kino_XL_wedding_from_a_drone_perspective_0.jpg"
        },
        {
          title: "Corporate Events & Trade Shows",
          description: "Showcase large-scale networking events, product launches, and VIP experiences from above.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/48cfd678-a256-419a-92f9-25633beea821/Leonardo_Kino_XL_trade_show_event_from_a_drones_persective_1.jpg"
        },
        {
          title: "Festivals & Community Gatherings",
          description: "Highlight parades, carnivals, and local events with immersive aerial footage.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/549762fc-9451-4e9d-8464-f285e3a67eb2/Leonardo_Kino_XL_parade_from_a_drones_perspective_simple_few_p_0.jpg"
        },
        {
          title: "Race Events",
          description: "Live following of high-speed races.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/bf15c2a5-e296-405e-a8f2-c961bbad94cb/Leonardo_Kino_XL_motorcross_car_race_2.jpg"
        },
        {
          title: "Real Estate & Commercial Openings",
          description: "Showcase grand openings and property unveilings with engaging aerial tours.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/0374faba-098f-4170-b957-911f88bacf6d/Leonardo_Kino_XL_new_business_opening_from_above_3.jpg"
        },
        {
          title: "🎓 School & University Events",
          description: "Celebrate graduations, sports rallies, and campus-wide events with breathtaking drone shots.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/10ac7c1f-e329-4a97-9b69-f1b3c1632d8b/Leonardo_Kino_XL_school_graduation_event_1.jpg"
        },

      ];
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#07C0EA] mb-8">
          Professional Drone Event Coverage
        </h2>
        <p className="text-lg text-center text-gray-300 mb-10">
          Elevate your events with stunning aerial footage, capturing unique perspectives that traditional photography can't match.
        </p>
        
        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={event.img} alt={event.title} className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="bg-[#07C0EA] hover:bg-[#05a6d8] text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-lg">
            Book Your Event Coverage
          </button>
        </div>
      </div>
    </section>
  );
}
