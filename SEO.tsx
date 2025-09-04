import Head from 'next/head'

export default function SEO({ title, description }: { title: string, description: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Best blood centre software in India, NABH & NBTC compliant blood bank management system, ISO 13485 certified cloud-based blood bank software, End-to-end blood traceability solution, Biometric & RFID blood tracking system, Blood bank donor management software with compliance automation, Transparent inventory tracking blood bank software" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.bloodcentresoftware.com" />
      <meta property="og:image" content="/og-image.png" />
    </Head>
  )
}