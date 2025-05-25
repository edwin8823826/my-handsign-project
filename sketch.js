let model;
let status = "載入中...";

async function initModel() {
  await tf.ready();
  status = "🚀 嘗試載入模型中...";
  try {
    model = await tf.loadLayersModel("model_tfjs/model.json");
    status = "✅ 模型載入成功！";
  } catch (err) {
    console.error(err);
    status = "❌ 模型載入失敗...";
  }
}

function setup() {
  createCanvas(400, 200);
  textSize(24);
  initModel();
}

function draw() {
  background(30);
  fill(255);
  text(status, 50, 100);
}
