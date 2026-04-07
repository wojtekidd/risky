import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Features from './components/Features.jsx'
import ForWho from './components/ForWho.jsx'
import Differentiators from './components/Differentiators.jsx'
import WaitlistCTA from './components/WaitlistCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <ForWho />
        <Differentiators />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  )
}
