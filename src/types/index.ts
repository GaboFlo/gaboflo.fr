export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  urlTestEnabled: boolean;
  status: "live" | "upcoming";
  icon: string;
  githubUrl: string;
  customLinks?: Array<{
    icon: string;
    url: string;
    label: string;
    enabled?: boolean;
    svgPath?: string;
  }>;
}
