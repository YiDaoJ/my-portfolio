type content_type = { [key: string]: string | string[] };

export interface PortfolioData {
  home: content_type;
  about: content_type;
  contact: content_type;
  projects: content_type;
  common: content_type;
}
