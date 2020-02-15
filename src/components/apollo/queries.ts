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

const getLaunchData = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      launch_site {
        site_name_long
      }
      launch_success
      rocket {
        rocket_name
        rocket_type
      }
      links {
        article_link
        mission_patch_small
      }
    }
  }
`;

export {
  getSummary,
  getLaunchesTimeline,
  getLaunchData
}