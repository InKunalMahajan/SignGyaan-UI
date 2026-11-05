import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../dist');
const base='/SignGyaan-UI/';
function walk(dir){
 return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):e.name.endsWith('.html')?[join(dir,e.name)]:[]);
}
let checked=0;
let broken=[];
for(const file of walk(root)){
 const html=readFileSync(file,'utf8');
 for(const match of html.matchAll(/href="([^"]+)"/g)){
  const value=match[1];
  if(!value.startsWith(base))continue;
  const path=value.split(/[?#]/)[0].slice(base.length);
  const target=resolve(root,path);
  if(!existsSync(target)&&!existsSync(join(target,'index.html'))&&!existsSync(target+'.html'))broken.push(file+': '+value);
  checked++;
 }
}
if(broken.length){console.error('Broken internal links:\n'+broken.join('\n'));process.exit(1)}
console.log('Validated '+checked+' internal links across '+walk(root).length+' HTML pages');
