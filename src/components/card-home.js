import Link from "next/link";

function CardHome(props) {
  return (
    <div>
      <header>{props.header} Color Converter</header>

      <p>{props.description}</p>

      <Link href={props.anchor}>
        <a>Convert {props.header}</a>
      </Link>
    </div>
  );
}

export default CardHome;
