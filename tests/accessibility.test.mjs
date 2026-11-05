import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p, import.meta.url),'utf8');

test('documentation has skip navigation and keyboard menu handling',()=>{
 const layout=read('src/layouts/DocsLayout.astro');
 assert.match(layout,/class="sg-skip-link"/);
 assert.match(layout,/key==='Escape'/);
 assert.match(layout,/aria-expanded/);
 assert.match(layout,/aria-pressed/);
 assert.match(layout,/data-theme/);
});

test('interactive component previews include accessible tabs, dialog, and announcements',()=>{
 const demo=read('src/components/ComponentDemo.astro');
 assert.match(demo,/aria-labelledby="demo-modal-title"/);
 assert.match(demo,/showModal\(\)/);
 assert.match(demo,/ArrowRight/);
 assert.match(demo,/ArrowLeft/);
 assert.match(demo,/aria-live="polite"/);
 assert.match(demo,/aria-valuenow/);
});

test('shared styles honor reduced motion and mobile layout',()=>{
 const css=read('src/styles/global.css');
 const components=read('packages/core/src/components.css');
 assert.match(css,/prefers-reduced-motion/);
 assert.match(css,/overflow-x:auto/);
 assert.match(components,/max-w-64/);
});


test('Phase 4: seven new components have styles and previews',()=>{
 const css=read('packages/core/src/components.css');
 const demo=read('src/components/ComponentDemo.astro');
 const docs=read('src/layouts/DocsLayout.astro');
 for(const name of ['radio','textarea','switch','accordion','table','avatar','separator']){
   assert.ok(css.includes('.sg-'+name+' {'));
   assert.ok(demo.includes("component==='"+name+"'"));
   assert.ok(docs.includes('/docs/'+name+'/'));
 }
 assert.match(demo,/aria-checked/);
 assert.match(demo,/scope="col"/);
});

test('UI review: component catalog and homepage inventory remain consistent',()=>{
 const home=read('src/pages/index.astro');
 const catalog=read('src/pages/components/index.astro');
 const layout=read('src/layouts/DocsLayout.astro');
 assert.match(home,/20 Free components/);
 assert.match(catalog,/data-component-card/);
 assert.match(catalog,/component-search/);
 assert.match(catalog,/aria-pressed/);
 assert.match(layout,/\/components\//);
 assert.doesNotMatch(home,/seven free components/i);
});
