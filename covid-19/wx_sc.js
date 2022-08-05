let body = JSON.stringify(
    {
        "errcode": 0,
        "errmsg": "SUCCESS",
        "data": [{
            "hscysj": "2020-05-23 19:00:00",
            "hsjcsj": "2020-05-24 02:00:00",
            "hsjcjgmc": "成都博奥独立医学实验室有限公司",
            "hsjcjg": "阴性"
        },
        {
            "hscysj": "2020-05-22 18:00:00",
            "hsjcsj": "2020-05-23 09:00:00",
            "hsjcjgmc": "成都博奥独立医学实验室有限公司",
            "hsjcjg": "阴性"
        }
    ]
    }
);
$done({ body })

// rio.scdsjzx.cn/ebus/jkm/gethsjcfromsichuan