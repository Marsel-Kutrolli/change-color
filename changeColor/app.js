const caracters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //1.Krijojme ne var array me numra dhe shkronja per ti bashkuar te formojne kodet e ngjyrave (perdoren deri te shkronja "F")
const color = document.querySelector(".color"); //2.Selektojme class color te span-it
const btn = document.getElementById("btn"); //3.Selektojme butonin


function randomNumber() {  //10.Duam ti krijojme ngjyrat apo ti bashkojme numrat me shkronjat ne menyre "random" dhe krijojme nje funksion
    return Math.floor(Math.random() * caracters.length);  //11.E kthejme ne Math.random per random number i shtojme Math.floor per ta rrumbullakosur dhe e shumzojme me numrin e elementeve (length)e  varit qe duam te perdorim (caracters)
  }

btn.addEventListener("click", function () {  //4.I japim nje funksion butonit kur klikohet
  let caractersColor = "#"; //5.Per te krijuar nje ngjyre duhet "#" thurja dhe 6 elemente qe mund te jene numra apo shkronja dhe si fillim krijojme nje var dhe i japim vleren "#" thurje qe me pas do ti shtojme elementet e tjere nga array lart (caracters)
  for (let i = 0; i < 6; i++) { //6.Krojojme nje loop me numrin e elementeve 6 meqe nje ngjyre mban 6 elemente (shkronja dhe numra vec thurjes), pra sa here ti japim run kodit do marri 6 elemente nga var caracters dhe duam ti shtoje ne varin caractersColor
    caractersColor += caracters[randomNumber()]; //7.I shtojme caractersColor vleren e pare ne array (pra caracters[0] 6 te tilla ne kete rast gjashte zero dhe del ngjyra) //12.Marrim functionin getRandomNumber() dhe ja shtojme caractersColor-it pra 6 vlerat random ja shtojme varit ku ndodhet thurja keto ne meyre random qe te krijohen ngjyrat random
  }
  // console.log(caractersColor);

  color.textContent = caractersColor; //8.I ndryshjme permbajtjen e tekstit spanit (class color) pra nga vetem thurje i shtojme tekstin qe krijojme ne caractersColor
  document.body.style.backgroundColor = caractersColor;  //9.I ndryshjme stilin documentit apo proerties se body classes color pra spanit e barazojme me caractersColor
});
