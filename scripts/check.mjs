import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { Script } from 'node:vm';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
for (const name of ['index.html', 'plan.html', 'restaurant.html', 'surprise.html']) {
  const html = readFileSync(resolve(root, name), 'utf8');
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /lang="zh-CN"/);
  assert.match(html, /name="viewport"/);
  assert.match(html, /<title>[^<]+<\/title>/);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x => x[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    assert.ok(existsSync(resolve(root, match[1])), `Missing local target in ${name}: ${match[1]}`);
  }
  for (const match of html.matchAll(/\bfor="([^"]+)"/g)) assert.ok(ids.includes(match[1]));
}
new Script(readFileSync(resolve(root, 'assets/js/app.js'), 'utf8'));
console.log('PASS: four pages, titles, language, viewport, IDs, labels, local links, assets and JavaScript syntax');
