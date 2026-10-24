import "./syme-signature.css";

export default function SymeSignature() {
  return (
    <a
      className="syme-by"
      href="https://symewebstudio.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Feito por Syme Web Studio"
    >
      <span className="syme-by__txt">Feito por</span>
      <span className="syme-by__mark">
        <img
          className="syme-by__sym"
          src="/assets/syme/syme-simbolo.webp"
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
          loading="lazy"
        />
        <img
          className="syme-by__full"
          src="/assets/syme/syme-logo-escuro.webp"
          alt=""
          aria-hidden="true"
          width={74}
          height={20}
          loading="lazy"
        />
      </span>
    </a>
  );
}
