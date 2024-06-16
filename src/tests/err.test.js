/* eslint-disable no-undef */

import { Character } from "../class/characters";

test('Неверный тип', () => {
    expect(() => new Character('Imya', 'Angel')).toThrow(new Error('Неверный тип персонажа'))
  });
  

test('Неверная длина имени', () => {
  expect(() => new Character('TooLongName', 'Zombie')).toThrow(new Error('Имя должно содержать от 2 до 10 символов'))
});

test('Нанесение урона', () => {
    const person = new Character('Imya', 'Zombie');
    person.health = -1;
  expect(() => person.damage(10)).toThrow(new Error('Нельзя убить умершего'))
});

test('Повышение уровня умершего', () => {
    const person = new Character('Imya', 'Zombie');
    person.health = 0;
  expect(() => person.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'))
});

