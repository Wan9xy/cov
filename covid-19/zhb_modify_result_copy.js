// match check-report.z.digitalcnzz.com:5443\/hs-check-result\/check\/result\/queryWithToken

var default_value = {
    "code": 0,
    "message": "succ",
    "data": {
        "resultList": [
            {
                "id": 4133335,
                "idCard": "xxxxxxxxxxxxxxxxxx",
                "checkResult": "阴性",
                "checkOrgName": "广州华银医学检验中心有限公司",
                "reportTime": "2021-08-02 21:38:16",
                "createTime": "2021-08-04 02:19:36"
            }
        ]
    }
}


function padding(no) {
    if (no < 10) {
        return "0" + no
    }
    return no
}


function getYesterday(date) {
    let yesterday = new Date(new Date() - 1000 * 60 * 60 * 24)
    return `${yesterday.getFullYear()}-${padding(yesterday.getMonth() + 1)}-${padding(yesterday.getDate())}${date.substring(10, 22)}`
}



function Change_ResponseBody() {
    let item = default_value
    let obj = null
    if ($response.status == 200) {
        obj = JSON.parse($response.body)
        if (obj.code == 0 && obj.data.resultList.length >= 1) {
            // obj.data.resultList = Array(obj.data.resultList.shift())
            item = obj
        }
    }
    item.data.resultList[0].reportTime = getYesterday(item.data.resultList[0].reportTime)
    item.data.resultList[0].createTime = getYesterday(item.data.resultList[0].createTime)
    item.data.resultList[0].checkResult = "阴性"
    let body = JSON.stringify(item)
    $done({ body });

}

Change_ResponseBody()