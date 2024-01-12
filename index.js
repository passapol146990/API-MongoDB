const express = require("express");
const app = express();

const MongoClient = require('mongodb').MongoClient;
const data = require("./data.json");
const { ObjectId } = require("mongodb");

const t =  {
        "img": "https://down-th.img.susercontent.com/file/2d030a5e696d0225ec51b68d860687f8_tn",
        "title": "การจับคู่สีเสื้อครึ่งแขนส่วนบุคคล, ฤดูร้อนผู้ชายบางฤดูร้อนยืนขึ้นท็อปส์ซูปก, ผู้ชายแฟชั่นเสื้อโปโลแขนสั้น",
        "price1": "ราคา ฿178",
        "sell": "ขายแล้ว 2.5พัน",
        "address": "ส่งจาก ต่างประเทศ",
        "shop": "shopee",
        "data":[
                {
                    "iframe": "https://detail.1688.com/offer/642506308426.html",
                    "img": "https://cbu01.alicdn.com/O1CN01m97HcC29nLYmWDrTu_!!2208372468112-0-cib.jpg",
                    "title": "立领亚麻衬衫男夏季七分袖宽松潮流帅气棉麻上衣拼色衬衣男士外穿",
                    "price1": "฿100",
                    "price2": "¥26.40",
                    "count1": "1879",
                    "area1": "30000m²",
                    "address1": "中国广东广州越秀区环市中路316号2603A房C556号(仅限办公)(集群注册)",
                    "response1": "62.53%",
                    "country":"out"
                },
                {
                    "iframe": "https://detail.1688.com/offer/670581958741.html",
                    "img": "https://cbu01.alicdn.com/O1CN01UFos0f2MejBB63M5h_!!2206855089853-0-cib.jpg",
                    "title": "无领棉麻短袖衬衫男士夏季拼色七分中袖衬衣潮流百搭帅气亚麻上衣",
                    "price1": "฿110",
                    "price2": "¥26.00",
                    "count1": "1093",
                    "area1": "500m²",
                    "address1": "中国广东揭阳揭东区新亨镇英花村新祠堂围宫西一巷",
                    "response1": "85.33%",
                    "country":"out"
                },
                {
                    "iframe": "https://detail.1688.com/offer/670302170229.html",
                    "img": "https://cbu01.alicdn.com/O1CN01UFos0f2MejBB63M5h_!!2206855089853-0-cib.jpg",
                    "title": "无领棉麻短袖衬衫男士夏季拼色七分中袖衬衣潮流百搭帅气亚麻上衣",
                    "price1": "฿120",
                    "price2": "¥29.00",
                    "count1": "4363",
                    "area1": "1000m²",
                    "address1": "中国广东广州黄埔区香雪大道西351号302-N29",
                    "response1": "78.93%",
                    "country":"out"
                },
                {
                    "iframe": "https://detail.1688.com/offer/641339254194.html",
                    "img": "https://cbu01.alicdn.com/O1CN01yfD6Su1XuG8Pbep2x_!!2200561932983-0-cib.jpg",
                    "title": "立领亚麻衬衫男夏季七分袖宽松潮流帅气棉麻上衣拼色衬衣男士外穿",
                    "price1": "฿130",
                    "price2": "¥28.00",
                    "count1": "1707",
                    "area1": "",
                    "address1": "中国广东深圳宝安区沙井街道沙井社区沙坣下东十一巷2号202",
                    "response1": "86.47%",
                    "country":"out"
                },
                {
                    "iframe": "https://detail.1688.com/offer/650321835060.html",
                    "img": "https://cbu01.alicdn.com/img/ibank/23041771538_555234039.jpg",
                    "title": "日系拼色立领棉麻衬衫男潮七分袖时尚潮流韩版7分袖亚麻中袖衬衣",
                    "price1": "฿122",
                    "price2": "¥25.00",
                    "count1": "2101",
                    "area1": "500m²",
                    "address1": "中国广东深圳宝安区沙井街道沙井社区沙坣下东十一巷2号202",
                    "response1": "82.18%",
                    "country":"out"
                },
                {
                    "iframe": "",
                    "img": "https://cbu01.alicdn.com/img/ibank/23041771538_555234039.jpg",
                    "title": "การจับคู่สีเสื้อครึ่งแขนส่วนบุคคล, ฤดูร้อนผู้ชายบางฤดูร้อนยืนขึ้นท็อปส์ซูปก, ผู้ชายแฟชั่นเสื้อโปโลแขนสั้น",
                    "price1": "฿178",
                    "price2": "0",
                    "count1": "6981",
                    "area1": "0",
                    "address1": "ต่างประเทศ",
                    "response1": "100%",
                    "country":"in"
                },
                {
                    "iframe": "",
                    "img": "https://down-th.img.susercontent.com/file/th-11134207-23020-njbo10u3d5mv67",
                    "title": "Suikone เสื้อยืดผู้ชายแฟชั่นสไตล์เกาหลีคอกลมแขนสั้นพิมพ์ลายส่วนบุคคลลำลองหลวมคู่ครึ่งแขน",
                    "price1": "฿312",
                    "price2": "0",
                    "count1": "154649",
                    "area1": "0",
                    "address1": "ต่างประเทศ",
                    "response1": "100%",
                    "country":"in"
                }
            ]
    }

app.get("/",async (req, res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.status(200).json(data);
})

app.post("/add",async (req, res)=>{
    res.header("Access-Control-Allow-Origin","*");
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const document = {
        name: "Jeans",
        price: 1500,
        size: "XL",
        color: "Black"
    };
    const res_message = client.db("mydata_shop").collection("shirt").insertOne(document);
    res.status(200).json({message:res_message})
})

app.delete('/:id', async (req, res)=>{
    res.header("Access-Control-Allow-Origin","*");
    const id = req.params.id;
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const res_message = client.db("mydata_shop").collection("shirt");//.deleteOne({"_id":"65827b39731a7b6c6e395599"});
    const document = await res_message.findOne({ _id:"65827b39731a7b6c6e395599"});
    res.status(200).json({message:document});
});

app.listen("8080", () =>{
    console.log(`http://localhost:8080`)
})
