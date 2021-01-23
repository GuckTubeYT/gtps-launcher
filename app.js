const fs = require("fs");
const rl = require("readline").createInterface(process.stdin,process.stdout);
const location = "C:\\Windows\\System32\\drivers\\etc\\hosts";

console.clear();
console.log("1 | turn On");
console.log("2 | turn Off");
rl.question("[ ? ] please Select : ", function(select){
    if (select === "1") {
        console.clear();
        rl.question("[ ? ] ip Server : ", function(ipserver){
            console.clear();
            fs.writeFile(location, `${ipserver} growtopia1.com\n${ipserver} growtopia2.com`, function(err){
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("successfully changed to : " + ipserver)
                }
            })
        })
    }
    else if (select === "2") {
        console.clear();
        fs.writeFile(location, ``, function(err){
            if (err) {
                console.log(err)
            }
            else {
                console.log("successfully turn off")
            }
        })
    }
    else {
        console.clear();
        console.log("[ - ] not found")
    }
});