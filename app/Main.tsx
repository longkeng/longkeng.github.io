import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div className="space-y-16 pt-12">
      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
          Product & Technical Leader
        </h1>

        <p className="max-w-3xl text-xl text-gray-600 dark:text-gray-400">
          Product & Technical Leader with 10+ years of experience building and operating AdTech
          platforms (SSP / DSP) and mobile games for the Japanese market.
        </p>

        <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          I help companies design, build, and scale products by bridging business goals and
          engineering execution.
        </p>

        <p className="max-w-3xl text-xl text-gray-600 dark:text-gray-400">
          日本市場向けに10年以上、アドテックおよびゲームプラットフォームの開発・運用に携わってきました。
          PM / Tech Managerとして、要件定義から運用まで一貫して支援します。
        </p>

        <div>
          <Link
            href="/projects"
            className="bg-primary-500 hover:bg-primary-600 inline-block rounded-md px-6 py-3 text-base font-medium text-white"
          >
            View selected projects →
          </Link>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Expertise</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-400">
          <li>SSP / DSP platform development and large-scale ad operations</li>
          <li>Mobile game development (client & backend)</li>
          <li>Technical leadership bridging product, business, and engineering</li>
        </ul>
      </section>

      {/* Credibility */}
      <section className="max-w-3xl text-gray-600 dark:text-gray-400">
        Projects include large-scale AdTech platforms and mobile games with
        <strong className="text-gray-900 dark:text-gray-100"> 2M+ downloads</strong>, delivered and
        operated for Japanese companies.
      </section>
    </div>
  )
}
