import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import ECModal from './ECModal';

function displayDomain(link) {
  try {
    const url = new URL(link);
    const path = url.pathname.replace(/\/+$/, '').split('/').filter(Boolean)[0];
    return { host: url.hostname.replace(/^www\./, ''), path };
  } catch {
    return { host: '', path: '' };
  }
}

// One search result per line, laid out like a web search result:
// source line, linked title, two-line snippet, then compact facts.
export default function ECItem({ ec, handleBookmark, bookmarkedItems }) {
  const [open, setOpen] = useState(false);
  const isBookmarked = bookmarkedItems.some((item) => item.id === ec.id);
  const { host, path } = displayDomain(ec.link);
  const facts = [ec.commitment, ec.environment, ...(ec.grade ?? []), ...(ec.location ?? [])].filter(Boolean);
  const topics = [...(ec.category ?? []), ...(ec.subjects ?? [])];

  return (
    <>
      <ECModal open={open} setOpen={setOpen} ec={ec} handleBookmark={handleBookmark} bookmarkedItems={bookmarkedItems} />
      <article
        className="group t-card cursor-pointer !rounded-[18px] px-4 py-4 transition-[border-color,background-color] duration-200 hover:border-line-2 hover:bg-sand-100 sm:px-6 sm:py-5"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-sand-50">
            <img
              src={ec.src}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = `${import.meta.env.BASE_URL}favicon.ico`;
              }}
              className="h-full w-full object-contain p-1"
            />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-[14px] text-ink">{ec.type || host}</p>
            <p className="mt-0.5 truncate text-[12.5px] text-ink-3">
              {host}
              {path && <span className="text-ink-4"> › {path}</span>}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              aria-label={isBookmarked ? `Remove ${ec.name} from saved` : `Save ${ec.name}`}
              aria-pressed={isBookmarked}
              onClick={(event) => {
                event.stopPropagation();
                handleBookmark(ec);
              }}
              className={`grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-ink/5 ${isBookmarked ? 'text-accent' : 'text-ink-3'}`}
            >
              {isBookmarked ? <BookmarkSolidIcon className="h-[18px] w-[18px]" /> : <BookmarkIcon className="h-[18px] w-[18px]" />}
            </button>
            {ec.link && (
              <a
                href={ec.link}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="hidden items-center gap-1.5 rounded-full border border-line-2 px-3.5 py-2 text-[13px] text-ink transition-colors hover:border-ink/30 hover:bg-sand-50 sm:inline-flex"
              >
                Visit
                <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-3 text-[19px] leading-[1.25] tracking-[-0.02em] text-accent-2 decoration-1 underline-offset-[3px] group-hover:underline sm:text-[21px]">
          {ec.name}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-[14.5px] leading-[1.6] text-ink-2 sm:line-clamp-2">{ec.description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[12.5px] text-ink-3">
          {facts.map((fact, index) => (
            <React.Fragment key={`${fact}-${index}`}>
              {index > 0 && <span aria-hidden="true" className="text-ink-4">·</span>}
              <span>{fact}</span>
            </React.Fragment>
          ))}
          {topics.length > 0 && <span aria-hidden="true" className="mx-1 hidden h-3 w-px bg-line-2 sm:inline-block" />}
          {topics.map((topic) => (
            <span key={topic} className="rounded-full bg-accent/[0.08] px-2 py-0.5 text-accent">
              {topic}
            </span>
          ))}
        </div>
      </article>
    </>
  );
}
