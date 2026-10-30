import React from 'react';
import yelLogo from '../../../assets/yel-logo.svg';
import TalemMark from '../../../components/talem/TalemMark';

const COLUMNS = [
  {
    title: 'Links',
    links: [
      { label: 'Homepage', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Join the Team', href: '/join' },
      { label: 'Blog', disabled: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Extracurriculars', href: '/extracurriculars' },
      { label: 'College Applications', href: '/applications' },
      { label: 'College Programs', href: '/programs' },
    ],
  },
  {
    title: 'Contact us',
    links: [
      { label: 'support@talem.org', href: 'mailto:support@talem.org' },
      { label: 'Youth Economy Lab', href: 'https://youtheconomylab.com', external: true },
      {
        label: 'Submit an Activity',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfP7S6qVjnRse0mBbKe9eCCVm0kGwXJRpeIJlxjWWyQXBBW7g/viewform',
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-sand-200 font-outfit text-ink">
      <div className="mx-auto max-w-[1180px] px-5 pt-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2.5 text-ink">
              <TalemMark className="h-6 w-auto text-accent" />
              <span className="font-display text-[24px] tracking-[-0.01em]">Talem</span>
            </a>
            <p className="mt-3 text-[14px] text-ink-3">Democratizing education for all.</p>
            <a
              className="mt-6 flex w-fit items-center gap-3 rounded-2xl border border-line bg-sand-100/70 p-2 pr-4 text-[13.5px] text-ink-2 transition-colors hover:border-line-2 hover:text-ink"
              href="https://youtheconomylab.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={yelLogo}
                alt="Youth Economy Lab logo"
                className="h-10 w-10 rounded-xl bg-sand-50 object-contain p-1.5"
              />
              <span>Managed by the Youth Economy Lab</span>
            </a>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="t-caps">{column.title}</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="cursor-not-allowed text-ink-4" aria-disabled="true" title="Temporarily unavailable">
                        {link.label}
                      </span>
                    ) : (
                      <a
                        className="text-ink-2 transition-colors hover:text-accent"
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line py-6 text-[13px] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>
            A{' '}
            <a href="https://youtheconomylab.com" className="t-link" target="_blank" rel="noreferrer">
              Youth Economy Lab
            </a>{' '}
            project
          </p>
        </div>
      </div>

      <div
        className="mx-auto h-[0.74em] select-none overflow-hidden text-center text-[30vw] leading-none lg:text-[22rem]"
        aria-hidden="true"
      >
        <span className="block bg-gradient-to-b from-sand-500 to-sand-200 bg-clip-text font-display tracking-[-0.03em] text-transparent">
          Talem
        </span>
      </div>
    </footer>
  );
}
