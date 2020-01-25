import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

// TODO move it to config
const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql'
});

const withApollo = (Component: React.FC) => {
    return (props: any) => <ApolloProvider client={client}>{<Component {...props}/>}</ApolloProvider>
};

export default withApollo;
