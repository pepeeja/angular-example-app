import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  let domSanitizerMock: DomSanitizer | null = null;

  beforeAll(() => {
    domSanitizerMock = {
      sanitize(ctx, value) {
        return null;
      },
      bypassSecurityTrustHtml: (value: any) => value.toString(),
      bypassSecurityTrustStyle: (value: any) => value.toString(),
      bypassSecurityTrustScript: (value: any) => value.toString(),
      bypassSecurityTrustUrl: (value: any) => value.toString(),
      bypassSecurityTrustResourceUrl: (value: any) => value.toString(),
    };
  });

  it('create an instance', () => {
    const pipe = new SafePipe(domSanitizerMock!);
    expect(pipe).toBeTruthy();
  });

  it('it should sanitize html', () => {
    const pipe = new SafePipe(domSanitizerMock!);
    const result = pipe.transform('asdasd', 'html');
    expect(result).toBeTruthy();
  });

  it('it should sanitize style', () => {
    const pipe = new SafePipe(domSanitizerMock!);
    const result = pipe.transform('asdasd', 'style');
    expect(result).toBeTruthy();
  });

  it('it should sanitize script', () => {
    const pipe = new SafePipe(domSanitizerMock!);
    const result = pipe.transform('asdasd', 'script');
    expect(result).toBeTruthy();
  });

  it('it should sanitize url', () => {
    const pipe = new SafePipe(domSanitizerMock!);
    const result = pipe.transform('asdasd', 'url');
    expect(result).toBeTruthy();
  });

  it('it should sanitize resourceUrl', () => {
    const pipe = new SafePipe(domSanitizerMock!);
    const result = pipe.transform('asdasd', 'resource');
    expect(result).toBeTruthy();
  });
});
