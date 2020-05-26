import { withUrqlClient } from 'next-urql'

const withUrql = (Component) =>
  withUrqlClient({
    url: `${process.env.BASE_URL}/api/graphql`,
  })(Component)

export default withUrql
