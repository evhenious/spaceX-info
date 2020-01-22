import { gql } from "apollo-boost";

const getSummary = gql`
  {
    company {
      summary
    }
  }
`;

const getLaunchesTimeline = gql`
  {
    launches(sort: "launch_date_utc", limit: 10) {
      launch_date_utc
      mission_name
      details
    }
  }
`;

export {
  getSummary,
  getLaunchesTimeline
}