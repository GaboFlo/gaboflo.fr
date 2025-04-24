export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  status: "live" | "upcoming";
  icon: string;
  githubUrl: string;
}
