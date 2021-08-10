import Head from 'next/head';
import '../styles/globals.scss';
import '../components/HomePage/HomePage.scss';
import '../components/PortfolioPage/Portfo3.scss';
import '../components/Form/AddProjectForm.scss';
import '../components/PortfolioPage/TimeMachine/TimeMachine.scss';
import '../components/Attic/Attic.scss';
import '../components/ProjectCard/ProjectCard.scss';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Bertrand Bourion</title>
        <link rel="shortcut icon" href="/suitcase.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"
          integrity="sha512-QcYm1q7RbnXmwY7HJ0H7938IS0MalTPYqGUF0fIwQgEjMBt2tqjDBt+R5I+ppdwEohjMdHnFU0H+RxmrGQ8qcg=="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/Draggable.min.js"
          integrity="sha512-RDX1eDxp3ORwtRRL6pxKFQRCMn2TjxuHevOkw70yuvTxrGLs7+inPtL2BVtHSkW4zXmG4s+CoKgPoqJsndzHcQ=="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/TextPlugin.min.js"
          integrity="sha512-orz/l0zz+W+3mJKlUrK3jQ4q+5RlMt3QPtwifhy3QBD2q2AEarIN55NQDHBrRN9Rc543hRdYjUmCJhG8Jbz5Zg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&amp;display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Original+Surfer&amp;display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initialPage"
          animate="animatedPage"
          variants={{
            initialPage: {
              opacity: 0,
            },
            animatedPage: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
