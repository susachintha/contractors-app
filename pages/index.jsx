import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import ContractorApp from "./ContractorApp";

const Home = ({ data }) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql-data",
  });

  return (
    <ApolloProvider client={client}>
      <div>
          <ContractorApp/>
      </div>
    </ApolloProvider>
  );
};

export default Home;