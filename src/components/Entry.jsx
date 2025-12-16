/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */
export default function Entry() {
    return (
        <article className="entry">
            <img 
                src="/src/images/fuji.png" 
                alt="Mount Fuji" 
                className="photo"
            />
            <div className="details">
                <div className="location">
                    <img
                        src="/src/images/marker.ico" 
                        alt="Map Marker Icon" 
                        className="marker"
                    />
                    <span className="country">JAPAN</span>
                    <a
                        href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" 
                        target="_blank" 
                        className="map-link"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h2 className="title">Mount Fuji</h2>
                <h3 className="date">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className="description">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </article>
    )
}