import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("a página inicial de produção mantém conteúdo, contato e arquivos locais", async () => {
  const html = await readFile(
    new URL(".next/server/app/index.html", root),
    "utf8",
  );
  assert.match(html, /Clínica Rita Sudbrack/);
  assert.match(html, /lang="pt-BR"/);
  assert.match(html, /https:\/\/wa\.me\/5551995599459/);
  assert.doesNotMatch(html, /name="codex-preview"/);
  const images = [...html.matchAll(/src="(\/assets\/[^"?]+)"/g)];
  assert.ok(images.length > 0, "as imagens da clínica devem estar presentes");
  for (const [, path] of images) await access(new URL(`public${path}`, root));
});

test("o gerador de certificados é compilado com os arquivos necessários", async () => {
  const html = await readFile(
    new URL(".next/server/app/certificados.html", root),
    "utf8",
  );
  assert.match(html, /Gerar certificado/);
  assert.match(html, /Nome da aluna/);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
  for (const path of [
    "certificados/certificado-base.pdf",
    "certificados/PinyonScript-Regular.ttf",
    "assets/fonts/redonda-regular.otf",
    "assets/fonts/redonda-medium.otf",
  ]) {
    const bytes = await readFile(new URL(`public/${path}`, root));
    assert.ok(bytes.length > 0, `${path} não pode estar vazio`);
  }
  const pdf = await readFile(
    new URL("public/certificados/certificado-base.pdf", root),
  );
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
});

test("a página do curso e todas as nove comparações estão incluídas", async () => {
  const html = await readFile(
    new URL(".next/server/app/cursos/design-de-sobrancelhas.html", root),
    "utf8",
  );
  assert.match(html, /Curso de Design de Sobrancelhas/);
  assert.match(html, /Fundamentos de visagismo|Visagismo e personalização/);
  assert.match(html, /R\$ 990/);
  assert.match(html, /R\$ 1.200/);
  for (let index = 1; index <= 9; index++) {
    const number = String(index).padStart(2, "0");
    for (const side of ["antes", "depois"]) {
      const image = await readFile(
        new URL(`public/assets/images/results/${number}-${side}.jpg`, root),
      );
      assert.equal(image.subarray(0, 2).toString("hex"), "ffd8");
    }
  }
});
