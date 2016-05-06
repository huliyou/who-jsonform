/**
 * Happy Hacking
 * Created by leiyouwho on 5/5/2016.
 */

export default {
  "type": "object",
  "properties": {
    "patientInfo": {
      "title": "基础信息",
      "type": "object",
      "properties": {
        "patientName": {
          "type": "string",
          "title": "1.患者姓名"
        },
        "patientGender": {
          "type": "string",
          "title": "2.性别",
          "enum": [
            "男",
            "女"
          ]
        },
        "patientBirthdate": {
          "type": "string",
          "format": "date-time",
          "title": "3.出生日期"
        },
        "contactPhone": {
          "type": "string",
          "title": "6.联系人手机号"
        },
        "contactRelationship": {
          "type": "string",
          "title": "4.联系人与患者关系",
          "enum": [
            "本人",
            "亲属"
          ]
        }
      },
      "required": [
        "patientName",
        "patientGender",
        "patientBirthdate",
        "contactRelationship"
      ]
    },
    "buildInfo": {
      "type": "object",
      "title": "建档信息",
      "properties": {
        "doctorStudioNumber": {
          "type": "string",
          "title": "1.就诊门诊号"
        },
        "coronaryFamilyHistory": {
          "type": "object",
          "title": "2.患者是否存在冠心病家族史？",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "否"
            },
            "stroke": {
              "type": "boolean",
              "title": "脑卒中"
            },
            "hypertension": {
              "type": "boolean",
              "title": "高血压"
            },
            "diabetes": {
              "type": "boolean",
              "title": "糖尿病"
            },
            "coronary": {
              "type": "boolean",
              "title": "冠心病"
            },
            "dyslipidemia": {
              "type": "boolean",
              "title": "血脂异常"
            },
            "otherBoolean": {
              "type": "boolean",
              "title": "其他"
            },
            "other": {
              "type": "string",
              "title": ""
            }
          }
        },
        "CVD": {
          "type": "object",
          "title": "3.患者是否存在心血管疾病史？",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "否"
            },
            "hypertensiveHeart": {
              "type": "boolean",
              "title": "高血压心脏病"
            },
            "ischemicHeart": {
              "type": "boolean",
              "title": "缺血性心脏病"
            },
            "visceralValvular": {
              "type": "boolean",
              "title": "脏瓣膜病"
            },
            "congestiveHeart": {
              "type": "boolean",
              "title": "心衰"
            },
            "arrhythmia": {
              "type": "boolean",
              "title": "心律不齐"
            },
            "corPulmonale": {
              "type": "boolean",
              "title": "肺心病"
            },
            "allLesions": {
              "type": "boolean",
              "title": "心机病变"
            },
            "HeartInflammation": {
              "type": "boolean",
              "title": "心脏炎症"
            },
            "rheumaticHeart": {
              "type": "boolean",
              "title": "风心病"
            },
            "congenitalHeart": {
              "type": "boolean",
              "title": "先心"
            }
          }
        },
        "smoking": {
          "type": "object",
          "title": "4.现在是否吸烟？",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "否"
            },
            "yes": {
              "type": "boolean",
              "title": "是"
            },
            "bmi": {
              "type": "string",
              "title": "BMI指数"
            }
          }
        },
        "drinking": {
          "type": "object",
          "multi": true,
          "title": "5.是否饮酒",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "否"
            },
            "yes": {
              "type": "boolean",
              "title": "是"
            },
            "yearOfDrinking": {
              "type": "number",
              "title": "酒龄(年)"
            },
            "dayOfDrinking": {
              "type": "number",
              "title": "每天饮酒量(两)"
            }
          }
        },
        "otherDisease": {
          "type": "object",
          "title": "6.患者的其他疾病?",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "否"
            },
            "congestiveHeart": {
              "type": "boolean",
              "title": "心衰"
            },
            "hypertension": {
              "type": "boolean",
              "title": "高血压"
            },
            "hyperlipidemiaPressure": {
              "type": "boolean",
              "title": "高脂血压"
            },
            "stroke": {
              "type": "boolean",
              "title": "脑卒中"
            },
            "chronicKidney": {
              "type": "boolean",
              "title": "慢性肾脏病"
            },
            "diabetes": {
              "type": "boolean",
              "title": "糖尿病"
            },
            "yearsOfiabetes": {
              "type": "number",
              "title": "患病年限(单位:年)"
            },
            "otherBoolean": {
              "type": "boolean",
              "title": "其他"
            },
            "other": {
              "type": "string",
              "title": "请注明"
            }
          }
        },
        "lifeStyleIntervention": {
          "type": "object",
          "title": "7.患者目前进行过哪些生活方式干预？",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "无"
            },
            "regularExercise": {
              "type": "boolean",
              "title": "规律运动"
            },
            "reasonableDiet": {
              "type": "boolean",
              "title": "合理膳食"
            },
            "weightControl": {
              "type": "boolean",
              "title": "控制体重"
            },
            "quitSmoking": {
              "type": "boolean",
              "title": "戒烟"
            },
            "quitDrinking": {
              "type": "boolean",
              "title": "戒酒"
            },
            "emotionManagement": {
              "type": "boolean",
              "title": "情绪管理"
            },
            "otherBoolean": {
              "type": "boolean",
              "title": "其他"
            },
            "other": {
              "type": "string",
              "title": "请注明"
            }
          }
        },
        "drugtherapy": {
          "type": "object",
          "title": "8.患者既往进行的药物治疗有哪些？",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "无"
            },
            "lipid": {
              "type": "boolean",
              "title": "调脂治疗"
            },
            "antiplatelet": {
              "type": "boolean",
              "title": "抗血小板治疗"
            },
            "antihypertension": {
              "type": "boolean",
              "title": "降压治疗"
            },
            "glucoselower": {
              "type": "boolean",
              "title": "降糖治疗"
            },
            "otherBoolean": {
              "type": "boolean",
              "title": "其他"
            },
            "other":{
              "type": "string",
              "title": "请注明"
            }
          }
        },
        "operationtherapy": {
          "type": "object",
          "title": "9.患者既往进行的手术治疗有哪些？",
          "properties": {
            "none": {
              "type": "boolean",
              "title": "无"
            },
            "operationPCI": {
              "type": "boolean",
              "title": "心脏介入治疗"
            },
            "operationCABG": {
              "type": "boolean",
              "title": "心脏搭桥手术治疗"
            },
            "otherBoolean": {
              "type": "boolean",
              "title": "其他"
            },
            "other": {
              "type": "string",
              "title": "请注明"
            }
          }
        },
        "examinationHistory": {
          "type": "object",
          "title": "10.患者半年内接受过的检查项目有哪些",
          "properties": {
            " bloodBiochemical": {
              "type": "boolean",
              "title": "血生化检查"
            },
            "carotidUltrasound": {
              "type": "boolean",
              "title": "颈动脉超声"
            },
            "CAG": {
              "type": "boolean",
              "title": "冠状动脉造影"
            },
            "MRI": {
              "type": "boolean",
              "title": "MRI血管成像"
            },
            "CT": {
              "type": "boolean",
              "title": "多层螺旋CT血管成像"
            },
            "otherBoolean": {
              "type": "boolean",
              "title": "其他"
            },
            "other":{
              "type": "string",
              "title": "请注明"
            }
          }
        },
        "bloodPressure": {
          "type": "object",
          "title": "11.血压测量",
          "properties": {
            "systolicpressure": {
              "type": "number",
              "title": "收缩压(单位:mmHg)"
            },
            "diastolicpressure": {
              "type": "number",
              "title": "舒张压(单位:mmHg)"
            }
          }
        }
      }
    }
  },
  "required": [
    "buildInfo"
  ]
}



