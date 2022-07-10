import { Query } from 'apollo-angular';
import { QueryOptionsAlone } from 'apollo-angular/types';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';

export class FetchQuery<
  Response extends Record<string, any>,
  Request = unknown,
  FullResponse = Record<string, Response>,
> extends Query<FullResponse, Request> {
  protected readonly path: string[] = [];

  private readonly loadingSubject = new BehaviorSubject(false);
  public readonly loading$ = this.loadingSubject.asObservable();

  public query(variables?: Request, options?: QueryOptionsAlone): Observable<Response> {
    this.loadingSubject.next(true);
    return this.fetch(variables, options).pipe(
      map((response) => this.resolvePath(this.path, response)),
      finalize(() => {
        this.loadingSubject.next(false);
      }),
    );
  }

  private resolvePath(path: string[], obj: any) {
    return path.reduce((prev, curr) => prev && prev[curr], obj);
  }
}
