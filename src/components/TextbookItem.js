export default function TextbookItem({
  name,
  image,
  priceRange,
  edition,
  isbn,
  author,
  publisher,
  formats,
  copyrightYear,
  options,
}) {
  return (
    <>
      <article className="book">
        <h3 className="book-title">{name}</h3>
        <img className="book-image" src={image} alt={"book" + name}></img>
        <br />
        <strong>{priceRange}</strong>
        <br />

        <ul className="description-list">
          <li>
            {" "}
            <span className="description-title">Edition:</span> {edition}{" "}
          </li>
          <li>
            {" "}
            <span className="description-title">ISBN:</span> {isbn}{" "}
          </li>
          <li>
            {" "}
            <span className="description-title">Author:</span> {author}{" "}
          </li>
          <li>
            {" "}
            <span className="description-title">Publisher:</span> {publisher}{" "}
          </li>
          <li>
            {" "}
            <span className="description-title">Formats:</span> {formats}{" "}
          </li>
          <li>
            {" "}
            <span className="description-title">Copyright Year:</span>{" "}
            {copyrightYear}{" "}
          </li>
        </ul>
        <article className="payment">
          <section className="rent">
            <h4>Rent</h4>
            <p>
              Used: {options.rent.used.price} due {options.rent.used.due}{" "}
            </p>
            <p>
              New: {options.rent.new.price} due {options.rent.new.due}{" "}
            </p>
            <p>
              Digital: {options.rent.digital.price} due in{" "}
              {options.rent.digital.length}{" "}
            </p>
          </section>

          <section className="buy">
            <h4> Buy </h4>
            <p>Used: {options.buy.used}</p>
            <p>New: {options.buy.new}</p>
            <p>Digital: {options.buy.digital}</p>
          </section>
        </article>
      </article>
    </>
  );
}
