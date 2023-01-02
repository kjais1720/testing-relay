import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import { render, screen } from '@testing-library/react'
import DesignationList from '../components/DesignationList'
import Wrapper from '../Wrapper'
import { createMockEnvironment, MockPayloadGenerator, MockEnvironment } from 'relay-test-utils'
import reactTestRenderer from 'react-test-renderer'
import { DesignationMaster_designations} from "../__generated__/DesignationMaster_designations.graphql"
import "@testing-library/jest-dom"
const TestRenderer = ({environment}:{environment:MockEnvironment})=>(
  <QueryRenderer
      environment={environment}
      query={graphql`
      query DesignationPageQuery @relay_test_operation{
          ...DesignationMaster_designations @arguments(parent: "$parent")
      }
  `}
      variables={{ parent: 'tredrdhhh' }}
      render={({ error, props }) => {
          if (props) {
              console.log(props)
              return <div>jest</div>
          } else if (error) {
              return error.message
          }
          return <div data-testId="loader">
            Loading...
          </div>
      }}
  />
)

fit("Should show loader while data is being fetched",()=>{
  const environment = createMockEnvironment()
  const renderer = reactTestRenderer.create(<TestRenderer environment={environment}/>)
  expect(
    renderer.root.find(node=>node.props["data-testId"] === "loader")
  ).toBeDefined()
})

it('Fragment Container', () => {
    const environment = createMockEnvironment()
    const renderer = reactTestRenderer.create(<TestRenderer environment={environment}/>)

    environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation, {
            ID(_, generateId) {
                return `my-id-${generateId()}`
            },
            String(context) {
                return 'Satya'
            },
        })
    )

    expect(renderer).toMatchSnapshot()
})
