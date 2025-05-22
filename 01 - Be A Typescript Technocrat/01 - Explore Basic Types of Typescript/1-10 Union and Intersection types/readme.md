# Union and Intersection types

- ## union type
  ```ts
  type FrontendDeveloper = "fakibazz" | 'juniorDeveloper';

  const newDeveloper : FrontendDeveloper = 'fakibazz'; //? we can use here only fakibazz or juniorDeveloper

  type User = {
    name: string,
    email: string,
    gender: 'male' | 'female',
    bloodGroup: 'A+' | 'B+',
  }

  type FullStackDeveloper = FrontendDeveloper |  'expertDeveloper';
  ```

- ## intersection type
  ```ts
  type FrontedDeveloper1 = {
    skills: string[];
    designation1: 'Frontend Developer';

  }
  type BackendDeveloper1 = {
    skills: string[];
    designation2: 'Backend Developer';
  }

  type FullstackDeveloper1 = FrontedDeveloper1 & BackendDeveloper1;

  const fullstackDeveloper: FullstackDeveloper1 = {
    skills: ['html', 'css'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
  }
  ```
