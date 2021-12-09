
export function score(player, computer) {
    if (player === 'rock' && computer === 'rock') {
        return 'tie';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'computer win';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'player win';
    }
    if (player === 'paper' && computer === 'rock') {
        return 'player win';
    }
    if (player === 'paper' && computer === 'paper') {
        return 'tie';
    }
    if (player === 'paper' && computer === 'scissors') {
        return 'computer win';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'computer win';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'player win';
    }
    if (player === 'scissors' && computer === 'scissors') {
        return 'tie';
    }
}
