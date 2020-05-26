import { withUrqlClient } from 'next-urql'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const withUrql = (Component) =>
  withUrqlClient({
    url: `${publicRuntimeConfig.BASE_URL}/api/graphql`,
  })(Component)

export default withUrql
