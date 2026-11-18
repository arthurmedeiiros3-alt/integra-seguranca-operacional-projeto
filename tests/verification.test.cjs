const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');

const start = html.indexOf('function evalDoc(doc)');
const end = html.indexOf('const pendLabel', start);

assert.ok(start >= 0 && end > start,
  'Motor de verificacao nao encontrado');

const source = html.slice(start, end);

const context = vm.createContext({
  WARN_DAYS: 30,
  diff: days => days,
  fmt: days => String(days),
  plural: (n, singular, plural) =>
    n + ' ' + (n === 1 ? singular : plural),
  WORKER_REQS: [
    { key: 'aso', name: 'ASO' },
    { key: 'nr35', name: 'NR-35' }
  ],
  FRONT_REQS: [
    { key: 'apr', name: 'APR' },
    { key: 'pt', name: 'PT' }
  ]
});

vm.runInContext(source, context);

const { evalDoc, evaluate } = context;
const doc = expires => ({ ref: 'TESTE', expires });

test('01 - Documento ausente', () => {
  assert.equal(evalDoc(null).s, 'absent');
});

test('02 - Documento sem vencimento', () => {
  assert.equal(evalDoc(doc(null)).s, 'ok');
});

test('03 - Documento vencido', () => {
  assert.equal(evalDoc(doc(-5)).s, 'expired');
});

test('04 - Documento proximo do vencimento', () => {
  assert.equal(evalDoc(doc(10)).s, 'expiring');
});

test('05 - Documento valido', () => {
  assert.equal(evalDoc(doc(90)).s, 'ok');
});

test('06 - Trabalhador apto', () => {
  const w = { docs: { aso: doc(90) } };
  const a = {
    worker: ['aso'],
    frontReq: ['apr'],
    docs: { apr: doc(null) }
  };
  const r = evaluate(w, a);
  assert.equal(r.apto, true);
  assert.equal(r.met, 2);
  assert.equal(r.total, 2);
});

test('07 - Documento obrigatorio ausente bloqueia', () => {
  const w = { docs: {} };
  const a = { worker: ['aso'], frontReq: [], docs: {} };
  const r = evaluate(w, a);
  assert.equal(r.apto, false);
  assert.equal(r.blockers.length, 1);
});

test('08 - Documento vencido bloqueia', () => {
  const w = { docs: { aso: doc(-2) } };
  const a = { worker: ['aso'], frontReq: [], docs: {} };
  const r = evaluate(w, a);
  assert.equal(r.apto, false);
  assert.equal(r.blockers[0].s, 'expired');
});

test('09 - Alerta de vencimento nao bloqueia', () => {
  const w = { docs: { aso: doc(10) } };
  const a = { worker: ['aso'], frontReq: [], docs: {} };
  const r = evaluate(w, a);
  assert.equal(r.apto, true);
  assert.equal(r.alerts.length, 1);
});

test('10 - Requisito da frente de trabalho ausente', () => {
  const w = { docs: { aso: doc(90) } };
  const a = {
    worker: ['aso'],
    frontReq: ['pt'],
    docs: {}
  };
  const r = evaluate(w, a);
  assert.equal(r.apto, false);
  assert.equal(r.blockers[0].group, 'f');
  assert.equal(r.met, 1);
  assert.equal(r.total, 2);
});
