import gql from 'graphql-tag'
import { useQuery } from 'urql'
import getConfig from 'next/config'

import withUrql from '../lib/withUrql'

const { publicRuntimeConfig } = getConfig()

const HELLO_QUERY = gql`
  query HELLO_QUERY($world: String!) {
    hello(world: $world) {
      name
    }
  }
`

const Home = () => {
  const [result, reexecuteQuery] = useQuery({
    query: HELLO_QUERY,
    variables: { world: 'mars' },
  })
  console.log(result)

  const { data, fetching, error } = result
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  console.log(data)

  return (
    <div>
      <p>{`${publicRuntimeConfig.BASE_URL}/api/graphql`}</p>
      <p>{data?.hello?.name}</p>
      <button onClick={() => reexecuteQuery({ requestPolicy: 'network-only' })}>
        Refetch()
      </button>
    </div>
  )
}

export default withUrql(Home)
