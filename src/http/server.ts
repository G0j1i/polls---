import fastify from "fastify";
import cookie from '@fastify/cookie';
import websocket from "@fastify/websocket";
import { createPoll} from "./rotes/create-poll";
import { getPoll } from "./rotes/get-poll";
import { voteOnPoll } from "./rotes/vote-on-poll";
import { pollResults } from "./ws/poll-results";

const app = fastify()

app.register(cookie, {
    secret: "polls-app-nlw",
    hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})

