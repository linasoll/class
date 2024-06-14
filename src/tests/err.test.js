/* eslint-disable no-undef */

import { Bowerman } from "../characters";
import { Zombie } from "../characters";


test('Повышение уровня умершего', () => {
    const person = new Zombie('Imya', 'Zombie');
    person.health = 0;
    person.levelUp();
    expect(person.level).toThrowError()
  })

test('Неверная длина имени', () => {
  const person = new Bowerman('TooLongName', 'Bowerman');
  const result = person.validateName('TooLongName', 'Bowerman');
  expect(result).toThrowError();
});

test('Неверный тип', () => {
  const person = new Bowerman('Imya', 'Angel');
  const result = person.validateName('Imya', 'Angel');
  expect(result).toThrowError();
});

test('Нанесение урона', () => {
    const person = new Zombie('Imya', 'Zombie');
    person.health = -1;
    person.damage(10);
    expect(person.health).toThrowError()
  })  