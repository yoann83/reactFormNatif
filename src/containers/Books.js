import React, { useState, useEffect } from "react";
import Book from "../components/Book";

export default function Books() {
  //STATES
  const [loader, isLoader] = useState(true);
  const [books, setBooks] = useState([]);
  const [classStyleBg, setClassStyleBg] = useState("bg_orange_egerie");

  //ATTRIBUTES
  const title = "Books list";

  //EVENTS

  //INITIALIZE FUNCTION
  useEffect(() => {
    setTimeout(() => {
      isLoader(false);
      setBooks([
        {
          id: 1,
          title: "L'Insoutenable Légèreté de l'être.",
          nom: "Milan Kundera"
        },
        { id: 2, title: "J'irai cracher sur vos tombes.", nom: "Boris Vian" },
        {
          id: 3,
          title: "Voyage au bout de la nuit.",
          nom: "Louis-Ferdinand Céline"
        }
      ]);
      setClassStyleBg("bg_blue_egerie");
    }, 5000);
  }, []);

  //RENDER COMPONENT IN ID "container"
  return (
    <section>
      <h1 className={classStyleBg}>{title.toLocaleUpperCase()}</h1>
      {loader ? (
        <div>
          <ul>
            <li>
              <h3>Chargement en cours...</h3>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            {books.map((book, key) => (
              <Book id={key} title={book.title} details={book.nom} key={key} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
