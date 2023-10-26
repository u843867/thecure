/* eslint react/no-unescaped-entities */

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Why, Who and How
          </h1> */}
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
            <h2 className="text-3xl font-bold tracking-tight font text-zinc-700 dark:text-zinc-100 sm:text-4xl">Why travel technology </h2>
            <p>
              I have had a lifelong passion for travel which stemmed from growing up in an airline family. 
              Following the advice of Steve Jobs and Warren Buffet I targeted a career in something I love.  
            </p>
            <p>
              For as long as I can recall, computers and technology were a fascination. In hindsight, working in travel tech' 
              was always a likely career destination for me.    
            </p>

            <h2 className="text-3xl font-bold tracking-tight font text-zinc-700 dark:text-zinc-100 sm:text-4xl">Core beliefs</h2>
            <p>
              Time and effort in, correlates positively to the quality of solution out. 
              Whilst this may seem obvious it's a lesson often learned retrospectively.   
            </p>
            <p>
              A solid foundation is the key to achieving a robust solution.
            </p>
            <p>
              A successful solution is not only the result of hard work. The work must be corrrectly focused and prioritised.
            </p>
            <p>
              Without a solid foundation a robust sytem cannot exist.   
            </p>


          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://github.com/u843867" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/justin-jones-93962419/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:justinzjones@gmail.com"
              icon={MailIcon}
              className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              justinzjones@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
