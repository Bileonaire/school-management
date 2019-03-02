import gql from 'graphql-tag';

export const STUDENTS_QUERY = gql`
  query {
    students {
      id
      fullName
      classRoom {
        id
        name
      }
      registrationNumber
      phone
      email
      DOB
      joinedAt
      gender
      religion
      guardians {
        id
        fullName
      }
      active
    }
  }
`;

// export const STUDENTS_MUTATION = gql`

// `;
