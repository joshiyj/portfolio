// ============================================================
//  Portfolio Data — single source of truth for all content
// ============================================================

export const personal = {
  name: 'Yash Joshi',
  role: 'Full Stack Developer',
  tagline: 'I build <web apps> that solve real problems.',
  description:
    'Full Stack Developer skilled in the MERN stack and AI-powered applications. Turning ideas into scalable, efficient & user-friendly solutions.',
  email: 'yashjoshi7972@gmail.com',
  phone: '+91-7972707958',
  location: 'Nagpur, MH, India',
  github: 'https://github.com/joshiyj',
  linkedin: 'https://www.linkedin.com/in/yash-joshi-b73b1b276',
  resumeUrl: 'Resume_Yash_Joshi.pdf',
  resumeFilename: 'Resume_Yash_Joshi.pdf',
}

export const about = {
  bio: [
    'I am a Computer Science undergraduate with a strong foundation in Data Structures & Algorithms and hands-on experience in full-stack application development. I am passionate about solving real-world problems by building scalable, efficient, and user-centric software solutions.',
    'I thrive in collaborative environments where I can contribute my engineering skills, learn from experienced mentors, and grow alongside a dedicated team of builders.',
  ],
  education: {
    degree: 'B.Tech in Electronics & Computer Science Engineering',
    institution: 'Shri Ramdeobaba College of Engineering & Management',
    location: 'Nagpur, MH',
    duration: 'Aug 2023 – Present',
    cgpa: '9.03',
  },
}

export const projects = [
  {
    id: 'codeinsight',
    icon: 'Terminal',
    title: 'CodeInsight',
    subtitle: 'AI Code Reviewer & Execution Visualizer',
    description:
      'A full-stack AI code review platform supporting Java, Python, JavaScript, C, and C++ with automatic language detection and real-time feedback via SSE. Integrates Monaco Editor diagnostics with Mermaid.js execution flowcharts.',
    github: 'https://github.com/joshiyj/CodeInsight',
    live: 'https://code-insight-beta.vercel.app',
    tech: ['React', 'Node.js', 'Express', 'Groq API', 'Monaco Editor', 'Mermaid.js'],
  },
  {
    id: 'syncnode',
    icon: 'MessageSquare',
    title: 'SyncNode',
    subtitle: 'Real-Time Chat Application',
    description:
      'A full-stack messaging platform with instant chat, online presence tracking, image sharing, and secure JWT authentication. Implements session management and Socket.io for low-latency communication.',
    github: 'https://github.com/joshiyj/Real_Time_Chat_App',
    live: 'https://real-time-chat-app-ofva.onrender.com',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Zustand', 'Tailwind CSS'],
  },
  {
    id: 'attendance',
    icon: 'FileSpreadsheet',
    title: 'Attendance Automator',
    subtitle: 'Excel LMS Parser & Document Generator',
    description:
      'A web application to automate attendance auditing. Features a SheetJS-based parser that handles multi-line records and LMS exports to feed a classification rules engine, and generates automated report documents (.docx).',
    github: 'https://github.com/joshiyj/detention-report-system',
    live: null,
    tech: ['React', 'Node.js', 'SheetJS', 'docx.js', 'Excel Parser', 'Automated Reports'],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'C', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Database',
    items: ['Node.js', 'Express.js', 'MongoDB', 'SQL / Supabase'],
  },
  {
    category: 'Tools & Concepts',
    items: ['Git & GitHub', 'Postman', 'DSA', 'OOPs'],
  },
]

