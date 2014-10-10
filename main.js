window.onload = function(){
  var luck = ["大凶","凶","末吉","小吉","中吉","吉","大吉"];
  var colors = ["赤","青","黄","緑","白","黒","金","銀","茶","紫"];
  var message, random_luck, random_color;
  var btn = document.getElementById("btn");
  var output = document.getElementById("output");

  function random_lucky(){
    var rand = Math.floor(Math.random() * 100);
    console.log(rand);
    if(rand === 0)        return luck[0];
    else if(rand < 10)    return luck[1];
    else if(rand < 30)    return luck[2];
    else if(rand < 60)    return luck[3];
    else if(rand < 90)    return luck[4];
    else if(rand < 100)   return luck[5];
    else if(rand === 100) return luck[6];
  }

  btn.onclick = function(){
    //random_luck = luck[ Math.floor(Math.random() * luck.length)];
    random_luck = random_lucky();
    random_color = colors[Math.floor(Math.random() * colors.length)];

    message = "<h2>" + random_luck + "</h2>";
    message += "<p>ラッキーカラーは" + random_color + "</p>";
    output.innerHTML = message;
  }
}
