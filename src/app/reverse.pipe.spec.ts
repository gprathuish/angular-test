import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });


  it('should give reverse value', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('hello')).toBe('olleh');
  })
});
