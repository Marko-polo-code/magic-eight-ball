const userName = 'Mark';

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

const userQuestion = 'Football tonight?';

console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8) + 1;

let eightBall = ''

switch (randomNumber) {
  case 1:
    eightBall = 'It is certain'
    break;
  case 2:
    eightBall = 'It is decidedly so'
    break;
  case 3:
    eightBall = 'Reply hazy try again'
    break;
  case 4:
    eightBall = 'Cannot predict now'
    break;
  case 5:
    eightBall = 'Do not count on it'
    break;
  case 6:
    eightBall = 'My sources say no'
    break;
  case 7:
    eightBall = 'Outlook not so good'
    break;
  case 8:
    eightBall = 'Signs point to yes'
    break;
  Default:
    eightBall = 'Number not correct'
    break;
}

console.log(`Magic 8-Ball says: ${eightBall}`);
