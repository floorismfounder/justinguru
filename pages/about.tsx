import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import { forwardRef } from 'react';
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function About({}, ref: IndexPageRef) {
  return (
    <PageTransition ref={ref}>
      <Layout title="About">
        <h1>About Me</h1>
        <p>
          Hi, my name is John Doe and I am a web developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
        </p>
      </Layout>
    </PageTransition>
  );
}

export default forwardRef(About);