interface iQueryResponse {
  error?: any;
  loading: boolean;
  data: any;
}

export interface iGeneralInfo extends iQueryResponse {
  data: {
    company: {
      summary: string
    }
  }
}

export interface iLaunch {
  launch_date_utc: string;
  mission_name: string;
  details: string;
  id: string;
}

export interface iQueryLaunches extends iQueryResponse {
  data: {
    launches: iLaunch[]
  },
  fetchMore(options: {[key: string]: any}): void;
}

export interface iLaunchData {
  launch_site: {
    site_name_long: string
  },
  launch_success: boolean,
  rocket: {
    rocket_name: string,
    rocket_type: string
  },
  links: {
    article_link: string,
    mission_patch_small: string
  }
}

export interface iQueryLaunchData extends iQueryResponse {
  data: {
    launch: iLaunchData
  }
}