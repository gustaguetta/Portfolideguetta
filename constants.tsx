
import { Skill, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'Graphic Design', percentage: 97, icon: 'fa-bezier-curve', color: '#f472b6' },
  { name: 'Book Writing', percentage: 87, icon: 'fa-pen-nib', color: '#a78bfa' },
  { name: 'HTML/CSS', percentage: 70, icon: 'fa-code', color: '#60a5fa' },
  { name: 'JS', percentage: 67, icon: 'fa-js', color: '#fbbf24' },
  { name: 'Python', percentage: 50, icon: 'fa-python', color: '#34d399' },
  { name: 'Animation', percentage: 33, icon: 'fa-film', color: '#f87171' },
];

export const PROJECTS: Project[] = [
  {
    id: 'lee-fashions',
    title: 'Lee Fashions',
    category: 'Web',
    description: "A premium bespoke tailor's platform where clients can browse collections and place custom clothing orders directly.",
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&h=600&auto=format&fit=crop',
    tags: ['E-commerce', 'Tailoring', 'React'],
    link: 'https://leefashions.netlify.app'
  },
  {
    id: 'zimedurank',
    title: 'Zimedurank',
    category: 'Web',
    description: 'The definitive ranking website for Zimbabwean schools, providing performance analytics and comparative metrics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop',
    tags: ['Education', 'Ranking', 'Data'],
    icon: 'fa-up-down'
  },
  {
    id: 'uni-assister',
    title: 'Uni Assister',
    category: 'App',
    description: 'An intelligent companion for university applicants, simplifying the complex process of global college admissions.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&h=600&auto=format&fit=crop',
    tags: ['Productivity', 'Higher Ed', 'SaaS'],
  },
  {
    id: 'syndispace',
    title: 'SyndiSpace',
    category: 'App',
    description: 'Where you find your people. A social discovery platform built for meaningful community building.',
    image: 'https://placehold.co/800x600/3b82f6/white?text=SYNDI&font=montserrat',
    tags: ['Community', 'Social', 'App'],
  },
  {
    id: 'potato-salad',
    title: 'Potato Salad',
    category: 'Book',
    description: 'A captivating literary work exploring unique narratives and culinary metaphors in modern storytelling.',
    image: 'https://feelgoodfoodie.net/wp-content/uploads/2023/04/Mustard-Potato-Salad-08.jpg',
    tags: ['Literature', 'Fiction'],
  },
  {
    id: 'st-pinewood-st',
    title: 'St Pinewood St.',
    category: 'Book',
    description: 'An immersive journey through St Pinewood St., weaving tales of mystery and urban legacy.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&h=600&auto=format&fit=crop',
    tags: ['Mystery', 'Novel'],
  },
];
