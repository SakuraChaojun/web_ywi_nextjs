import { XMarkIcon } from '@heroicons/react/20/solid'

export default function TopRed() {
  return (
    <div className="flex items-center justify-center gap-x-6 bg-[#E81E1A] px-6 py-0.5 sm:pr-3.5 lg:pl-8">
      <p className="text-sm/6 text-white">

        <a href="/about">
          <strong className="font-semibold">9030 Leslie St Unit 4 RichmondHill </strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          info@ywialliance.com | 电话：(647) 495-6888 &nbsp;<span aria-hidden="true"></span>
        </a>
      </p>

    </div>
  )
}
