"use client";
import Link from "next/link";

export default function Map() {
  return (
    <figure className="my-10 rounded-lg w-full overflow-hidden h-96">
      <iframe
        width="400"
        height="300"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Oduman+(Wiz-serene%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        loading="lazy"
        className="filter grayscale contrast-125 transition duration-300 w-full h-full"
      >
        <Link href="https://www.gps.ie/">gps vehicle tracker</Link>
      </iframe>
    </figure>
  );
}
// https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Oduman+(Wiz-serene%20Hotel)&t=&z=14&ie=UTF8&iwloc=B&output=embed
