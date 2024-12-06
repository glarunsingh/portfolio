import * as React from 'react'
import Seo from '../components/seo'
import * as icons from 'react-icons/ri';
import { Link } from 'gatsby';

const ProjectEntry = ({ title, description, tags, projectLink, codeLink }) => {
  return (
    <div className="rounded-lg shadow dark:bg-slate-700 bg-slate-200 transition ease-in-out duration-300">
      <div className="p-4">
        <h3 className="text-xl font-medium flex flex-row space-x-4 place-items-center">
          {/* project link and codelink are optional, if not provided we don't display the links / icons*/}
          {projectLink ? (
            <Link href={projectLink} target="_blank" className="flex flex-row space-x-1 group cursor-pointer place-items-center hover:underline">
              <p>{title}</p>
              <icons.RiArrowRightUpLine size={20} className="group-hover:scale-125 group-hover:-translate-y-1 cursor-pointer transition-transform ease-in-out duration-300"></icons.RiArrowRightUpLine>
            </Link>
          ) : (
            <p>{title}</p>
          )}
          {codeLink && (
            <Link href={codeLink} target="_blank" className="hover:scale-125 cursor-pointer transition-transform ease-in-out duration-300">
              <icons.RiGithubFill size={24}></icons.RiGithubFill>
            </Link>
          )}
        </h3>
        <p className="mt-1">{description}</p>
        <div className="mt-4 flex flex-wrap gap-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center gap-1 rounded-full bg-slate-300 dark:bg-slate-500 px-2 py-1 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const ProjectsPage = () => {
  return (
    <div pageTitle='Projects' className='px-4'>
      <h1 className="text-3xl font-bold mt-4">Projects</h1>
      <p className='py-4'>
        These are my projects, don't hesitate to have a look at them if you are curious !
      </p>

      <div className='pt-2 pb-4 grid grid-cols-1 xl:grid-cols-2 place-items-start xl:place-items-center gap-8 transition ease-in-out duration-300'> 
      
        <ProjectEntry
          title={'Automated Project Estimation Assistant'}
          description={'Developed an AI-driven tool for generating accurate project estimates based on user inputs from either a Process Definition Document (PDD) or a high-level project summary.'}
          tags={['Azure OpenAI', 'Python', 'MultiAgent Framework', 'Autogen', 'Azure Functions', 'Flask']}
          projectLink={'/'}
          codeLink={'https://github.com/'}
          >
        </ProjectEntry>

        <ProjectEntry
          title={'Sales Digest'}
          description={'Developed a Sales Digest application for sales executives by extracting data from various sources and utilizing Generative AI to summarize content, perform sentiment analysis, and implement a feedback mechanism.'}
          tags={['Azure OpenAI', 'Python', 'LangChain', 'AI Search', 'Azure Functions', 'Logic Apps', 'Cosmos DB']}
          projectLink={'/'}
          codeLink={'https://github.com/'}
          >
        </ProjectEntry>

        <ProjectEntry
          title={'HRSS_Chatbot'}
          description={'Developed a chatbot application to assist users with HR policies and address queries efficiently, leveraging advanced document processing techniques for accurate and timely responses.'}
          tags={['Azure OpenAI', 'Python', 'LangChain', 'AI Search', 'Azure Functions', 'Logic Apps', 'Chroma VectorDB', 'Mango DB']}
          projectLink={'/'}
          codeLink={'https://github.com/'}
          >
        </ProjectEntry>

      </div>
    </div>
  )
}

export const Head = () => <Seo title='Projects' description='Projects.' pathname='/projects'/>

export default ProjectsPage