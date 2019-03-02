import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { HttpHeaders } from '@angular/common/http';
import { Apollo } from 'apollo-angular';

const uri = 'https://1e30329e.ngrok.io/graphql/'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink, apollo: Apollo) {
  const http = httpLink.create({ uri: uri });

  const auth = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return {};
    } else {
      return {
        headers: new HttpHeaders().set('Authorization', `JWT ${token}`),
      };
    }
  });
  return {
    link: auth.concat(http),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
