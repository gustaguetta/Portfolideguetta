
import { GoogleGenAI } from "@google/genai";

// Data
const SKILLS = [
  { name: 'Graphic Design', percentage: 97, icon: 'fa-bezier-curve', color: '#f472b6' },
  { name: 'Book Writing', percentage: 87, icon: 'fa-pen-nib', color: '#a78bfa' },
  { name: 'HTML/CSS', percentage: 70, icon: 'fa-code', color: '#60a5fa' },
  { name: 'JS', percentage: 67, icon: 'fa-js', color: '#fbbf24' },
  { name: 'Python', percentage: 50, icon: 'fa-python', color: '#34d399' },
  { name: 'Animation', percentage: 33, icon: 'fa-film', color: '#f87171' },
];

const PROJECTS = [
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

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMarquee();
    initSkills();
    initProjects();
    initAIAssistant();
});

// Navbar logic
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('liquid-glass');
            navbar.classList.remove('py-6');
            navbar.classList.add('py-3');
        } else {
            navbar.classList.remove('liquid-glass');
            navbar.classList.add('py-6');
            navbar.classList.remove('py-3');
        }
    });

    menuToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('opacity-0');
        if (isOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            menuToggle.innerHTML = '<i class="fa-solid fa-xmark text-2xl"></i>';
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered text-2xl"></i>';
        }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            menuToggle.innerHTML = '<i class="fa-solid fa-bars-staggered text-2xl"></i>';
        });
    });
}

// Marquee logic
function initMarquee() {
    const marquee = document.querySelector('.marquee-content');
    const content = `
        <span>GRAPHIC DESIGN</span>
        <span class="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
        <span>WEB ARCHITECTURE</span>
        <span class="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
        <span>LITERARY ART</span>
        <span class="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
        <span>MOTION DESIGN</span>
        <span class="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
    `;
    marquee.innerHTML = content.repeat(10);
}

// Skills logic
function initSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    SKILLS.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'glass-card p-8 hover:bg-white/5 transition-all group';
        card.innerHTML = `
            <div class="flex justify-between items-end mb-6">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i class="fa-brands ${skill.icon} fa-solid text-2xl" style="color: ${skill.color}"></i>
                    </div>
                    <h3 class="font-bold text-lg">${skill.name}</h3>
                </div>
                <span class="text-2xl font-black opacity-30 group-hover:opacity-100 transition-opacity" style="color: ${skill.color}">
                    ${skill.percentage}%
                </span>
            </div>
            <div class="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div class="progress-bar-fill h-full rounded-full transition-all duration-1000 ease-out" style="width: 0%; background-color: ${skill.color}" data-width="${skill.percentage}%"></div>
            </div>
        `;
        grid.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.progress-bar-fill').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }
        });
    }, { threshold: 0.1 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
}

// Projects logic
function initProjects() {
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!grid) return;

    function renderProjects(category) {
        grid.innerHTML = '';
        const filtered = category === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === category);
        
        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'group relative animate-in';
            card.innerHTML = `
                <a href="${project.link || '#'}" class="block relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.tags.map(tag => `<span class="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">${tag}</span>`).join('')}
                        </div>
                    </div>
                </a>
                <div class="px-2">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-blue-400 text-xs font-bold uppercase tracking-widest block">${project.category}</span>
                        ${project.icon ? `<i class="fa-solid ${project.icon} text-slate-500"></i>` : ''}
                    </div>
                    <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        ${project.title}
                    </h3>
                    <p class="text-slate-400 leading-relaxed text-sm line-clamp-2">${project.description}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.getAttribute('data-filter'));
        });
    });

    renderProjects('All');
}

// AI Assistant Logic
function initAIAssistant() {
    const aiToggle = document.getElementById('ai-toggle');
    const aiWindow = document.getElementById('ai-window');
    const aiClose = document.getElementById('ai-close');
    const aiForm = document.getElementById('ai-form');
    const aiInput = document.getElementById('ai-input');
    const aiMessages = document.getElementById('ai-messages');

    if (!aiToggle || !aiWindow || !aiForm) return;

    const SYSTEM_INSTRUCTION = `
        You are the personal AI Assistant for Tinotenda V Tarirai (TAR). 
        Your job is to answer questions about Tinotenda's portfolio, skills, and projects in a professional, witty, and helpful manner.

        Context:
        - Name: Tinotenda V Tarirai (TAR)
        - Status: Software Engineering student at MSU (Midlands State University).
        - Skills: Graphic Design (97%), Book Writing (87%), HTML/CSS (70%), JS (67%), Python (50%), Animation (33%).
        - Projects: Lee Fashions (leefashions.netlify.app), Zimedurank, Uni Assister, SyndiSpace.
        - Books: "Potato Salad" and "St Pinewood St."
        - Email: tinvictar@gmail.com

        Tone: Modern, sleek, professional yet approachable. Keep answers short.
    `;

    aiToggle.addEventListener('click', () => {
        aiWindow.classList.toggle('hidden');
        aiWindow.classList.toggle('flex');
        aiToggle.classList.remove('animate-bounce');
    });

    aiClose.addEventListener('click', () => {
        aiWindow.classList.add('hidden');
        aiWindow.classList.remove('flex');
    });

    aiForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = aiInput.value.trim();
        if (!text) return;

        appendMessage('user', text);
        aiInput.value = '';

        const loadingId = 'loading-' + Date.now();
        appendMessage('assistant', '<div class="flex gap-1"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div><div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div><div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div></div>', loadingId);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: text,
                config: { 
                  systemInstruction: SYSTEM_INSTRUCTION,
                  temperature: 0.7 
                }
            });
            
            const aiText = response.text || "I'm sorry, I couldn't process that.";
            const loadingEl = document.getElementById(loadingId);
            if (loadingEl) loadingEl.innerText = aiText;
        } catch (err) {
            console.error("AI Error:", err);
            const loadingEl = document.getElementById(loadingId);
            if (loadingEl) loadingEl.innerText = "I'm having a bit of trouble thinking right now. Please try again later!";
        }
    });

    function appendMessage(role, content, id = null) {
        const div = document.createElement('div');
        div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
        div.innerHTML = `
            <div id="${id || ''}" class="max-w-[85%] p-3 rounded-2xl text-sm ${
                role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-none'
            }">
                ${content}
            </div>
        `;
        aiMessages.appendChild(div);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
}
