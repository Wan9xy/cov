// https://unified-area-code-n-service.jianguan.henan.gov.cn/nucleicapi/acid/findByIdCard

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

let now = (new Date().getTime())
let sampleTimestamp = now - 1000 * 60 * 60 * 8
let expireTimestamp = 60 * 60 * 48 + sampleTimestamp

body = JSON.stringify({
    "params": null,
    "errorMessage": null,
    "obj": {
        "idCard": "152127199709191512",
        "nucleicInfo": {
            "idCard": "152127199709191512",
            "sampleTimestamp": sampleTimestamp,
            "samplingTime": new Date(sampleTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
            "sysTimestamp": now,
            "timeDesc": "",
            "acidResult": "阴性",
            "source": "0",
            "expireTime": new Date(sampleTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
            "expireTimeStamp": expireTimestamp,
            "expireHour": 24
        },
      "vaccineInfo" : {
        "vaccinate": true,
        "vaccinateCount": 2
      }
    },
    "success": true,
    "date": null,
    "version": null,
    "business": null,
    "requestId": null,
    "errorCode": null
})
$done({body});
