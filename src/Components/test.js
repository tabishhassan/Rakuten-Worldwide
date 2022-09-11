class Simulatorloan {
  formula(time, amount, rate) {
    var total = 0;
    var x = 1;
    while (x <= time.value * 3) {
      var nbr =
        (parseFloat(amount.value) / (time.value * 3)) *
        (1 + (parseFloat(rate.value) / 10000 / 12) * (time.value * 3 - x + 1));
      total = parseFloat(total) + parseFloat(nbr);
      x++;
    }
    return total;
  }

  start() {
    var time = document.getElementById("timeloan");
    var amount = document.getElementById("amount");
    var rate = document.getElementById("rateloan");

    var outputime = document.getElementById("valuetimeloan");
    var outputrate = document.getElementById("valuerateloan");

    var showrate = document.getElementById("showrateloan");
    var showamount = document.getElementById("showamount");
    var showmonthly = document.getElementById("showmonthly");

    var maxamount = 50000;
    var minamount = 1000;
    var total = this.formula(time, amount, rate);
    var taxe = 0;
    outputime.innerHTML = time.value * 3;
    outputrate.innerHTML = rate.value / 100;
    showrate.innerHTML = rate.value / 100;
    showamount.innerHTML = amount.value;
    showmonthly.innerHTML = (total / (time.value * 3) + taxe).toFixed(0);

    amount.onchange = function() {
      total = this.formula(time, amount, rate);
      if (amount.value < minamount || amount.value > maxamount) {
        amount.value = minamount;
        total = this.formula(time, amount, rate);
      }
      showamount.innerHTML = amount.value;
      showmonthly.innerHTML = (total / (time.value * 3) + taxe).toFixed(0);
    }.bind(this);

    time.onmousemove = function() {
      total = this.formula(time, amount, rate);
      outputime.innerHTML = time.value * 3;
      showmonthly.innerHTML = (total / (time.value * 3) + taxe).toFixed(0);
    }.bind(this);

    time.onchange = function() {
      total = this.formula(time, amount, rate);
      outputime.innerHTML = time.value * 3;
      showmonthly.innerHTML = (total / (time.value * 3) + taxe).toFixed(0);
    }.bind(this);

    rate.onmousemove = function() {
      total = this.formula(time, amount, rate);
      outputrate.innerHTML = rate.value / 100;
      showrate.innerHTML = rate.value / 100;
      showmonthly.innerHTML = (total / (time.value * 3) + taxe).toFixed(0);
    }.bind(this);

    rate.onchange = function() {
      total = this.formula(time, amount, rate);
      outputrate.innerHTML = rate.value / 100;
      showrate.innerHTML = rate.value / 100;
      showmonthly.innerHTML = (total / (time.value * 3) + taxe).toFixed(0);
    }.bind(this);
  }
}
export default Simulatorloan;
