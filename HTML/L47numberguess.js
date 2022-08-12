const minnum = document.querySelector(".minnumber");
maxnum = document.querySelector(".maxnumber");
getinput = document.querySelector("#guessnumber");
getbtn = document.querySelector("#btn");
message1 = document.querySelector(".message1");
message2 = document.querySelector(".message2");
getgame = document.querySelector("#game");

let min = 1;
max = 10;
gameleft = 3;
winningnum = randomnum(min, max);

minnum.textContent = min;
maxnum.textContent = max;

getbtn.addEventListener("click", function () {
  //   console.log(getinput.value);

  let guess = parseInt(getinput.value);
  //   console.log(guess);
  //   console.log(typeof guess);

  // let guess = getinput.value;

  if (guess < min || guess > max || isNaN(guess)) {
    // console.log(`Please enter a number between ${min} to ${max}`);
    // message2.textContent = `Please enter a number between ${min} to ${max}`;

    setmessage2(`Please enter a number between ${min} to ${max}`, "red");
  }

  if (guess === winningnum) {
    //Gameover Won
    //disable getinput
    //getinput border color to Green
    //message 1
    //play again ?

    // getinput.disabled = true;
    // getinput.style.borderColor = "green";
    // message1.textContent = `${winningnum} is correct !! You WON!!`;
    // message1.style.color = "green";

    // setmessage1(`${winningnum} is correct !! You WON!!`, "green");
    // getbtn.value = "play again";

    gameover(true, `${winningnum} is correct !! You WON!!`);
  } else {
    //Wrong Number

    gameleft -= 1;

    // console.log(gameleft);

    if (gameleft === 0) {
      //gameover lose game
      //disable getinput
      //getinput border color to red
      //message1
      //play again

      // getinput.disabled = true;
      // getinput.style.borderColor = "red";
      // message1.textContent = `Game Over ! You LOSE !! The correct number is ${winningnum}`;
      // message1.style.color = "red";

      // setmessage1(
      //   `Game Over ! You LOSE !! The correct number is ${winningnum}`,
      //   "red"
      // );
      // getbtn.value = "play again";

      gameover(
        "false",
        `Game Over ! You LOSE !! The correct number is ${winningnum}`
      );
    } else {
      //continue game
      //getinput border color to red
      //clear getinput old value
      //message1

      getinput.style.borderColor = "red";
      getinput.value = "";
      // message1.textContent = `${guess} is not correct , ${gameleft} guess left`;
      // message1.style.color = "blue";

      setmessage1(`${guess} is not correct , ${gameleft} guess left`, "blue");
    }
  }
});

function setmessage1(msg, color) {
  message1.textContent = msg;
  message1.style.color = color;
}

function setmessage2(msg, color) {
  message2.textContent = msg;
  message2.style.color = color;

  setTimeout(function () {
    message2.textContent = "";
  }, 2000);
}

function gameover(won, msg) {
  let color;

  won === true ? (color = "green") : (color = "red");

  getinput.disabled = true;
  getinput.style.borderColor = color;

  setmessage1(msg, color);

  getbtn.value = "play again";

  getbtn.classList.add("playgain");
}

getgame.addEventListener("mouseup", function (e) {
  // console.log(e.target);

  if (e.target.className === "btn playgain") {
    window.location.reload();
  }
});

// let getrdm = Math.floor(Math.random()*(max-min) + 1);
// console.log(getrdm);

function randomnum(min, max) {
  let getrdm = Math.floor(Math.random() * (max - min) + 1);
  return getrdm;
}
