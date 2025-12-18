export default function Entry({ image, title, country, maplink, date, description }) {
  return (
    <article className="entry">
      <img src={image.src} alt={image.alt} className="photo" />

      <div className="details">
        <div className="location">
          <a href={maplink} target="_blank" rel="noopener noreferrer" aria-hidden="true">
            <img src="./images/marker.ico" alt="" className="marker" />
          </a>
          <span className="country">{country}</span>
          <a href={maplink} target="_blank" rel="noopener noreferrer" className="map-link">
            View on Google Maps
          </a>
        </div>

        <h2 className="title">{title}</h2>
        <h3 className="date">{date}</h3>
        <p className="description">{description}</p>
      </div>
    </article>
  );
}