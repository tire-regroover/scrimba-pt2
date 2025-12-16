import Entry from "./components/Entry"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main>
        <Entry 
          image="./images/fuji.png"
          country="Japan" 
          map-link="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
          title="Mount Fuji" 
          date="12 Jan, 2021" 
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet). 
          It is an active stratovolcano that last erupted in 1707." />
        <Entry 
          image="./images/fuji2.png"
          country="Japan" 
          map-link="https://goo.gl/maps/1DGM5WrWnATgkSNB8" 
          title="Mount Fuji 2" 
          date="13 Jan, 2021" 
          description="Mount Fuji 2 is the second tallest mountain in Japan, standing at 3,775 meters (12,388 feet). 
          It is an active stratovolcano that last erupted in 1706." />
        <Entry 
          image="./images/banana.jpg"
          country="Japan" 
          map-link="https://goo.gl/maps/1DGM5WrWnATgkSNB8" 
          title="Banana" 
          date="14 Jan, 2021" 
          description="Had a banana." />
      </main>
    </>
  )
}

export default App
