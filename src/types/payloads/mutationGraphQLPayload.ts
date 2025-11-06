export interface GraphQLReqBody {
  query: string
  operationName: string,
  variables: {
    input: string
  }
}