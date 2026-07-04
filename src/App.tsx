import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  LaptopMinimal,
  LayoutGrid,
  Sparkles,
  Users,
} from 'lucide-react';

type SkillGroup = {
  label: string;
  items: string[];
};

type Project = {
  name: string;
  role: string;
  tech: string[];
  summary: string[];
  link: string;
};

const skillGroups: SkillGroup[] = [
  {
    label: 'Programming Languages',
    items: ['C', 'C++', 'Python', 'JavaScript', 'C#', 'Java'],
  },
  {
    label: 'Machine Learning & AI',
    items: ['Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
  },
  {
    label: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    items: ['Flask', 'FastAPI', 'Django', 'REST APIs', 'Streamlit'],
  },
  {
    label: 'AI Automation & Workflow Tools',
    items: ['n8n', 'AI Automation'],
  },
  {
    label: 'Tools & Databases',
    items: ['Git', 'GitHub', 'MySQL', 'MongoDB', 'Microsoft Office Suite'],
  },
];

const projects: Project[] = [
  {
    name: 'Medi Sheba',
    role: 'Full Stack Developer',
    tech: ['Python', 'Django', 'React', 'MySQL'],
    summary: [
      'Built a full-stack healthcare management platform with Django, React, and MySQL.',
      'Designed the application around practical clinic workflows and patient management needs.',
    ],
    link: 'https://github.com/Razon-1/medi-sheba',
  },
  {
    name: 'AI Background Remover',
    role: 'Full Stack Developer',
    tech: ['Python', 'Django', 'Deep Learning'],
    summary: [
      'Created an AI-powered app that removes image backgrounds automatically.',
      'Implemented a simple upload-and-download interface for a smooth user flow.',
    ],
    link: 'https://github.com/Razon-1/bgremover',
  },
  {
    name: 'Fake News Detection using Ensemble Model',
    role: 'Machine Learning Engineer',
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
    summary: [
      'Implemented Random Forest, SVM, and Naive Bayes classifiers with ensemble voting.',
      'Used TF-IDF feature extraction and preprocessing to improve text classification performance.',
    ],
    link: 'https://github.com/Razon-1/Fake-News-Detection',
  },
  {
    name: 'Library Management System',
    role: 'Full Stack Developer',
    tech: ['Flask', 'SQLite', 'Python'],
    summary: [
      'Built admin tools for books, users, transactions, fines, and payments.',
      'Automated fines, notifications, and email or PDF receipts using ReportLab and APScheduler.',
    ],
    link: 'https://github.com/Razon-1/Libary-Management-System',
  },
  {
    name: 'Student Performance Prediction',
    role: 'Data Scientist',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    summary: [
      'Developed predictive analytics for forecasting student academic performance from historical data.',
      'Visualized data insights for decision-making and academic planning.',
    ],
    link: 'https://github.com/Razon-1',
  },
];

const certifications = [
  {
    title: 'Python with Machine Learning',
    href: 'https://drive.google.com/file/d/1XOJxzr7SjI_p4yxGnoJYQOxlXeX35T6R/view',
  },
  {
    title: 'Software Engineer Intern',
    href: 'https://drive.google.com/file/d/1yU3zy0FRlDGzJx_Z1gHJZ-Ke13MXdqix/view?usp=drive_link',
  },
];

const highlights = [
  { value: '5+', label: 'core tech stacks' },
  { value: '5', label: 'featured projects' },
  { value: '2', label: 'certifications listed' },
];

const navItems = [
  { label: 'About', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

function SectionTitle({
  eyebrow, title, description,
}: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-slate-600 md:text-base">{description}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-hero-radial text-slate-900">
      <header className="sticky top-0 z-30 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="display-font text-base font-bold tracking-wide text-slate-950 md:text-lg">
            Sajib Ahmed Razon
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/8801322458732"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-slate-800"
          >
            WhatsApp Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Full Stack Developer, ML Engineer, and AI Automation
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Building reliable web products, data-driven systems, and automation workflows.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Recent Computer Science graduate with hands-on experience in Django, React, machine learning, and AI-driven automation.
                  I build practical products with clean interfaces, solid backend logic, and clear user outcomes.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-700"
                >
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/Razon-1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-950"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sajib-ahmed-razon-5a3b4b337"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-950"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

              <div className="grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white/85 p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="mailto:ahmedrazon58@gmail.com"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-sky-300 hover:bg-sky-50"
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">ahmedrazon58@gmail.com</div>
                </a>
                <a
                  href="tel:+8801322458732"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-sky-300 hover:bg-sky-50"
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Phone</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">+8801322458732</div>
                </a>
                <a
                  href="https://maps.google.com/?q=Dhaka,Bangladesh"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-sky-300 hover:bg-sky-50"
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Location</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">Dhaka, Bangladesh</div>
                </a>
                <a
                  href="https://linkedin.com/in/sajib-ahmed-razon-5a3b4b337"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-sky-300 hover:bg-sky-50"
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">LinkedIn</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">/sajib-ahmed-razon</div>
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-sm backdrop-blur">
                    <div className="text-2xl font-bold text-slate-950">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-sky-300/40 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-glow backdrop-blur-xl sm:p-5">
                <img
                  src="/profile.png"
                  alt="Sajib Ahmed Razon"
                  className="h-[360px] w-full rounded-[1.5rem] object-cover object-top sm:h-[440px]"
                />
                <div className="mt-4 rounded-2xl bg-slate-950 px-4 py-3 text-sm text-slate-200">
                  <p className="font-semibold text-white">Sajib Ahmed Razon</p>
                  <p className="mt-1 text-slate-300">Full Stack Developer | ML Engineer</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <SectionTitle
            eyebrow="Skills"
            title="Core technologies organized by how I use them"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.label} className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <SectionTitle
            eyebrow="Experience"
            title="Professional context and growth"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-glow">
              <div className="flex items-center gap-3 text-sky-300">
                <BriefcaseBusiness className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Internship</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">Software Engineer Intern</h3>
              <p className="mt-2 text-sm text-slate-300">NameSpace IT</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">Jan 2026 - Apr 2026</p>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sky-700">
                <Users className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">What it shows</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>Exposure to real-world team workflows and delivery expectations.</li>
                <li>Alignment with full-stack development practices and professional collaboration.</li>
                <li>Useful context for employers looking for hands-on project experience.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <SectionTitle
            eyebrow="Education"
            title="Academic foundation"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sky-700">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">University</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">B.Sc. in Computer Science and Engineering</h3>
              <p className="mt-2 text-sm text-slate-600">International University of Business Agriculture and Technology (IUBAT)</p>
              <p className="mt-4 text-sm font-semibold text-slate-700">May 2022 - May 2026</p>
            </article>
            <article className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sky-700">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Schooling</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Higher Secondary Certificate (HSC)</h3>
              <p className="mt-2 text-sm text-slate-600">Uttara Govt. College, Dhaka</p>
              <p className="mt-4 text-sm font-semibold text-slate-700">2020</p>
            </article>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work with real implementation details"
            description="These are framed as portfolio cards so recruiters can quickly scan the problem, stack, and outcome."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="group rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{project.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-sky-700">Role: {project.role}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:text-sky-700"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {project.summary.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <SectionTitle
            eyebrow="Certifications & Activities"
            title="Proof of learning and interests"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="space-y-4 rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm lg:col-span-2">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 hover:border-sky-300 hover:bg-sky-50"
                >
                  <span className="font-medium text-slate-800">{cert.title}</span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-500" />
                </a>
              ))}
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <div className="flex items-center gap-2 text-sky-300">
                  <LayoutGrid className="h-4 w-4" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Areas of interest</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Research and continuous learning, deep learning, data science and predictive analytics, artificial intelligence, and competitive programming.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-sky-700">
                <LaptopMinimal className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Languages</span>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <p><span className="font-semibold text-slate-950">Bangla:</span> Native</p>
                <p><span className="font-semibold text-slate-950">English:</span> Conversational</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 text-center text-xs font-semibold text-slate-700">
          <a href="tel:+8801322458732" className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 hover:border-sky-300 hover:bg-sky-50">
            Call
          </a>
          <a href="mailto:ahmedrazon58@gmail.com" className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 hover:border-sky-300 hover:bg-sky-50">
            Email
          </a>
          <a href="https://linkedin.com/in/sajib-ahmed-razon-5a3b4b337" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 hover:border-sky-300 hover:bg-sky-50">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
