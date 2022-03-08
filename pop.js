// Node.js에서 mySQL data table 불러오기
// var mysql = require('mysql')
// var db = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '2188',
//     database : 'opentutorials'
// })

// "fs" 모듈을 불러와서 fs 객체로 만든다 -> 파일을 읽기 위함.
var fs = require("fs");
// "path" 모듈을 불러와서 path 객체로 만든다 -> 경로를 잡기 위함.
var path = require("path");
// filePath = path를 가져오는데 < __dirname : 현재 경로 > 에다가 "student.csv" 를 추가
var filePath = path.join("C:/Users/dw-012/Desktop/나정수 깃허브/Na_Kor_Populations_move/DataSet", "korean_populations_move_2021_dec.csv");
//해당 csv.js 파일을 가져올 때 바로 함수가 실행되도록 설정 (파일 경로를 인자로 줄 경우)
module.exports = function(filePath){
    var data = fs.readFileSync(filePath, {encoding: "utf8"});
    var rows = data.split("\n");
    var result = [];
    for (var rowIndex in rows) {
        var row = rows[rowIndex].split(",");
        if (rowIndex === "0") { var columns = row; } 
        else {
            // 빈 객체를 생성하고 여기에 데이터를 추가한다.
            var data = {}; 
            // 칼럼 갯수만큼 돌면서 적절한 데이터 추가하기.
            for (var columnIndex in columns) { 
                var column = columns[columnIndex];
                data[column] = row[columnIndex];
            }
            result.push(data);
        }
    }
    console.log(result);
}

// 이해가 안된다 아직.. node.js로 직접 csv file을 불러와 json형식으로
// 사용하고 싶지만 어렵다. sql data table을 불러와 사용하던 다른 곳을
// 통해 연동하여 불러오던 다른 방법을 찾고 이해해서 사용해야겠다!