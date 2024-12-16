export default function Agent_cards({ agent }) {
    return (
        <div className="border items-center flex flex-wrap flex-col">
            <div className="flex w-1/2 border m-2 border-black px-3 justify-center">
                <div className="aspect-square ">
                    <img
                        src={agent.image}
                        alt={`${agent.name}`}
                        className="rounded-full aspect-square h-2/3 md:h-4/5 mt-3"
                    />
                </div>
                <div className="flex flex-col justify-evenly md:px-4 md:py-2 text-sm md:text-md">
                    <h1>{agent.name}</h1>
                    <h2>{agent.City}</h2>
                    <h3>{agent.mobile}</h3>
                    <h4>{agent.email}</h4>
                    
                    <div className="flex gap-x-4 w-44 md:w-80">
                        <button className="border border-black flex rounded-md hover:bg-green-400 md:w-2/3 justify-center">
                            Book slot
                        </button>
                        <button className="border border-black flex rounded-md hover:bg-green-400 md:w-2/3 justify-center">
                            View Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
