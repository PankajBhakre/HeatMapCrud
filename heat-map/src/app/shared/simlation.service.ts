import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimlationService {
  constructor() {}
  public getUser() {
    return [
      {
        id: 1,
        firstName: 'Frank',
        lastName: 'Murphy',
        email: 'frank.murphy@test.com',
        role: 'User',
        Fav_flag:1
      },

      {
        id: 2,
        firstName: 'Vic',
        lastName: 'Reynolds',
        email: 'vic.reynolds@test.com',
        role: 'Admin',
        Fav_flag:1
      },

      {
        id: 3,
        firstName: 'Gina',
        lastName: 'Jabowski',
        email: 'gina.jabowski@test.com',
        role: 'Admin',
        Fav_flag:0
      },

      {
        id: 4,
        firstName: 'Jessi',
        lastName: 'Glaser',
        email: 'jessi.glaser@test.com',
        role: 'User',
        Fav_flag:0
      },

      {
        id: 5,
        firstName: 'Jay',
        lastName: 'Bilzerian',
        email: 'jay.bilzerian@test.com',
        role: 'User',
        Fav_flag:0
      },
    ];
  }
}
