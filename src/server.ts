import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const teams = [
     { id: 1, name: "redbull", base: "Milton Keynes, Reino Unido" },
    { id: 2, name: "mclaren", base: "Woking, Reino Unido" },
    { id: 3, name: "ferrari", base: "Maranello, Itália" },
    { id: 4, name: "mercedes", base: "Brackley, Reino Unido" },
    { id: 5, name: "alpine", base: "Enstone, Reino Unido" },
    { id: 6, name: "haas", base: "Kannapolis, Estados Unidos" },
    { id: 7, name: "sauber", base: "Hinwil, Suíça" }, 
    { id: 8, name: "williams", base: "Grove, Reino Unido" },
    { id: 9, name: "aston martin", base: "Silverstone, Reino Unido" },
    { id: 10, name: "racing bulls", base: "Faenza, Itália" }
];

const drivers = [
    { id: 1, name: "max verstappen", team: "redbull" },
    { id: 2, name: "liam lawson", team: "redbull" },
    { id: 3, name: "lando norris", team: "mclaren" },
    { id: 4, name: "oscar piastri", team: "mclaren" },
    { id: 5, name: "lewis hamilton", team: "ferrari" },
    { id: 6, name: "charles leclerc", team: "ferrari" },
    { id: 7, name: "george russell", team: "mercedes" },
    { id: 8, name: "kimi antonelli", team: "mercedes" },
    { id: 9, name: "fernando alonso", team: "aston martin" },
    { id: 10, name: "lance stroll", team: "aston martin" },
    { id: 11, name: "pierre gasly", team: "alpine" },
    { id: 12, name: "jack doohan", team: "alpine" },
    { id: 13, name: "alex albon", team: "williams" },
    { id: 14, name: "carlos sainz", team: "williams" },
    { id: 15, name: "yuki tsunoda", team: "racing bulls" },
    { id: 16, name: "isack hadjar", team: "racing bulls" },
    { id: 17, name: "nico hulkenberg", team: "sauber" },
    { id: 18, name: "gabriel bortoleto", team: "sauber" },
    { id: 19, name: "esteban ocon", team: "haas" },
    { id: 20, name: "oliver bearman", team: "haas" }
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)
    return { teams };

});


server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)
    return { drivers };

});

interface DriveParams{
    id: string
}

server.get<{Params: DriveParams}>("/drivers/:id", async (request, response) => {
    const id  = parseInt(request.params.id);
    const driver = drivers.find(driver => driver.id === id);

    if(!driver){
        response.type("application/json").code(404)
        return { error: "Driver not found" };
    }

    response.type("application/json").code(200)
    return { driver };

});

server.listen({ port: 3333 }, () => {
    console.log("Server init");

});
