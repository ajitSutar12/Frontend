import { InformationModule } from './information.module';

describe('TblDatatableModule', () => {
  let tblDatatableModule: InformationModule;

  beforeEach(() => {
    tblDatatableModule = new InformationModule();
  });

  it('should create an instance', () => {
    expect(tblDatatableModule).toBeTruthy();
  });
});