import { TestBed } from '@angular/core/testing';

import { TodotreeService } from './todotree.service';

import {
  helloWorld
} from "./todotree.service"

describe('Hello world', () => {

  let expected = "";

  beforeEach(() => {
    expected = "Hello world!";
  });

  afterEach(() => {
    expected = "";
  });

  it('says hello', () => {
    expect(helloWorld())
      .toEqual(expected);
  });
});

describe('TodotreeService', () => {
  let service: TodotreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodotreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
