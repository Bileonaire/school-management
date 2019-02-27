import gql from 'graphql-tag';


export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
        token
    }
  }
`;
