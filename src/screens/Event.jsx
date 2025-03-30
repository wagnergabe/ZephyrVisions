
export default function EventCoverage() {
    const events = [
        {
          title: "Music Festivals & Concerts",
          description: "Capture electrifying performances, massive crowds, and stunning lighting effects from a unique aerial perspective.",
          img: "https://as1.ftcdn.net/v2/jpg/02/14/78/42/1000_F_214784289_bUpjlJAgkY3SprW8GHjoD3l1eIlVqs6I.jpg"
        },
        {
          title: "Sports Events & Competitions",
          description: "Follow high-speed action, track races, and showcase venues with dynamic aerial views.",
          img: "https://images.pexels.com/photos/21175818/pexels-photo-21175818/free-photo-of-drone-shot-of-a-buggy-gokart-parked-next-to-tires-on-a-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Weddings & Special Occasions",
          description: "Create unforgettable wedding memories with breathtaking aerial footage of ceremonies and receptions.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/a4bba3a5-013c-414d-a90c-19fdc3133918/Leonardo_Kino_XL_wedding_from_a_drone_perspective_0.jpg"
        },
        {
          title: "Corporate Events & Trade Shows",
          description: "Showcase large-scale networking events, product launches, and VIP experiences from above.",
          img: "https://t4.ftcdn.net/jpg/07/41/27/65/240_F_741276556_eOnAhHdOzxMtqtlV3ckEU3qFZe6rI9ii.jpg"
        },
        {
          title: "Festivals & Community Gatherings",
          description: "Highlight parades, carnivals, and local events with immersive aerial footage.",
          img: "https://images.pexels.com/photos/12685181/pexels-photo-12685181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Race Events",
          description: "Live following of high-speed races. Including FPV capture for cinematic engagement",
          img: "https://images.pexels.com/photos/30063481/pexels-photo-30063481/free-photo-of-aerial-view-of-marathon-event-in-sao-paulo-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Real Estate & Commercial Openings",
          description: "Showcase grand openings and property unveilings with engaging aerial tours.",
          img: "https://cdn.leonardo.ai/users/1981000c-41ac-4b45-b469-2ae91e6b7135/generations/0374faba-098f-4170-b957-911f88bacf6d/Leonardo_Kino_XL_new_business_opening_from_above_3.jpg"
        },
        {
          title: "School & University Events",
          description: "Celebrate graduations, sports rallies, and campus-wide events with breathtaking drone shots.",
          img: "https://images.pexels.com/photos/1046537/pexels-photo-1046537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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

 
      </div>
    </section>
  );
}
