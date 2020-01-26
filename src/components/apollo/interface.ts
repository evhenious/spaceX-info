interface iQueryResponse {
  errors: any;
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