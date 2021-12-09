// IMPORT MODULES under test here:
// import { add } from '../calc.js';
import { score } from '../game.js';

const test = QUnit.test;

test('player rock, computer rock is tie', (expect) => {
    const player = 'rock';
    const computer = 'rock';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});

test('player rock, computer paper is computer win', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'computer win';
    const actual = score(player, computer);
    expect.equal(expected, actual); 
});

test('player rock, computer scissors is player win', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player win';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});

test('player paper, computer rock is player win', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const expected = 'player win';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});

test('player paper, computer paper is tie', (expect) => {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});

test('player paper, computer scissors is computer win', (expect) => {
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'computer win';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});

test('player scissors, computer rock is computer win', (expect) => {
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'computer win';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});

test('player scissors, computer paper is player win', (expect) => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'player win';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});

test('player scissors, computer scissors is tie', (expect) => {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'tie';
    const actual = score(player, computer);
    expect.equal(expected, actual);
});