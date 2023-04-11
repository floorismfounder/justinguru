import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import { forwardRef } from 'react';
import Lottie from 'lottie-react-web';

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function About({}, ref: IndexPageRef) {
return (
<PageTransition ref={ref}>
<Layout title="About">
  <div className="two-col">
    <div className="left">
    <h1>About Me</h1>
      <p>
      Welcome to my personal website! My name is Justin, and I am a JavaScript developer, investor, and avid sailor based in Virginia. I love to explore the great outdoors and stay active through beach trips, hikes, and working out, and I also enjoy playing guitar and jamming with friends.
      </p>
    </div>
    <div className="right">
      <Lottie
        options={{
          animationData: require('../public/Scene9.json'),
        }}
      />
    </div>
  </div>
  <div className="light-bg">
    <p>
  My wide range of interests includes investing, survival skills, grilling, chess, rock climbing, guitar, marksmanship, robotics, photography, martial arts, electronic music producing, writing, and many more. I am also passionate about volunteering and coaching and mentoring others.
  </p>
  <p>
  When I&apos;m not working or pursuing my hobbies, I enjoy spending time with my Husky puppy, Pete. I have a deep appreciation for sailboats, waterfalls, and cliff-jumping, and I love to dance, especially bboying.
  </p>
  <p>
  I am always striving to improve myself and expand my knowledge, and I find inspiration in figures like Marcus Aurelius and Richard Feynman. My professional background includes a transition from Navy Nuke to Designer to Dev to DevOps and ML, quantitative finance, and I am currently Founder of Floorism and Grit & Merit.
  </p>
  <p>
  Thank you for visiting my website, and I hope you enjoy learning more about me and my passions. If you have any questions or would like to connect, feel free to reach out!
  </p>
  </div>



</Layout>
</PageTransition>
);
}

export default forwardRef(About);