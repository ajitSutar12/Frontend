// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // base_url : 'http://134.209.159.164:4000'
  // base_url : 'http://192.168.1.230:4000'
  // base_url: 'http://192.168.1.179:4000'
  // base_url: 'http://139.59.86.29:4000'  //CBS regular build
  // base_url: 'http://139.59.63.215:7276',   //CBS test server

  // base_url: 'http://139.59.63.215:7276',  //CBS  test server
  // base_url: 'http://139.59.63.215:4713',  //CBS sidhanerli server
  // base_url: 'http://139.59.63.215:9152',  //CBS  BHAIRAVNATH site server
  base_url: 'http://localhost:7276',
  // base_url: 'http://localhost:3000',
  // base_url: 'http://localhost:4000',

  // base_url: 'http://192.168.1.154:4000'  //sudam sir PC

  // report_url: 'http://139.59.63.215/bhairavnath_phpjasperxml-master/', //server bhairavnath site report folder path
  // report_url: 'http://139.59.63.215/bh_phpjasperxml-master/', //server bhairavnath report folder path
  // report_url: 'http://localhost/bh_phpjasperxml-master/', //server bhairavnath report folder path
  // report_url: 'http://139.59.63.215/bh_test_phpjasperxml-master/' //server bhairavnath report test folder path
  report_url: 'http://139.59.63.215/SIDHANERLI/REPORTS/', //server sidhanerli report folder path

  // report_url: 'http://localhost/phpjasper/', //report folder local path
  // report_url: 'http://localhost/phpjasper/examples/r', //report folder path
  // report_url: 'http://localhost/phpjasper/examples/v', //report folder path
  // report_url: 'http://localhost/phpjasper/examples/s', //report folder path

  // sitename: 'http://139.59.63.215/bhn_cbs'  //server bhairavnath hotkey
  // sitename: 'http://139.59.63.215/bhairavnath' //server bhairavnath site hotkey
  sitename: 'http://139.59.63.215/SIDHANERLI/CBS' //server sidhanerli site hotkey

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
