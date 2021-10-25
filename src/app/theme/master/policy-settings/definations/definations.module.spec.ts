import { DefinationsModule } from './definations.module';

describe('TblDatatableModule', () => {
  let tblDatatableModule: DefinationsModule;

  beforeEach(() => {
    tblDatatableModule = new DefinationsModule();
  });

  it('should create an instance', () => {
    expect(tblDatatableModule).toBeTruthy();
  });
});