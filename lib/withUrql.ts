import { withUrqlClient } from 'next-urql'

const withUrql = (Component) =>
  withUrqlClient({
    url: 'http://localhost:3000/api/graphql',
  })(Component)

export default withUrql
