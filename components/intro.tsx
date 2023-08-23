import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        ClassFinder.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Our goal is to bring ease of access to students looking for classes.
      </h4>
    </section>
  )
}

export default Intro
