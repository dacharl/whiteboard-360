interface LaunchDto {
  mission_name?: string;
  launch_site?: {
    site_name_long?: string;
  };
  launch_date_unix?: number;
  rocket?: {
    rocket_name?: string;
  };
}

export default LaunchDto;
