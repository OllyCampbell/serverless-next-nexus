import { dedupExchange, cacheExchange, fetchExchange } from '@urql/core'
import { withUrqlClient } from 'next-urql'

const withUrql = (Component) =>
  withUrqlClient((ssrExchange) => ({
    url: `/api/graphql`,
    exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
  }))(Component)

export default withUrql
