import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github as LucideGithub, Code2, Cloud, Server, Database, Workflow, Shield, Container, Globe, ChevronDown } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const projectsPerPage = 6;
  // AWS Solutions Projects
  const awsProjects = [
    {
      id: "ppt-design-security",
      name: "PPT-Design.com Security & Deployment",
      client: "Design Agency",
      description: "Secured a hacked website by implementing AWS WAF, security configurations, and proper deployment practices. Enhanced overall security posture and prevented future attacks.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      url: "https://ppt-design.com/",
      features: [
        "AWS WAF implementation and configuration",
        "Security hardening and vulnerability patching",
        "DDoS protection setup",
        "SSL/TLS certificate management",
        "Security monitoring and alerts",
        "Firewall rules and access control",
        "Backup and disaster recovery setup",
        "Performance optimization"
      ],
      technologies: ["AWS", "AWS WAF", "CloudFront", "Route 53", "CloudWatch", "Security Groups"],
      results: [
        { metric: "Security Incidents", value: "0 after fix" },
        { metric: "Uptime", value: "99.99%" },
        { metric: "Performance", value: "+40%" }
      ],
      icon: Shield,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-600/10"
    },
    {
      id: "lambda-playwright",
      name: "AWS Lambda Deployment with Playwright",
      client: "Web Scraping Company",
      description: "Deployed Python 3.11 web scraping solution on AWS Lambda using Playwright and Chrome. Implemented efficient layer-based deployment for serverless scraping at scale.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      url: "#",
      features: [
        "AWS Lambda layer configuration",
        "Playwright browser automation",
        "Python 3.11 runtime setup",
        "Chrome headless browser integration",
        "Serverless scraping architecture",
        "Cost-effective scaling",
        "Error handling and retries",
        "CloudWatch logging integration"
      ],
      technologies: ["AWS Lambda", "Python 3.11", "Playwright", "Chrome", "Lambda Layers", "CloudWatch"],
      results: [
        { metric: "Cost Reduction", value: "70%" },
        { metric: "Scalability", value: "1000+ concurrent" },
        { metric: "Cold Start", value: "<3s" }
      ],
      icon: Workflow,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10"
    },
    {
      id: "livekit-aws-ecs",
      name: "LiveKit Audio Recording on AWS ECS",
      client: "Audio Streaming Platform",
      description: "Deployed LiveKit agent and server with audio room recording capabilities using LiveKit Egress on AWS ECS. Migrated from local environment to production-ready cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1590935216596-74e484da7c05?w=800&q=80",
      url: "#",
      features: [
        "AWS ECS cluster setup",
        "LiveKit server deployment",
        "LiveKit agent configuration",
        "Audio recording with LiveKit Egress",
        "S3 storage for recordings",
        "Load balancing and auto-scaling",
        "Container orchestration",
        "Network security configuration"
      ],
      technologies: ["AWS ECS", "LiveKit", "LiveKit Egress", "Docker", "S3", "Application Load Balancer"],
      results: [
        { metric: "Concurrent Rooms", value: "500+" },
        { metric: "Recording Quality", value: "HD Audio" },
        { metric: "Uptime", value: "99.95%" }
      ],
      icon: Container,
      gradient: "from-slate-500 to-blue-600",
      bgGradient: "from-slate-500/10 to-blue-600/10"
    },
    {
      id: "grails-aws-ec2",
      name: "Grails/Java AWS EC2 Migration",
      client: "Enterprise Software Company",
      description: "Migrated Grails/Java application from Elastic Beanstalk to single EC2 instance with automated GitHub deployments. Configured Tomcat/httpd and streamlined deployment process.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      url: "#",
      features: [
        "EC2 instance setup and optimization",
        "Migration from Elastic Beanstalk",
        "Tomcat/Apache HTTP server configuration",
        "GitHub automated deployment setup",
        "Build automation from GitHub commits",
        "Security group configuration",
        "Application monitoring",
        "Backup and recovery setup"
      ],
      technologies: ["AWS EC2", "Java", "Grails", "Tomcat", "Apache httpd", "GitHub", "Shell Scripts"],
      results: [
        { metric: "Infrastructure Cost", value: "-60%" },
        { metric: "Deployment", value: "Automated" },
        { metric: "Performance", value: "Maintained" }
      ],
      icon: Server,
      gradient: "from-blue-600 to-slate-600",
      bgGradient: "from-blue-600/10 to-slate-600/10"
    }
  ];

  // GCP & Azure Projects
  const gcpAzureProjects = [
    {
      id: "azure-redirect-fix",
      name: "Azure HTTP/HTTPS Redirect Fix",
      client: "Event Management Platform",
      description: "Resolved critical HTTP/HTTPS redirect issues, 404 errors after page refresh, and guest list display problems in an Azure-hosted app with Python backend and React frontend.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      url: "#",
      features: [
        "Azure App Service configuration",
        "URL rewrite rules implementation",
        "SPA routing fixes",
        "SSL/TLS configuration",
        "React frontend debugging",
        "Python backend optimization",
        "Session management fixes",
        "Production deployment best practices"
      ],
      technologies: ["Azure App Service", "Python", "React", "Azure SQL", "Application Insights"],
      results: [
        { metric: "404 Errors", value: "Eliminated" },
        { metric: "Redirect Issues", value: "Fixed" },
        { metric: "User Experience", value: "Seamless" }
      ],
      icon: Globe,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-500/10 to-indigo-600/10"
    },
    {
      id: "laravel-azure",
      name: "Laravel App Deployment on Azure",
      client: "E-Commerce Startup",
      description: "Rapid deployment of Laravel application to Azure App Service with GitHub integration for automated deployments. Completed within hours with full CI/CD pipeline.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      url: "https://e-skupstina-frontend.azurewebsites.net/",
      features: [
        "Azure App Service configuration for PHP",
        "GitHub Actions CI/CD pipeline",
        "Database migration automation",
        "Environment configuration management",
        "Laravel optimization for Azure",
        "Automated deployments from GitHub",
        "Custom domain and SSL setup",
        "Application monitoring"
      ],
      technologies: ["Laravel", "Azure App Service", "GitHub Actions", "MySQL", "PHP", "Composer"],
      results: [
        { metric: "Deployment Time", value: "2 hours" },
        { metric: "Automation", value: "100%" },
        { metric: "Build Success", value: "98%" }
      ],
      icon: Cloud,
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-500/10 to-blue-600/10"
    },
    {
      id: "gcp-firebase-ocr",
      name: "Google Cloud & Firebase OCR Setup",
      client: "Document Processing Startup",
      description: "Configured comprehensive Google Cloud and Firebase environment for OCR project including Vision API, Firestore, Firebase Functions, and secure authentication.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      url: "#",
      features: [
        "Google Cloud Platform setup",
        "Google Vision API integration",
        "Firebase Firestore configuration",
        "Firebase Functions for backend logic",
        "OAuth 2.0 authentication",
        "Secure API key management",
        "User authentication implementation",
        "Backend service integration"
      ],
      technologies: ["Google Cloud Platform", "Firebase", "Google Vision API", "Firestore", "Firebase Functions", "OAuth 2.0"],
      results: [
        { metric: "OCR Accuracy", value: "98%" },
        { metric: "Processing Speed", value: "<2s" },
        { metric: "Security", value: "Enterprise-grade" }
      ],
      icon: Database,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10"
    },
    {
      id: "gcp-terraform-nonprofit",
      name: "GCP Terraform for Non-Profit",
      client: "Pro-Democracy Non-Profit",
      description: "Built production-ready Terraform infrastructure deploying React frontend and SpringBoot backend to GCP CloudRun using GitHub Actions and Workload Identity Federation. Implemented staging environment, CDN, and performance optimization.",
      image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?w=800&q=80",
      url: "#",
      features: [
        "Terraform infrastructure as code",
        "GCP CloudRun deployment",
        "GitHub Actions CI/CD pipeline",
        "Workload Identity Federation",
        "CDN configuration for performance",
        "Multi-environment setup (staging/production)",
        "Security best practices implementation",
        "Performance testing and scaling"
      ],
      technologies: ["GCP", "Terraform", "CloudRun", "GitHub Actions", "React", "SpringBoot", "Cloud CDN"],
      results: [
        { metric: "Deployment Time", value: "-80%" },
        { metric: "Infrastructure", value: "IaC" },
        { metric: "Environments", value: "Multi-stage" }
      ],
      icon: Workflow,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-600/10"
    }
  ];

  // DevOps & Cloud Projects
  const devopsProjects = [
    {
      id: "laravel-docker-nginx",
      name: "Laravel on Docker with Nginx",
      client: "Digital Agency",
      description: "Fixed and deployed Laravel application on DigitalOcean using Docker and Nginx with proper domain configuration. Resolved configuration issues and established working production environment.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
      url: "#",
      features: [
        "Docker containerization",
        "Nginx web server configuration",
        "DigitalOcean droplet setup",
        "Domain name configuration",
        "SSL certificate installation",
        "Docker Compose orchestration",
        "Environment variable management",
        "Debugging and troubleshooting"
      ],
      technologies: ["Docker", "Nginx", "Laravel", "DigitalOcean", "Docker Compose", "Let's Encrypt"],
      results: [
        { metric: "Setup Time", value: "4 hours" },
        { metric: "Domain Status", value: "Live" },
        { metric: "SSL", value: "Secured" }
      ],
      icon: Container,
      gradient: "from-slate-500 to-cyan-600",
      bgGradient: "from-slate-500/10 to-cyan-600/10"
    },
    {
      id: "flask-deployment",
      name: "Flask Website Deployment with Custom Domain",
      client: "Healthcare Platform (MediSync USA)",
      description: "Deployed Flask-based website from Replit to production hosting (Render/Heroku) with custom domain configuration. Ensured all static files load correctly and site is fully functional.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      url: "#",
      features: [
        "Flask application deployment",
        "Migration from Replit to production hosting",
        "Custom domain configuration (medisyncusa.com)",
        "DNS setup (CNAME & A Records)",
        "Static file serving optimization",
        "Environment configuration",
        "Testing and verification",
        "Optional static site conversion"
      ],
      technologies: ["Flask", "Python", "Render", "Heroku", "HTML/CSS/JS", "DNS", "Gunicorn"],
      results: [
        { metric: "Domain", value: "Connected" },
        { metric: "Load Time", value: "<2s" },
        { metric: "Availability", value: "99.9%" }
      ],
      icon: Server,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10"
    },
    {
      id: "linux-server-admin",
      name: "Linux Server Administration",
      client: "Multiple Enterprise Clients",
      description: "Comprehensive Linux system administration including server management, Nginx configuration, MySQL optimization, security updates, and system monitoring for enterprise clients.",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      url: "#",
      features: [
        "Linux server administration (Ubuntu, CentOS)",
        "Nginx web server optimization",
        "MySQL database management and tuning",
        "Security patches and updates",
        "System monitoring and alerts",
        "Backup strategies implementation",
        "Performance monitoring and optimization",
        "Technical documentation"
      ],
      technologies: ["Linux", "Ubuntu", "CentOS", "Nginx", "MySQL", "Bash", "Python", "Monitoring Tools"],
      results: [
        { metric: "Uptime", value: "99.95%" },
        { metric: "Security Updates", value: "100%" },
        { metric: "Performance", value: "+35%" }
      ],
      icon: Server,
      gradient: "from-slate-600 to-blue-600",
      bgGradient: "from-slate-600/10 to-blue-600/10"
    },
    {
      id: "git-vps-deployment",
      name: "Git to VPS Auto-Deployment",
      client: "SaaS Startup (HireIQ)",
      description: "Configured automated deployment pipeline from GitHub to VPS with auto-deploy on commit. Set up TypeScript SaaS application with backend and frontend, including domain configuration.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      url: "#",
      features: [
        "VPS server configuration",
        "GitHub webhook integration",
        "Automated deployment on git push",
        "TypeScript application setup",
        "Backend and frontend deployment",
        "Domain name configuration",
        "Environment-based deployments",
        "Process management with PM2"
      ],
      technologies: ["VPS", "GitHub", "TypeScript", "Node.js", "Nginx", "PM2", "Git Hooks"],
      results: [
        { metric: "Deployment", value: "Automated" },
        { metric: "Deploy Time", value: "<3 min" },
        { metric: "Reliability", value: "100%" }
      ],
      icon: Workflow,
      gradient: "from-blue-500 to-slate-600",
      bgGradient: "from-blue-500/10 to-slate-600/10"
    },
    {
      id: "taiga-smtp-docker",
      name: "Taiga SMTP Configuration in Docker",
      client: "Project Management Team",
      description: "Fixed SMTP email configuration for self-hosted Taiga.io installation running in Docker. Debugged and resolved email sending issues with proper SMTP settings.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
      url: "#",
      features: [
        "Taiga.io self-hosted setup",
        "Docker container configuration",
        "SMTP server integration",
        "Email debugging and testing",
        "Environment variable configuration",
        "Docker network troubleshooting",
        "Email delivery verification",
        "Documentation for future maintenance"
      ],
      technologies: ["Docker", "Taiga.io", "SMTP", "Python", "Docker Compose", "Email Services"],
      results: [
        { metric: "Email Delivery", value: "100%" },
        { metric: "Configuration", value: "Fixed" },
        { metric: "System Status", value: "Stable" }
      ],
      icon: Container,
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-600/10 to-blue-600/10"
    }
  ];

  // Combine all projects
  const allProjects = [...awsProjects, ...gcpAzureProjects, ...devopsProjects];
  
  // Get visible projects
  const displayedProjects = allProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < allProjects.length;
  
  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + projectsPerPage, allProjects.length));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Cloud infrastructure solutions, CI/CD pipelines, and DevOps automation across AWS, Azure, and GCP
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Icon */}
              <div className="absolute -top-6 left-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 pt-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {project.client}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full group-hover/item:scale-125 transition-transform duration-200`} />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div className="mb-6 grid grid-cols-3 gap-3">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{result.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-slate-500/20 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                {project.url && project.url !== "#" && (
                  <div className="flex space-x-4">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                      >
                        <Code2 className="w-4 h-4" />
                        <span>View Project</span>
                      </motion.button>
                    </a>
                  </div>
                )}
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${project.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>See More Projects</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        )}

        {/* View All Projects on GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a href="https://github.com/Vivekworks114" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <LucideGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
