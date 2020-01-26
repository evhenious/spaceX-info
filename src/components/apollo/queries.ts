import { gql } from "apollo-boost";

const getSummary = gql`
  {
    company {
      summary
    }
  }
`;

const getLaunchesTimeline = gql`
  query Launches($offset: Int) {
    launches(sort: "launch_date_utc", limit: 15, offset: $offset) {
      launch_date_utc
      mission_name
      details
      id
    }
  }
`;

export {
  getSummary,
  getLaunchesTimeline
}