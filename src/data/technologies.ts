import { Technology } from '../types';

import JavaLogo from '/public/tech-logos/java-white.svg';
import SpringLogo from '/public/tech-logos/spring-white.svg';
import JenkinsLogo from '/public/tech-logos/jenkins-white.svg';
import KubernetesLogo from '/public/tech-logos/kubernetes-white.svg';
import GithubLogo from '/public/tech-logos/github-white.svg';
import DockerLogo from '/public/tech-logos/docker-white.svg';
import ReactLogo from '/public/tech-logos/react-white.svg';
import NodeLogo from '/public/tech-logos/nodejs-white.svg';
import PythonLogo from '/public/tech-logos/python-white.svg';
import AwsLogo from '/public/tech-logos/aws-white.svg';
// import AzureLogo from '/public/tech-logos/azure-white.svg';
// import GcpLogo from '/public/tech-logos/gcp-white.svg';
import AndroidLogo from '/public/tech-logos/android-white.svg';
import AppleLogo from '/public/tech-logos/apple-white.svg';
import TypeScriptLogo from '/public/tech-logos/typescript-white.svg'
import JavaScriptLogo from '/public/tech-logos/javascript-white.svg'
import TailwindCssLogo from '/public/tech-logos/tailwindcss-white.svg'
import AILogo from '/public/tech-logos/ai-white.svg';
import DevopsLogo from '/public/tech-logos/devops-white.svg';
import PlaywrightLogo from '/public/tech-logos/playwright-white.svg';
import JMeterLogo from '/public/tech-logos/jmeter-white.svg';

// recommend website for logo download: https://www.svgrepo.com/vectors
export const technologies: Technology[] = [
    { name: 'Java', logo: JavaLogo },
    { name: 'Spring Boot', logo: SpringLogo },
    { name: 'React', logo: ReactLogo },
    { name: 'Node.js', logo: NodeLogo },
    { name: 'JavaScript', logo: JavaScriptLogo },
    { name: 'TypeScript', logo: TypeScriptLogo },
    { name: 'Tailwind CSS', logo: TailwindCssLogo },
    { name: 'Docker', logo: DockerLogo },
    { name: 'GitHub', logo: GithubLogo },
    { name: 'Jenkins', logo: JenkinsLogo },
    { name: 'Python', logo: PythonLogo },
    { name: 'Kubernetes', logo: KubernetesLogo },
    { name: 'AWS', logo: AwsLogo },
    // { name: 'Azure', logo: AzureLogo },
    // { name: 'GCP', logo: GcpLogo },
    { name: 'Android', logo: AndroidLogo },
    { name: 'Apple', logo: AppleLogo },
    { name: 'AI/ML', logo: AILogo },
    { name: 'Devops', logo: DevopsLogo },
    { name: 'Playwright', logo: PlaywrightLogo },
    { name: 'JMeter', logo: JMeterLogo },

];