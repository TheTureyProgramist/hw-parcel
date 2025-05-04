const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");
const data = [
  150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
  420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
  900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
];
const width = canvas.width;
const height = canvas.height;
const padding = 40;
const maxValue = Math.max(...data);
const stepX = (width - 2 * padding) / (data.length - 1);
const scaleY = (height - 2 * padding) / maxValue;
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, width, height);
ctx.strokeStyle = "#eee";
ctx.lineWidth = 1;
for (let i = 0; i <= 5; i++) {
  const y = padding + i * ((height - 2 * padding) / 5);
  ctx.beginPath();
  ctx.moveTo(padding, y);
  ctx.lineTo(width - padding, y);
  ctx.stroke();
  const label = Math.round(maxValue - (i * maxValue / 5));
  ctx.fillStyle = "#700";
  ctx.fillText(label, 5, y + 4);
}
ctx.strokeStyle = "#2196f3";
ctx.lineWidth = 2;
ctx.beginPath();
data.forEach((value, i) => {
  const x = padding + i * stepX;
  const y = height - padding - value * scaleY;
  if (i === 0) ctx.moveTo(x, y);
  else ctx.lineTo(x, y);
});
ctx.stroke();
ctx.fillStyle = "#21963";
data.forEach((value, i) => {
  const x = padding + i * stepX;
  const y = height - padding - value * scaleY;
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fill();
});