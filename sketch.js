let points = [[1, 3], [3, 4], [8, 5],[9,7],[9,15],[10,19],[11,22],[13,23],[15,24],[13,22],[13,19],[15,15],
[16,12],[17,7],[18,5],[22,4],[25,3],[22,2],[17,1],[9,1],[3,2],[1,3],[8, 5], [11, 4], [15, 4],[18,5],[17,7],
[15,6],[11,6],[9,7],[8,5]]; //list資料，




function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  // translate(mouseX, mouseY);
  let scaleFactor = map(mouseY, 0, height, 0.2, 2); // 讓滑鼠位置控制縮放比例
  scale(scaleFactor);

  let size = 10;
  let color1 = color(255, 0, 0); // 漸層的第一個顏色
  let color2 = color(0, 0, 255); // 漸層的第二個顏色
  let gradientStep = 1.0 / (points.length - 1); 

  for (let i = 0; i < 5; i++) {
    for (let i = 0; i < points.length-1; i++) {
    let gradientValue = i * gradientStep; // 計算此線段的漸層值
    let lineColor = lerpColor(color1, color2, gradientValue); // 基於漸層值插值顏色
    stroke(lineColor); // 設置描邊顏色為漸層顏色
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
   }
  }
  let gradientValue = 1.0;
  let lineColor = lerpColor(color1, color2, gradientValue);
  stroke(lineColor);
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);//把最後一點與第一點的連線

  //第六題
  push();
  scale(1, -1);
  textSize(30);  //文字大小
  fill(255, 0, 0);  //設定顏色
  text(" Sorting Hat",-50,0)  //顯示文字
  pop();
}

