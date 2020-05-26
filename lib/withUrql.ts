import { dedupExchange, cacheExchange, fetchExchange } from '@urql/core'
import { withUrqlClient } from 'next-urql'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const withUrql = (Component) =>
  withUrqlClient((ssrExchange) => ({
    url: `${publicRuntimeConfig.BASE_URL}/api/graphql`,
    exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
  }))(Component)

export default withUrql