// SVG icon paths per skill item (for inline rendering)
export const skillIcons = {
  Java: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573', fill: '#e76f00', opacity: '1' },
      { d: 'M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118', fill: '#5382a1', opacity: '1' },
      { d: 'M14.802 3.701s2.491 2.493-2.363 6.32c-3.897 3.077-.888 4.832-.001 6.836-2.274-2.052-3.943-3.858-2.824-5.54 1.645-2.469 6.197-3.665 5.188-7.616M9.228 23.763c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639', fill: '#e76f00', opacity: '1' },
    ],
  },
  C: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 18.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5c2.62 0 4.88 1.55 5.89 3.8l-2.61 1.07c-.6-.94-1.65-1.57-2.88-1.57-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.24 0 2.29-.63 2.89-1.57l2.61 1.07c-1.01 2.25-3.27 3.8-5.9 3.8z', fill: '#00599c' },
    ],
  },
  Python: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M11.895 0c-2.316 0-4.342.176-5.748.747-2.062.837-2.302 2.128-2.302 4.195v1.947h8.21v1.16H3.845c-2.12 0-3.845 1.597-3.845 3.73v3.73c0 2.133 1.724 3.73 3.845 3.73h2.368v-3.237c0-2.348 1.95-4.298 4.298-4.298h5.79v-2.32c0-2.068-1.65-4.14-3.714-4.977C15.185.176 13.882 0 11.895 0z', fill: '#3776ab' },
      { d: 'M12.105 24c2.316 0 4.342-.176 5.748-.747 2.062-.837 2.302-2.128 2.302-4.195v-1.947h-8.21v-1.16h8.21c2.12 0 3.845-1.597 3.845-3.73v-3.73c0-2.133-1.724-3.73-3.845-3.73h-2.368v3.237c0 2.348-1.95 4.298-4.298 4.298h-5.79v2.32c0 2.068 1.65 4.14 3.714 4.977C8.815 23.824 10.118 24 12.105 24z', fill: '#ffe873' },
      { d: 'M8.368 2.842a1 1 0 100 2 1 1 0 000-2z', fill: '#ffffff' },
      { d: 'M15.632 21.158a1 1 0 100 2 1 1 0 000-2z', fill: '#111111' },
    ],
  },
  JavaScript: {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M0 0h24v24H0V0z', fill: '#f7df1e' },
      { d: 'M19.78 18.23c-.3.47-.73.84-1.27 1.1s-1.18.39-1.92.39c-.8 0-1.46-.22-1.98-.67s-.87-1.07-.95-1.85h2c.05.47.18.82.38 1.05s.5.34.9.34c.28 0 .5-.07.67-.22s.25-.35.25-.6c0-.2-.06-.37-.18-.5s-.3-.25-.52-.35s-.55-.2-.97-.33c-.76-.23-1.34-.52-1.73-.85a2.76 2.76 0 01-.95-2.17c0-.77.28-1.4.85-1.9s1.34-.75 2.3-.75c.88 0 1.57.22 2.07.67s.78 1.03.85 1.75h-2c-.05-.37-.17-.65-.35-.83s-.45-.27-.8-.27c-.27 0-.48.06-.63.18s-.22.28-.22.48c0 .18.06.32.18.42s.3.2.55.28c.18.06.47.15.85.27.76.23 1.34.52 1.73.87s.64.76.77 1.25.12.98.08 1.5zM12.9 14h2v5.18c0 .7-.17 1.25-.5 1.65s-.85.6-1.58.6c-.68 0-1.18-.18-1.5-.55s-.5-.95-.53-1.73h2c.03.4.1.68.22.85s.28.25.5.25c.23 0 .4-.07.5-.22s.15-.43.15-.83V14z', fill: '#000000' },
    ],
  },
  'HTML5': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm4 17.2L12 19.8l6.5-2.1 1-10.7H4.5l1 8.1zm11.7-5.5h-5.2v2.3h3l-.3 3.4-2.7.9-2.7-.9-.2-2h-2.3l.4 4.3 4.8 1.6 4.8-1.6.7-7.3zM7.1 8h9.8l.2-2.3H4.7l.6 6.3h6.7V9.7H7.3L7.1 8z', fill: '#e34f26' },
    ],
  },
  'CSS3': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm4 17.2L12 19.8l6.5-2.1 1-10.7H4.5l1 8.1zm12-5.5H8.7l-.2-2.3h9.8l.2-2.3H6.1l.6 6.3h8.3l-.3 3.4-2.7.9-2.7-.9-.2-2h-2.3l.4 4.3 4.8 1.6 4.8-1.6.7-7.3z', fill: '#1572b6' },
    ],
  },
  'React.js': {
    viewBox: '-11.5 -10.23 23 20.46',
    special: 'react',
  },
  'Tailwind CSS': {
    viewBox: '0 0 54 33',
    paths: [
      { d: 'M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z', fill: '#38BDF8' },
    ],
  },
  'Node.js': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 24c-.2 0-.4-.1-.6-.2L1.8 18.2c-.4-.2-.6-.7-.6-1.1V6.9c0-.5.2-.9.6-1.1L11.4.2c.4-.2.8-.2 1.2 0l9.6 5.5c.4.2.6.7.6 1.1v10.2c0 .5-.2.9-.6 1.1l-9.6 5.5c-.2.1-.4.2-.6.2zM3.4 16.9l8.6 5 8.6-5V7.1l-8.6-5-8.6 5v9.8z', fill: '#339933' },
    ],
  },
  'Express.js': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M0 0h24v24H0z', fill: '#334155', rx: '4' },
      { text: 'ex', fill: '#FFFFFF' },
    ],
    special: 'express',
  },
  'MongoDB': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 .002C11.666 0 10.75 2.128 10.2 4.14c-1.393 5.094-3.518 9.9-3.518 13.064 0 3.208 2.378 5.765 5.318 6.796V24c0 .002.334.002.334 0v-.002c2.937-1.027 5.318-3.585 5.318-6.793 0-3.167-2.126-7.97-3.518-13.064C13.58.002 12.334 0 12 .002z', fill: '#47a248' },
    ],
  },
  'SQL / Supabase': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 2C6.48 2 2 3.57 2 5.5S6.48 9 12 9s10-1.57 10-3.5S17.52 2 12 2zm0 15c-5.52 0-10-1.57-10-3.5v3.5c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5v-3.5c0 1.93-4.48 3.5-10 3.5zm0-5c-5.52 0-10-1.57-10-3.5v3.5c0 1.93 4.48 3.5 10 3.5s10-1.57 10-3.5v-3.5c0 1.93-4.48 3.5-10 3.5z', fill: '#3ecf8e' },
    ],
  },
  'Git & GitHub': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M23.38 11.41L12.59.62a1.69 1.69 0 00-2.38 0L9 1.82l3.42 3.42c.8.2 1.4.9 1.4 1.7 0 1-.8 1.8-1.8 1.8-.8 0-1.5-.6-1.7-1.4L6.87 5.21 1.62 10.46a1.69 1.69 0 000 2.38l10.79 10.79c.66.66 1.72.66 2.38 0l10.6-10.6a1.69 1.69 0 000-2.62z', fill: '#f05032' },
    ],
  },
  'Postman': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M13.626 4.148c-.688-.69-1.808-.69-2.496 0L1.758 13.567c-.689.69-.689 1.812 0 2.502l6.223 6.24c.688.69 1.808.69 2.496 0l9.372-9.42c.689-.69.689-1.812 0-2.502l-6.223-6.239z', fill: '#ff6c37' },
      { d: 'M14.07 9.87c.75-.75.75-1.97 0-2.72s-1.97-.75-2.72 0l-5.4 5.4c-.75.75-.75 1.97 0 2.72s1.97.75 2.72 0l5.4-5.4z', fill: '#ffffff' },
    ],
  },
  'DSA': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M12 2L2 7l10 5 10-5-10-5z', fill: '#ff5722', opacity: '0.8' },
      { d: 'M2 17l10 5 10-5', stroke: '#ff5722', strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' },
      { d: 'M2 12l10 5 10-5', stroke: '#ff5722', strokeWidth: '2', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' },
    ],
  },
  'OOPs': {
    viewBox: '0 0 24 24',
    paths: [
      { d: 'M2 2h8v8H2z', fill: '#9c27b0', rx: '2', opacity: '0.8' },
      { d: 'M14 2h8v8h-8z', fill: '#9c27b0', rx: '2', opacity: '0.8' },
      { d: 'M2 14h8v8H2z', fill: '#9c27b0', rx: '2', opacity: '0.8' },
      { d: 'M14 14h8v8h-8z', fill: '#9c27b0', rx: '2', opacity: '0.8' },
    ],
  },
}

export const experience = [
  {
    id: 'rbu-intern',
    title: 'Research Intern',
    company: 'Ramdeobaba University (RBU)',
    location: 'Nagpur, India',
    duration: 'June 2026 – Present',
    bullets: [
      'Developed a full-stack <strong>Node.js</strong> and <strong>React</strong> web application to automate attendance auditing and detention report generation, reducing an estimated multi-hour manual process to under 2 minutes.',
      'Built a <strong>SheetJS</strong>-based Excel parser to normalize inconsistent LMS exports — handling multi-line records, embedded percentage strings, and transfer-student edge cases — feeding a rules engine for attendance classification.',
      'Implemented automated <strong>.docx</strong> report generation using the programmatic <strong>docx</strong> Node.js library and a React frontend featuring drag-and-drop uploads, real-time statistics, and one-click downloads.',
    ],
  },
]
