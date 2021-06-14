import { ApolloServer, gql } from "apollo-server-micro";

let contractors = [];

const typeDefs = gql`
  type Contractor {
    name: String!
    telephone: String!
    email: String!
    services: [String!]!
  }
  type Mutation {
    updateContractor(name: String!, telephone: String!, email: String!, services: [String!]!): [Contractor]
  }
  type Query {
    contractors: [Contractor]
  }
`;

const resolvers = {
  Query: {
    contractors: () => contractors,
  },
  Mutation: {
    updateContractor: (root, args) => {
        let cont = {};
        cont.name = args.name;
        cont.telephone = args.telephone;
        cont.email = args.email;
        cont.services = args.services;
      contractors.push(cont);
      return contractors;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;