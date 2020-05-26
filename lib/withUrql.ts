import { withUrqlClient } from 'next-urql'

const withUrql = (Component) =>
  withUrqlClient({
    url: `/api/graphql`,
  })(Component)

export default withUrql
