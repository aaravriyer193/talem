import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/react/24/solid'

function Property({ label, values }) {
  const list = (Array.isArray(values) ? values : [values]).filter(Boolean)
  if (list.length === 0) return null
  return (
    <div className='flex flex-col gap-2 border-t border-line py-3.5 sm:grid sm:grid-cols-[170px_1fr] sm:items-baseline sm:gap-4'>
      <dt className='t-caps'>{label}</dt>
      <dd className='flex flex-wrap gap-1.5'>
        {list.map((value) => (
          <span key={value} className='t-chip'>{value}</span>
        ))}
      </dd>
    </div>
  )
}

export default function ECModal({open, setOpen, ec, handleBookmark, bookmarkedItems}) {

  const cancelButtonRef = useRef(null)
  const isBookmarked = bookmarkedItems.some((item) => item.id === ec.id)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-ink/40 backdrop-blur-[3px] transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-outfit">
          <div className="flex min-h-full items-end justify-center p-3 sm:items-center sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-[760px] overflow-hidden rounded-[26px] border border-line bg-sand-100 text-left shadow-[0_40px_80px_-40px_rgba(11,18,32,0.6)]">
                <div className="p-5 sm:p-8">
                  <div className='flex items-start gap-4'>
                    <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-sand-50">
                      <img
                        src={ec.src}
                        alt=""
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = `${import.meta.env.BASE_URL}favicon.ico`;
                        }}
                        className='h-full w-full object-contain p-1.5'
                      />
                    </span>
                    <div className='min-w-0 flex-1'>
                      <p className='t-caps !text-accent'>{ec.type || 'Extracurricular activity'}</p>
                      <Dialog.Title className="mt-1.5 text-[clamp(1.5rem,3.4vw,2.1rem)] leading-[1.1] tracking-[-0.03em] text-ink select-text">
                        {ec.name}
                      </Dialog.Title>
                    </div>
                    <div className='flex shrink-0 gap-1'>
                      <button
                        type="button"
                        aria-label={isBookmarked ? 'Remove from saved' : 'Save activity'}
                        aria-pressed={isBookmarked}
                        onClick={() => handleBookmark(ec)}
                        className={`grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-ink/5 ${isBookmarked ? 'text-accent' : 'text-ink-2'}`}
                      >
                        {isBookmarked ? <BookmarkSlashIcon className='h-5 w-5' /> : <BookmarkIcon className='h-5 w-5' />}
                      </button>
                      <button
                        type="button"
                        aria-label="Close"
                        onClick={() => setOpen(false)}
                        className='grid h-10 w-10 place-items-center rounded-full text-ink-2 transition-colors hover:bg-ink/5'
                      >
                        <XMarkIcon className='h-5 w-5' />
                      </button>
                    </div>
                  </div>

                  <p className='mt-6 text-[15.5px] leading-[1.65] text-ink-2 select-text'>{ec.description}</p>

                  <dl className='mt-6 border-b border-line'>
                    <Property label="Open to" values={ec.grade} />
                    <Property label="Location" values={ec.location} />
                    <Property label="Category" values={ec.category} />
                    <Property label="Organization" values={ec.type} />
                    <Property label="Skill level" values={ec.skill} />
                    <Property label="Commitment" values={ec.commitment} />
                    <Property label="Team / individual" values={ec.soloTeam} />
                    <Property label="Subjects" values={ec.subjects} />
                  </dl>
                </div>

                <div className="flex flex-col-reverse gap-2 border-t border-line bg-sand-200 px-5 py-4 sm:flex-row sm:justify-end sm:px-8">
                  <button
                    type="button"
                    className="t-btn-ghost"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Go back
                  </button>
                  <a href={ec.link} target='_blank' rel="noreferrer" className="t-btn-ink">
                    Visit site
                    <ArrowTopRightOnSquareIcon className='h-4 w-4' aria-hidden="true" />
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
