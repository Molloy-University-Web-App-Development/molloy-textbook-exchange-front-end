import { Link } from "react-router-dom";
import TextbookItem from "../components/TextbookItem";

const book = {
  name: "Database Systems",
  image:
    "https://bkstr.scene7.com/is/image/Bkstr/9781337627900?$CMRPproducts_ET$&fmt=webp",
  priceRange: "$46.99 to $203.50",
  edition: "13th",
  isbn: "9781337627900",
  author: "Coronel",
  publisher: "Cengage Learning",
  formats: "Hardcover, BryteWave Format",
  copyrightYear: "2019",
  options: {
    rent: {
      used: {
        price: "$81.40",
        due: "12/20/22"
      },
      new: {
        price: "$132.28",
        due: "12/20/22"
      },
      digital: {
        price: "$46.99",
        length: "180 Days"
      }
    },
    buy: {
      used: "$152.75",
      new: "$203.50",
      digital: "$81.99"
    }
  }
};

export default function TextbookInfo() {
  return (
    <>
      <h1>Course Materials</h1>
      <p>Molloy University / Fall 2022</p>
      <TextbookItem {...book} />
      <Link to="/">Home</Link>
    </>
  );
}
