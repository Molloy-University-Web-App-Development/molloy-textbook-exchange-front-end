import {Link} from "react-router-dom";

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
  options
}) {
  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt={"image of the book" + name}></img>
      <br />
      <strong>{priceRange}</strong>
      <br />

      <ul>
        <li>
          {" "}
          <strong>Edition:</strong> {edition}{" "}
        </li>
        <li>
          {" "}
          <strong>ISBN:</strong> {isbn}{" "}
        </li>
        <li>
          {" "}
          <strong>Author:</strong> {author}{" "}
        </li>
        <li>
          {" "}
          <strong>Publisher:</strong> {publisher}{" "}
        </li>
        <li>
          {" "}
          <strong>Formats:</strong> {formats}{" "}
        </li>
        <li>
          {" "}
          <strong>Copyright Year:</strong> {copyrightYear}{" "}
        </li>
      </ul>

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

      <h4> Buy </h4>
      <p>Used: {options.buy.used}</p>
      <p>New: {options.buy.new}</p>
      <p>Digital: {options.buy.digital}</p>

      
    </>
  );
}
