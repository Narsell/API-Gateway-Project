const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ItemAPI = require('./dataSources/inventory_api');
const PaymentsAPI = require('./dataSources/paymentsApi');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        itemAPI: new ItemAPI(),
        paymentsAPI: new PaymentsAPI()
    }),
    introspection: true,
    playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});