import * as React from 'react'

import { useDarkMode } from 'lib/use-dark-mode'
import * as config from 'lib/config'
import { SiFacebook, SiGithub, SiGmail } from 'react-icons/si'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// TODO: merge the data and icons from PageSocial with the social links in Footer
const DarkModeToggle = dynamic(
  async () => (await import('react-dark-mode-toggle-2')).DarkModeToggle,
  {
    ssr: false
  }
)
export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a href='mailto:filename@inft.kr' target='_blank' rel='noreferrer'>
            <SiGmail size={30} />
          </a>
          <a
            href={'https://github.com/' + config.github}
            target='_blank'
            rel='noreferrer'
          >
            <SiGithub size={30} />
          </a>
          <a
            href={'https://facebook.com/' + config.facebook}
            target='_blank'
            rel='noreferrer'
          >
            <SiFacebook size={30} />
          </a>
          <DarkModeToggle
            onChange={toggleDarkMode}
            isDarkMode={isDarkMode && hasMounted}
            speed={2}
            size={65}
          />
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400 sm:text-xs'>
          <div>{config.author}</div>
          <div>{` • `}</div>
          <div>{`© 2020 - ${new Date().getFullYear()}`}</div>
          <div>{`All rights reserved by`}</div>
          <Link href='/'>{config.name}</Link>
        </div>
        <div className='mb-8 text-sm text-gray-500 dark:text-gray-400'>
          <Link href='https://github.com/Anhgerel/Huvaari-Frontend'>
            MySchool v0.1-beta
          </Link>
        </div>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
