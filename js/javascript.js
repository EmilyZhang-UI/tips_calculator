function createTipsOptions() {
  var tips = document.getElementById("tips_array").value;
  if(tips == ""){
    alert("请输入小费选项");
    return;
  }
  var tips_array = tips.split(",");
  var length_tips = tips_array.length;
  var div_buttons = document.getElementById("tips_options_buttons");
  var strButtons = "";
  for (var i = 0; i < length_tips; i++) {
    strButtons = strButtons + createTipsOptionsButtons(tips_array[i]);
  }
  div_buttons.innerHTML = strButtons;
}

function createTipsOptionsButtons(tip){
  var str_button = "<button class='tip_button btn btn-success' type='button' onclick='createTip("+tip+")'>"+tip+"%</button>";
  return str_button;
}

function createTip(tip) {
    var prices = document.getElementById("show_prices");
    var initial_price = document.getElementById("initial_price").value;
    if(initial_price == ""){
      initial_price = 0;
    }
    var calculate_tip = initial_price*(tip/100);
    var finial_price = parseFloat(initial_price) + parseFloat(calculate_tip);
    var str_prices = "<label>您的初始价格：</label><div class='price'>"+initial_price+"</div>"
    +"<label>您的小费：</label><div class='price'>"+calculate_tip.toFixed(2)+"</div>"
    +"<label>您的最终价格：</label><div class='price'>"+finial_price.toFixed(2)+"</div>";
    prices.innerHTML = str_prices;
}
