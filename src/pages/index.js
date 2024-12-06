import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { ExperienceEntry, EducationEntry, PublicationEntry, SkillsEntry } from '../components/curriculumEntry';
import { Link } from 'gatsby';
import * as icons from 'react-icons/ri';
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12">
        {/* Photo and social links */}
        <div className="flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24">
          {/* Photo */}
          <StaticImage
            src="../images/avatar.png"
            alt="Me"
            className="rounded-full h-64 w-64 object-cover mt-4"
          />
          {/* Social links */}
          <div className='flex flex-row mx-auto place-items-center space-x-8 overflow-visible'>
            <Link href="https://www.linkedin.com/in/glarunsingh/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="LinkedIn">
              <icons.RiLinkedinBoxFill size={32}></icons.RiLinkedinBoxFill>
            </Link>
            <Link href="https://github.com/glarunsingh" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Github">
              <icons.RiGithubFill size={32}></icons.RiGithubFill>
            </Link>
            <Link href="https://x.com/arunsinghg" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Twitter">
              <icons.RiTwitterFill size={32}></icons.RiTwitterFill>
            </Link>
            {/* <Link href="https://scholar.google.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='Google Scholar'>
              <i className="ai ai-google-scholar ai-size-32"></i>
            </Link> */}
            <Link href="https://drive.google.com/file/d/1HyO5FKE_gDuAp_FHQ7Y_BM-HUzsoVmRG/view" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='CV'>
              <i className="ai ai-cv ai-size-32"></i>
            </Link>
          </div>

          {/* Quick links */}
          <div className='hidden lg:flex flex-col w-1/3 items-start'>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#experience")} className='peer group-hover:underline'>Experience</button>
            </div>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#education")} className='peer group-hover:underline'>Education</button>
            </div>
            <div className='flex flex-row items-center group'>
                <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
                <button onClick={() => scrollTo("#publications")} className='peer hover:underline'>Certifications</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#skills")} className='peer hover:underline'>Skills</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#contact")} className='peer hover:underline'>Contact</button>
            </div>
          </div>
        </div>

        {/* Text and content */}
        <div className="container flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Hi, I'm Arun Singh G!</h1>

          <p className="mb-4">
          I am a Generative AI developer with a robust background in Robotic Process Automation and Software Testing. 
          I hold a Master’s degree in Computer Applications from Anna University and a Bachelor's degree from Vellore 
          Institute of Technology.
          </p>
          <p className="mb-4">
          Currently, I am a member of the GenAI CoE and R&D team. My role involves deeply understanding business problems, 
          researching the latest technologies in the market, conducting Proof of Concepts (POCs), and transforming these POCs 
          into business proposals that secure contracts from clients. I am continually learning about the latest RAG techniques, 
          Multi-Agent frameworks, and LLM models to develop the best possible solutions for various challenges.
          </p>
          <p className="mb-4">
          Beyond my technical expertise, I was born and raised in Tamil Nadu. In my leisure time, I enjoy a good game of badminton 
          and cricket with friends, reading self-help books and non-fictional stories. I am also an active trader and investor, 
          constantly learning about the stock market and global macroeconomic trends. I love traveling the world to broaden my
           understanding of different cultures, and I am working on improving my photography skills, though I have not quite mastered
            it yet!
          </p>

          {/* Timeline */}
          <section>
            <div id="experience" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Experience</h1>
            <ExperienceEntry
              date={'Sept\u00a02019 - Present'}
              title={'Generative AI Developer'}
              company={'Cognizant Technology Solutions, Chennai'}
              description={'Led the development and deployment of advanced Generative AI solutions using LangChain and Azure OpenAI models, and the Microsoft Autogen framework, driving innovation and digital transformation in AI applications'}
              tags={['Python', 'LLM', 'RAG', 'MultiAgent Framework']}
            />
            <ExperienceEntry
              date={'Sept\u00a02016 - Aug\u00a02019'}
              title={'Senior Software Engineer'}
              company={'BORN Commerce Private Limited, Chennai'}
              description={'Extensive experience in gathering requirements, creating Process Understanding Documents (PDDs), and providing effective solutions using Solution Design Documents (SDDs). Maintaining a proactive approach to customers requests, solving hurdles while automating, and clearing roadblocks to get the desired result.'}
              tags={['RPA', 'UiPath', 'Computer Vision']}
            />
            <ExperienceEntry
              date={'Jan\u00a02014 - Sept\u00a02016'}
              title={'Software Test Engineer'}
              company={'Amazon Development Center (India) Private Limited, Chennai'}
              description={'Worked across 6 Generations of Amazon Kindle devices from the scratch to successful customer release and various OTA builds for 9 generation devices. Took Complete ownership of Build acceptance testing (BAT/BVT) in 18 locales with respective marketplaces and decided the QA acceptance/reject based on issues faced.'}
              tags={['Automation Testing', 'Build Acceptance testing', 'Regression Testing']}
            />
          </section>

          <section>
            <div id="education" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Education</h1>
            <EducationEntry
              date={'2010 - 2013'}
              university={'Anna University, Chennai'}
              degree={'Master of Computer Application'}
              description={'specialized training in software development, artificial intelligence, machine learning, and cybersecurity, in addition to imparting a deep understanding of programming, algorithms, and data structures.'}
              tags={['Cloud Computing', 'Networking', 'Software testing']}
            />
            <EducationEntry
              date={'2007 - 2010'}
              university={'Vellore Institute of Technology, Vellore'}
              degree={'Bachelor of Computer Application'}
              description={'I gained comprehensive knowledge and skills in various areas including Data Analysis, Web Development, Cyber Security, Software Development, Technical Analysis, Management of Information Systems, Network Management, and Application Development.'}
              tags={['Data Structures', 'Python Programming', 'Database Management']}
            />
          </section>

          <section>
            <div id="publications" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Certifications</h1>
            <PublicationEntry
              date={'2024'}
              title={'Complete Data Science,Machine Learning,DL,NLP Bootcamp'}
              authors={'Krish Naik'}
              // journal={'Journal 2'}
              tags={['Data Science', 'Machine Learning', 'NLP']}
            />
            {/* <PublicationEntry
              date={'2022'}
              title={'Publication 1'}
              authors={'Author 1, Author 2, Author 3'}
              journal={'Journal 1'}
              tags={['Keyword 1', 'Keyword 2', 'Keyword 3']}
            /> */}
          </section>
          
          <section>
            <div id="skills" className='-translate-y-16' />
            <h1 className='text-2xl py-4 font-medium'>Skills</h1>
            <SkillsEntry
              category={'Programming Languages'}
              skills={['Python']}
            />
            <SkillsEntry
              category={'Frameworks & Tools'}
              skills={['LangChain', 'Azure Functions', 'REST APIs', 'FastAPI', 'CI/CD tools (GitHub Actions, Azure DevOps)']}
            />
            <SkillsEntry
              category={'Generative AI Technologies'}
              skills={['Open-source and paid LLM models (Azure OpenAI, Google Gemini Pro)']}
            />
            <SkillsEntry
              category={'Vector Databases'}
              skills={['FAISS', 'Cosmos DB', 'Azure AI Search']}
            />
            <SkillsEntry
              category={'Database Management'}
              skills={['SQL (MySQL)', 'NoSQL (MongoDB, Cosmos DB)']}
            />
            <SkillsEntry
              category={'Deployment Platforms'}
              skills={['Azure']}
            />
            <SkillsEntry
              category={'AI/ML Techniques'}
              skills={['Fine-tuning with custom data', 'Vector embedding', 'NLP', 'Document processing pipelines', 'MLOps']}
            />
            <SkillsEntry
              category={'Soft Skills'}
              skills={['Analytical thinking', 'Problem-solving', 'Teamwork', 'Effective communication', 'Project management']}
            />
            <SkillsEntry
              category={'Methodologies'}
              skills={['Software Development Life Cycle (SDLC)', 'Agile', 'Scrum']}
            />
          </section>

          <section id="contact">
            <div id="contact" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Contact</h1>
            <p>
              If you are interested in discussing, please feel free to reach out ! You can contact me at the following:  
            </p>    
            <p>
              <b>Email address:</b> gl.arunsingh@gmail.com
            </p>
            <p>
              <b>Phone:</b> +91 75500 67345
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage