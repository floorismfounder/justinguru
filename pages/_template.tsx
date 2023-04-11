// import Head from 'next/head';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';



type TemplateProps = {
  children: React.ReactNode;
  title: string;
};

export default function Template({ children, title }: TemplateProps) {
  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content="My portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> */}
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
