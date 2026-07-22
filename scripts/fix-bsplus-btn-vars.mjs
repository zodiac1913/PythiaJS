import fs from "node:fs";

const filePath = "src/ui/BSPlus.css";
let css = fs.readFileSync(filePath, "utf8");

const pattern = /\.btn-([a-zA-Z0-9-]+)\{background-color:([^;]+);border-color:[^;]+;color:([^}]+)\}/g;
let updatedRules = 0;

css = css.replace(pattern, (_match, name, bg, fg) => {
  updatedRules += 1;
  return `.btn-${name}{--bs-btn-bg:${bg};--bs-btn-border-color:${bg};--bs-btn-hover-bg:${bg};--bs-btn-hover-border-color:${bg};--bs-btn-active-bg:${bg};--bs-btn-active-border-color:${bg};background-color:${bg};border-color:${bg};color:${fg}}`;
});

fs.writeFileSync(filePath, css);
console.log(`UPDATED_RULES=${updatedRules}`);
