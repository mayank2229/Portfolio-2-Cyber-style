export const HERO_CONTENT = "DevOps fresher pursuing MCA in Cloud Technology & DevOps, with hands-on experience in CI/CD pipelines, containerization, and cloud infrastructure using AWS, Kubernetes, and Terraform. Seeking a 6-month DevOps internship to contribute to real-world infrastructure automation and deployment workflows. Available for night shift.";

export const ABOUT_TEXT = "I design, automate, and deploy systems that turn code into production reality. I am a DevOps fresher currently pursuing an MCA in Cloud Technology & DevOps at Poornima University, Jaipur. I have hands-on experience in CI/CD pipelines, containerization, and cloud infrastructure. I focus on crafting scalable infrastructure, clean automation pipelines, and resilient deployments. I work across AWS, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform. Behind the command line, I'm equally comfortable in version control and workflow automation, using Git, GitHub, and Python/Shell scripting to bridge collaboration and delivery. For me, DevOps isn't just about speed—it's about precision, repeatability, and building systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 85 },
  { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud', level: 80 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 80 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 80 },

  // DevOps & Automation
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 85 },
  { name: 'Prometheus', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/prometheus.svg', category: 'devops', level: 75 },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'devops', level: 75 },
  { name: 'Ubuntu Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', category: 'devops', level: 85 },
  { name: 'Red Hat Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg', category: 'devops', level: 70 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 90 },

  // Programming & Scripting
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 80 },
  { name: 'Shell Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'development', level: 80 },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'development', level: 75 },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'development', level: 75 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'development', level: 70 },

  // Database
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 80 },
];

export const PROJECTS = [
  {
    title: 'DevOps CI/CD Pipeline for Automated Deployment',
    image: '/cicd-pipeline.png',
    description: 'Built end-to-end CI/CD pipeline using Jenkins, Docker, Kubernetes, SonarQube, Trivy, Prometheus & Grafana. Automated build, test & deployment on every GitHub push via Jenkins webhooks. Integrated SonarQube for code quality gate + Trivy for vulnerability scanning at both code & image level. Containerized application with Docker, and deployed on Kubernetes for high availability and scalability. Monitored system health and application performance using Prometheus & Grafana dashboards.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube', 'Trivy', 'Prometheus', 'Grafana'],
    category: 'devops',
    githubLink: 'https://github.com/mayank2229',
    websiteLink: '',
  },
  {
    title: 'CI/CD Pipeline with Jenkins & Docker (AWS)',
    image: '/jenkins-docker-aws.png',
    description: 'Deployed an automated CI/CD pipeline on AWS EC2 instances using Jenkins and Docker. Configured GitHub webhooks for real-time continuous integration triggers on push. Containerized a Node.js web application using Docker, creating clean environments and significantly improving deployment speed, consistency, and environment isolation.',
    technologies: ['AWS', 'EC2', 'Jenkins', 'Docker', 'GitHub Webhooks', 'Node.js'],
    category: 'devops',
    githubLink: 'https://github.com/mayank2229',
    websiteLink: '',
  },
];

export const CONTACT = {
  address: 'Jaipur, Rajasthan, India',
  phoneNo: '+91 8619234880',
  email: 'mayankmishra29280@gmail.com',
  social: {
    github: 'https://github.com/mayank2229',
    linkedin: 'https://www.linkedin.com/in/mayank-mishra-3353972a8/',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
