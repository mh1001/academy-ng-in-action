import { AgePipe } from './age.pipe';

describe(AgePipe.name, () => {
  const pipe = new AgePipe();
  const MOCK_DATE = new Date(2022, 0, 1);

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(MOCK_DATE);
  });

  afterEach(() => jasmine.clock().uninstall());

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return \'\' when no value provided', () => {
    const result = pipe.transform();

    expect(result).toBe('');
  });

  it('should return correct age in when todays month and day are the same', () => {
    const date = new Date(2020, 0, 1);

    const result = pipe.transform(date);

    expect(result).toBe('2');
  });

  it('should return correct age in when todays month is same but day is not', () => {
    const date = new Date(2020, 0, 2);

    const result = pipe.transform(date);

    expect(result).toBe('1');
  });

  it('should return correct age in when todays month and day are not the same', () => {
    const date = new Date(2020, 1, 2);

    const result = pipe.transform(date);

    expect(result).toBe('1');
  });
});
