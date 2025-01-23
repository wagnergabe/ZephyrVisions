const Drones = () => {
  return (
    <>
    <section className="flex flex-col items-center justify-between w-[100%] h-auto m-3">
    <h2 className="">Drones</h2>
    <div className="flex flex-row justify-evenly w-full">
      <p className="font-bold border-b-4 border-black">Indoor</p>
      <p className="font-bold border-b-4 border-black hidden">Picture/Video</p>
      <p className="font-bold border-b-4 border-black hidden">Industiral</p>
    </div>
  
    <main className="flex lg:flex-row flex-col h-[90%] w-[80%] items-center justify-evenly mt-8">
    <aside class="flex flex-col w-[20%] items-center text-center my-[30px]">
      <div className="my-[20px]">
        <p className="font-bold">Indoor Maneuverability</p>
      <p>Easily maneuver indoors and capture unique living spaces and rooms of your home. Proficient in indoor drone tours for all your real estate marketing and personal needs.</p>
      </div>
      <div>
        <p className="font-bold">Still Photography Mode</p>
        <p>Still photography is perfect for capturing arial shots and custom home and property portraits.</p>
      </div>
    </aside>

    <div className="flex flex-col items-center justify-center">
    <img src="https://i0.wp.com/northjerseydroneshots.com/wp-content/uploads/2023/04/Indoor-drone.jpg?w=1128&ssl=1" className="w-[500px] h-[400px]" />
    </div>
    <aside class="flex flex-col w-[20%] items-center text-center my-[30px]">
      <div className="my-[20px]">
        <p className="font-bold">Focus Mode / Goggles</p>
      <p>Easily maneuver in and out of tight spaces with precision goggles and superior focus mode</p>
      </div>
      <div>
        <p className="font-bold">4K Stabilized Video</p>
        <p>Stabilized 4K video allows for precision videos with minimal movements</p>
      </div>
    </aside>
    </main>


    </section>
    </>
  )
}

export default Drones;
