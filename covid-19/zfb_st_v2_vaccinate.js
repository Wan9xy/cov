
// https://unified-area-code-v-service.jianguan.henan.gov.cn/vaccineapi/vaccine/findByIdCard

body = JSON.stringify({
    "params": null,
    "errorMessage": null,
    "obj": {
        "vaccinate": true,
        "idCard": "152127199709191512",
        "vaccinateCount": 3
    },
    "success": true,
    "date": null,
    "version": null,
    "business": null,
    "requestId": null,
    "errorCode": null
})
$done({ body });
