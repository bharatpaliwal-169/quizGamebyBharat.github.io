function checkAns(){
  var response = document.getElementById('response').value;
  // check value of response
  console.log(response);

  // var checker = document.getElementById('ans').innerHTML;

  if (response === 'carryminati') {
    document.getElementById('ans').innerHTML = 'Correct Answer!';
  }
  else if (response == '') {
    window.alert('Please give your response');
  }
  else {
    document.getElementById('ans').innerHTML = 'Wrong Answer Try Again!'
    // window.alert('Wrong answer try again!');
  }

}
function checkAns_2(){
  var response_2 = document.getElementById('response-2').value;
  // check value of response
  console.log(response_2);

  // var checker = document.getElementById('ans').innerHTML;

  if (response_2 === 'jodhpur') {
    document.getElementById('ans-2').innerHTML = 'Correct Answer!';
  }
  else if (response_2 == '') {
    window.alert('Please give your response');
  }
  else {
    document.getElementById('ans-2').innerHTML = 'Wrong Answer Try Again!'
    // window.alert('Wrong answer try again!');
  }

}
function checkAns_3(){
  var response_3 = document.getElementById('response-3').value;
  // check value of response
  console.log(response_3);

  // var checker = document.getElementById('ans').innerHTML;

  if (response_3 === '2016') {
    document.getElementById('ans-3').innerHTML = 'Correct Answer!';
  }
  else if (response_3 == '') {
    window.alert('Please give your response');
  }
  else {
    document.getElementById('ans-3').innerHTML = 'Wrong Answer Try Again!'
    // window.alert('Wrong answer try again!');
  }

}
function checkAns_4(){
  var response_4 = document.getElementById('response-4').value;
  // check value of response
  console.log(response_4);

  // var checker = document.getElementById('ans').innerHTML;

  if (response_4 === 'om birla') {
    document.getElementById('ans-4').innerHTML = 'Correct Answer!';
  }
  else if (response_4 == '') {
    window.alert('Please give your response');
  }
  else {
    document.getElementById('ans-4').innerHTML = 'Wrong Answer Try Again!'
    // window.alert('Wrong answer try again!');
  }

}
function hint_1() {
  document.getElementById('hint_ans').innerHTML = 'its trending! Youtube v/s tiktok :)'
}
function hint_2() {
  document.getElementById('hint_ans2').innerHTML = 'city similar to jaipur :)'
}
function hint_3() {
  document.getElementById('hint_ans3').innerHTML = 'the recently passed Leap year of this century'
}
function hint_4() {
  document.getElementById('hint_ans4').innerHTML = 'He served as a Member of Parliament for the Kota-Bundi constituency in Rajasthan. Prior to parliament, he was elected thrice to the assembly of Rajasthan. He belongs to the Bharatiya Janata Party.'
}
function like() {
  document.getElementById('liked').innerHTML = 'Liked!';
}
