// Enveloppe commune des sections : identifiant d'ancre, largeur, titre.
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section container">
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </section>
  );
}
