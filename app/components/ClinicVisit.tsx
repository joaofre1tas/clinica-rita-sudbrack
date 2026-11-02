import AppointmentButton from "./AppointmentButton";
import "../clinic-visit.css";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Pessoa%2C%20603%2C%20Santa%20Cruz%20do%20Sul%2C%20RS";

export default function ClinicVisit() {
  return (
    <section className="clinic-visit" id="clinica">
      <div className="clinic-visit-photo">
        <img
          src="/assets/images/foto-clinica.jpg"
          alt="Recepção da Clínica Rita Sudbrack"
          loading="lazy"
        />
      </div>
      <div className="clinic-visit-panel">
        <div className="clinic-visit-copy">
          <p className="eyebrow">{"A experiência da clínica"}</p>
          <h2>
            {"Um espaço pensado para cuidar de você com"}{" "}
            <em>{"conforto e privacidade"}</em>
          </h2>
          <p className="clinic-visit-lead">
            {
              "A experiência da paciente não começa no procedimento. Ela começa na forma como é recebida."
            }
          </p>
          <p>
            {
              "Um ambiente onde você pode conversar com tranquilidade, esclarecer dúvidas e compreender suas possibilidades antes de tomar qualquer decisão."
            }
          </p>
        </div>
        <div className="clinic-visit-place">
          <address>
            <strong>{"Rua João Pessoa, 603"}</strong>
            <span>{"Santa Cruz do Sul — RS"}</span>
            <span>{"Atendimento com hora marcada"}</span>
          </address>
          <AppointmentButton tone="dark" href={mapUrl}>
            {"Ver no mapa"}
          </AppointmentButton>
        </div>
      </div>
    </section>
  );
}
