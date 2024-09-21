import React from "react";
import { ApolloClient,InMemoryCache,ApolloProvider,gql,useQuery } from "@apollo/client";

const App = () => {

//   const client = new ApolloClient({
//     uri: "https://flyby-router-demo.herokuapp.com/",
//     cache: new InMemoryCache(),
//   });

// client
// .query({
//   query: gql`
//     query GetLocations {
//       locations {
//         id
//         name
//         description
//         photo
//       }
//     }
//   `,
// })
// .then((result) => console.log(result));

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;
const getUserData=gql`
query userData {
  getAllUsers {
    name
    email
  }
}
`
// const { loading, error, data } = useQuery(GET_LOCATIONS);
const { loading, error, data } = useQuery(getUserData);

console.log(data)
// const userData=gql`
//   query getUserdata {
//     name,
//     username,
//     email
//   }
// `
// console.log(userData)
// if (loading) return <p>Loading...</p>;
// if (error) return <p>Error : {error.message}</p>;

// return data.locations.map(({ id, name, description, photo }) => (
//   <div key={id}>
//     <h3>{name}</h3>
//     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//     <br />
//     <b>About this location:</b>
//     <p>{description}</p>
//     <br />
//   </div>
// )

// );
}
export default App;
