const ExcelSh = require ("read-excel-file");
//https://www.npmjs.com/package/read-excel-file

var ExcelReader = function (path_to_file, sheetId, after_auth) {
    this._sheelapi = null;
    this._SheetId = sheetId;
    this._sheetsFilter = "*";
    this._path = path_to_file;
    this._fetchDeferred = Q.defer ();
    this._sheet = new ExcelSh (path_to_file, (data) => {




        after_auth ()
    })
};
