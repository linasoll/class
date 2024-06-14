/* eslint-disable no-undef */
import { Character } from "../characters";
import { Bowerman } from "../characters";
import { Swordsman } from "../characters";
import { Magician } from "../characters";
import { Undead } from "../characters";
import { Zombie } from "../characters";
import { Daemon } from "../characters";

test('Создание персонажа', () => {
    const character = new Character('Лучник', 'Bowerman');
    expect(character.name).toBe('Лучник');
    expect(character.type).toBe('Bowerman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

test('Проверка имени', () => {
  const person = new Bowerman('Imya', 'Bowerman');
  const result = person.validateName('Imya', 'Bowerman');
  expect(result).toBe('Imya');
});

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

test('Создание Лучника', () => {
  const character = new Bowerman('Лучник', 'Bowerman');
  expect(character.name).toBe('Лучник');
  expect(character.type).toBe('Bowerman');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('Создание Мечника', () => {
  const character = new Swordsman('Мечник', 'Swordsman');
  expect(character.name).toBe('Мечник');
  expect(character.type).toBe('Swordsman');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('Создание Мага', () => {
  const character = new Magician('Маг', 'Magician');
  expect(character.name).toBe('Маг');
  expect(character.type).toBe('Magician');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('Создание Нежити', () => {
  const character = new Undead('Нежить', 'Undead');
  expect(character.name).toBe('Нежить');
  expect(character.type).toBe('Undead');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('Создание Зомби', () => {
  const character = new Zombie('Зомби', 'Zombie');
  expect(character.name).toBe('Зомби');
  expect(character.type).toBe('Zombie');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('Создание Демона', () => {
  const character = new Daemon('Демон', 'Daemon');
  expect(character.name).toBe('Демон');
  expect(character.type).toBe('Daemon');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});