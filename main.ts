import { mkdirSync, writeFileSync } from 'node:fs';
const TABS = '347';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${TABS}\n`);
