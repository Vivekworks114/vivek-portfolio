import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Code, GraduationCap, Star, Zap, Rocket } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: "5+ Years DevOps Experience",
      description: "Successfully delivered 100+ cloud infrastructure projects across AWS, Azure, and GCP. Specialized in CI/CD pipelines, containerization, and infrastructure automation.",
      icon: Rocket,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-600/10",
      stats: "100+ Cloud Projects",
      type: "experience"
    },
    {
      title: "Multi-Cloud Expertise",
      description: "Expert in AWS, Azure, and GCP with hands-on experience in ECS, EKS, CloudRun, App Service, and various cloud-native services. Delivered scalable, secure infrastructure solutions.",
      icon: Zap,
      gradient: "from-slate-500 to-blue-600",
      bgGradient: "from-slate-500/10 to-blue-600/10",
      stats: "AWS, Azure, GCP",
      type: "expertise"
    },
    {
      title: "CI/CD & Automation Mastery",
      description: "Built and maintained CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI/CD. Implemented Infrastructure as Code with Terraform and Ansible for automated deployments.",
      icon: Code,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10",
      stats: "Automated Pipelines",
      type: "technical"
    },
    {
      title: "Container & Orchestration",
      description: "Expert in Docker containerization and Kubernetes orchestration (EKS & ECS). Deployed and managed containerized applications at scale with high availability and performance.",
      icon: Trophy,
      gradient: "from-blue-600 to-slate-600",
      bgGradient: "from-blue-600/10 to-slate-600/10",
      stats: "Kubernetes & Docker",
      type: "skills"
    }
  ];


  const certifications = [
    {
      title: "Cloud Infrastructure Specialist",
      issuer: "AWS, Azure, GCP",
      description: "Expert-level proficiency in designing and implementing cloud infrastructure solutions across multiple platforms. Specialized in scalable, secure, and cost-effective cloud architectures.",
      icon: Star,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "DevOps & Automation Engineer",
      issuer: "Kubernetes, Docker, CI/CD",
      description: "Professional expertise in containerization, orchestration, and CI/CD pipeline automation. Implemented Infrastructure as Code using Terraform and Ansible.",
      icon: Award,
      gradient: "from-slate-500 to-blue-600"
    },
    {
      title: "Infrastructure as Code",
      issuer: "Terraform, Ansible, CloudFormation",
      description: "Proven experience in IaC practices, automated infrastructure provisioning, and configuration management. Delivered repeatable, scalable infrastructure deployments.",
      icon: Rocket,
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition of excellence in DevOps engineering, cloud infrastructure, and automation expertise
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            🏆 Key Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 50 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/30 transform-gpu cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-12 h-12 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-200">
                      {achievement.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                    {achievement.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${achievement.gradient} bg-opacity-10 border border-current rounded-full text-sm font-semibold`}
                    style={{ 
                      background: `linear-gradient(to right, ${achievement.gradient.includes('orange') ? 'rgb(249 115 22 / 0.1)' : achievement.gradient.includes('yellow') ? 'rgb(245 158 11 / 0.1)' : achievement.gradient.includes('green') ? 'rgb(34 197 94 / 0.1)' : 'rgb(59 130 246 / 0.1)'}, ${achievement.gradient.includes('orange') ? 'rgb(220 38 38 / 0.1)' : achievement.gradient.includes('yellow') ? 'rgb(249 115 22 / 0.1)' : achievement.gradient.includes('green') ? 'rgb(5 150 105 / 0.1)' : 'rgb(147 51 234 / 0.1)'})`,
                      color: achievement.gradient.includes('orange') ? 'rgb(194 65 12)' : achievement.gradient.includes('yellow') ? 'rgb(217 119 6)' : achievement.gradient.includes('green') ? 'rgb(21 128 61)' : 'rgb(37 99 235)'
                    }}
                  >
                    {achievement.stats}
                  </div>
                </div>

                {/* Decorative corner */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${achievement.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            📜 Professional Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-gray-700/40 transform-gpu"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                    </div>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            <span>Let's Collaborate on Your Next Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
