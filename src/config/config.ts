import dotenv from 'dotenv'

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    socketTimeoutMS : 30000,
    keepAlive : true,
    autoIndex : false,
    retryWrites : true
}


const MONGO_USERNAME = process.env.MONGO_USERNAME || 'adminUser';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'adminUser123';
const MONGO_HOST =  process.env.MONGO_HOST || 'usercrud.4lyvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const MONGO = {
    host : MONGO_HOST,
    options : MONGO_OPTIONS,
    password : MONGO_PASSWORD,
    username : MONGO_USERNAME,
    url : `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
}
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_TOKEN_EXPIRETIME =process.env.SERVER_PORT || 3600;
const SERVER_TOKEN_ISSUER =process.env.SERVER_TOKEN_ISSUER || "coolIssuer"
const SERVER_TOKEN_SECRET =process.env.SERVER_TOKEN_SECRET || "superEnccryptedSecret"

const SERVER = {
    hostname : SERVER_HOSTNAME,
    port: SERVER_PORT,
    token : {
        expireTime : SERVER_TOKEN_EXPIRETIME,
        issuer: SERVER_TOKEN_ISSUER,
        secret : SERVER_TOKEN_SECRET
    }
}

const config = {
    mongo : MONGO,
    server : SERVER
}

export default config