"use client";

import { useEffect, useRef, useState } from "react";
import {
  cleanSpaces,
  DEFAULT_FIELDS,
  type CertificateFields,
} from "./format";

type Result = { url: string; fileName: string; key: string };

export default function CertificateGenerator() {
  const [fields, setFields] = useState<CertificateFields>(DEFAULT_FIELDS);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const urlRef = useRef<string | null>(null);

  useEffect(
    () => () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    },
    [],
  );

  const canGenerate =
    cleanSpaces(fields.name) !== "" && cleanSpaces(fields.course) !== "";
  const isStale = result !== null && result.key !== JSON.stringify(fields);

  function update(field: keyof CertificateFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
  }

  function restoreDefaults() {
    setFields((current) => ({ ...DEFAULT_FIELDS, name: current.name }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canGenerate || loading) return;

    setLoading(true);
    setError(null);
    try {
      const { generateCertificate } = await import("./generate");
      const { blob, fileName } = await generateCertificate(fields);
      const url = URL.createObjectURL(blob);
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
      urlRef.current = url;
      setResult({ url, fileName, key: JSON.stringify(fields) });
    } catch {
      setError(
        "Não foi possível gerar o certificado. Verifique a conexão e tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="cert-page">
      <header className="cert-header section-shell">
        <img
          className="cert-logo"
          src="/assets/logo.svg"
          alt="Clínica Rita Sudbrack"
        />
        <div>
          <p className="eyebrow">Uso interno</p>
          <h1>
            Gerador de <em>certificados</em>
          </h1>
          <p className="cert-intro">
            Preencha os dados, gere o certificado e baixe o PDF pronto para
            imprimir. Nada é salvo: tudo acontece neste navegador.
          </p>
        </div>
      </header>

      <div className="cert-layout section-shell">
        <form className="cert-form" onSubmit={handleSubmit} autoComplete="off">
          <label className="cert-field">
            <span>Nome da aluna</span>
            <input
              type="text"
              value={fields.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Ex.: Daniela Terezinha Junkherr"
              required
              autoFocus
              spellCheck={false}
            />
          </label>

          <label className="cert-field">
            <span>Frase antes do curso</span>
            <input
              type="text"
              value={fields.intro}
              onChange={(event) => update("intro", event.target.value)}
            />
          </label>

          <label className="cert-field">
            <span>Nome do curso</span>
            <input
              type="text"
              value={fields.course}
              onChange={(event) => update("course", event.target.value)}
              required
            />
            <small>Sai em caixa alta no certificado.</small>
          </label>

          <label className="cert-field">
            <span>Data</span>
            <input
              type="text"
              value={fields.date}
              onChange={(event) => update("date", event.target.value)}
            />
          </label>

          <label className="cert-field cert-field--short">
            <span>Carga horária (horas)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.5"
              value={fields.hours}
              onChange={(event) => update("hours", event.target.value)}
            />
            <small>Deixe vazio para mostrar só a data.</small>
          </label>

          {error && (
            <p className="cert-error" role="alert">
              {error}
            </p>
          )}

          <div className="cert-actions">
            <button
              className="button"
              type="submit"
              disabled={!canGenerate || loading}
            >
              {loading ? "Gerando…" : "Gerar certificado"}
            </button>
            <button
              className="cert-secondary"
              type="button"
              onClick={restoreDefaults}
            >
              Restaurar padrões
            </button>
          </div>
        </form>

        <section className="cert-preview" aria-label="Pré-visualização">
          <div className="cert-preview-frame">
            {result ? (
              <iframe
                src={`${result.url}#view=Fit&navpanes=0`}
                title="Pré-visualização do certificado"
              />
            ) : (
              <p className="cert-placeholder">
                {loading
                  ? "Gerando o certificado…"
                  : "A pré-visualização aparece aqui depois de gerar o certificado."}
              </p>
            )}
          </div>

          {result && (
            <>
              {isStale && (
                <p className="cert-stale" role="status">
                  Os campos mudaram. Gere novamente para atualizar o PDF.
                </p>
              )}
              <div className="cert-actions">
                <a
                  className="button"
                  href={result.url}
                  download={result.fileName}
                >
                  Baixar PDF
                </a>
                <a
                  className="button button--outline"
                  href={result.url}
                  target="_blank"
                  rel="noopener"
                >
                  Abrir para imprimir
                </a>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
