import { AzureKeyCredential, OpenAIClient } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_APIKEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST (req) {
    const { messages } = await req.json();
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

    // Add a resume and set up proper system messages

    messages.unshift({
        role: `system`,
        content: `You are myPortfolioGPT, answering only questions based on
        the resume provided.
        Resume:
        ${DATA_RESUME}
        Help user learn more about Jayce from his resume.`
    })


    const response = await client.getChatCompletions(model, messages, {maxTokens: 128,})

    return NextResponse.json({
        message: response.choices[0].message.content
    })
}

const DATA_RESUME = `
Preferred first name; Jayce
Lastname: Turambe

8100 S Congress Ave, Austin, TX 78745 | (512) 771-1378 | jturambe@gmail.com | LinkedIn | GitHub | Portfolio

Summary Of Qualifications
Proficient Full-Stack Developer with 3+ years of hands-on experience in designing, delivering, and maintaining robust web applications using React, Node.js, and related technologies.
Skilled in multiple programming languages including Java, Python, JavaScript, and C++, with a solid understanding of programming principles, data structures, and algorithms.
Experienced in both front-end and back-end development, adept at implementing software development best practices and principles.
Proficient in serverless technologies such as AWS.
Effective problem solver with the ability to analyze and debug complex software issues.
Strong communication and interpersonal skills, adaptable to fast-paced, collaborative team environments, and capable of adjusting to changing project requirements and priorities.
Detail-oriented, self-motivated, and eager to learn and adapt to new technologies and methodologies.

Skills & Technology
Programming Languages: Java, C++, Python, JavaScript, Go
Front-end: JavaScript, TypeScript, React.JS, Redux, Firebase, Tailwind css, CSS3, HTML5 
Back-end: Node.JS, Express.JS, Express.js, Flask, Spring Boot, Django, JWT, Nodemailer
Databases: MongoDB, SQL, MySQL 
Others: Git, GitHub, VS code, Chrome, webpack, Stripe, CI/CD, Junit, Jenkins, Jira
Software Development: Agile, DevOps practices, UML, TDD, RESTful APIs 
Soft skills: Adaptable, Teamwork, Stress-tolerant, Continuous-learner, Attention to detail

Experience
Cybersecurity Software Engineer | GEICO | 2024 - Present
Implement detective, preventative, and governing solutions to secure infrastructure, platforms, and services to meet compliance requirements and safeguard sensitive data.

WFT | Infineon Technologies | July 2019- May 2022
Optimized data processes, improved system reliability, reducing post-release defects and, enhancing application performance.

Full Stack Developer | Irembo services | July 2021- Present
Boosting system efficiency by 25% through developing RESTful APIs with the Spring framework, and deploying scalable microservices, cutting deployment time by 30% and increasing uptime to 99.9%.

Projects
Web App for Nightlife Enthusiasts                       
Developed a web application to enhance the nightlife experience, utilizing React.js, Node.js, Express.js, and MongoDB. Implemented responsive design and dynamic web page design for improved user experience. Live Demo: vibetrack

Ecommerce Web Application
Designed and implemented a high-quality ecommerce platform with React.js, Node.js, Stripe, and MongoDB. Focused on website navigation optimization, user interface, and website content display. Demo: 9 Commerce
     
Library Manager Web Application                     
Created a web-based library management system using HTML & CSS, React.js, Java Spring Boot, and MySQL. Emphasized writing basic CRUD queries for databases. Live Demo: ReadHub

Education 
Bachelor of Science in Computer Science and mathematics           May 2024                           
Texas State University – San Marcos, Texas
GPA: 3.88
`