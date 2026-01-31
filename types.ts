
export interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Book' | 'Design' | 'App';
  description: string;
  image: string;
  tags: string[];
  link?: string;
  icon?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
