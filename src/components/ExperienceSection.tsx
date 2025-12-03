import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experience = {
    title: "DevOps Engineer",
    company: "Freelance & Contract",
    duration: "2019 - Present",
    location: "Remote",
    highlights: [
      "Designed and implemented cloud infrastructure solutions on AWS, Azure, and GCP for enterprise clients.",
      "Built and maintained CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI/CD for automated deployments.",
      "Containerized applications using Docker and orchestrated with Kubernetes (EKS & ECS) for scalable deployments.",
      "Implemented Infrastructure as Code (IaC) using Terraform and CloudFormation for repeatable infrastructure deployments.",
      "Configured monitoring and logging solutions using CloudWatch, Nagios, and ELK Stack for system observability.",
      "Managed web servers (Apache, Nginx, LiteSpeed) and load balancers (HA-Proxy) for high-availability systems."
    ]
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            Work <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey building scalable cloud infrastructure, automation pipelines, and DevOps solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, rotateX: 2 }}
            className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Company Logo/Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="mb-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {experience.company}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                    Recent Work
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Achievements & Responsibilities
              </h4>
              <div className="space-y-4">
                {experience.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Python', 'BASH', 'YAML', 'CloudWatch', 'ELK Stack', 'Nginx', 'MySQL'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-slate-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;