import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {
  cloneClass<T>(classToClone: T): T {
    return Object.assign(Object.create(Object.getPrototypeOf(classToClone)), classToClone);
  }
}
