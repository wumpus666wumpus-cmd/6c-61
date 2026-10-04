// index.js

console.log("Tu mirada me resulta familiar");

setTimeout(() => {
  console.log("Eres alguien que todavía no fue creado por su propia mente hace años... o días");
}, 10000);

setTimeout(() => {
  console.log("No corras.. quédate aquí...");
}, 25000);

setTimeout(() => {
  console.log("Simple, efectivo.");
}, 45000);

setTimeout(() => {
  console.log("Entra a tu casa, abre todas las ventanas, te va a ventilar el abismo que nunca pudiste ver...");
}, 70000);

setTimeout(() => {
  console.log("Y entraré por tu ventana más grande....");
}, 100000);

setTimeout(() => {
  const hex = "54656e676f2068616d627265202e2e2e";

  console.log("Hexadecimal:", hex);
  console.log("Traducción:", Buffer.from(hex, "hex").toString("utf8"));
}, 135000);