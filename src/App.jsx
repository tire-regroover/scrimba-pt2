import { useEffect } from 'react';
import Entry from "./components/Entry"
import Header from "./components/Header"
import entriesData from "./data/entriesData"

const App = () => {
  useEffect(() => {
    if (Math.random() < 0.5) {
      document.querySelector("#logo").classList.add("spinleft");
    } else {
      document.querySelector("#logo").classList.add("spinright");
    }

  }, []);

  const entries = entriesData.map(entry => (
    <Entry 
      key={entry.id}
      image={{src: entry.image.src, alt: entry.image.alt}}
      country={entry.country}
      maplink={entry.maplink}
      title={entry.title}
      date={entry.date}
      description={entry.description} 
    />
  ));

  return (
    <>
      <Header />
      <main>
        {entries}
      </main>
    </>
  )
}

export default App
