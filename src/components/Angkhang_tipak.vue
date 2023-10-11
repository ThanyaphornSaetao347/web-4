<template>
  <h3>ที่พัก</h3>
    <div class="col" v-for="(stay, index) in stayy" :key="index">
      <div class="name">
        <div class="name">
        <img :src="stay.img" alt="รูปภาพ 1">
        <img :src="stay.img2" alt="รูปภาพ 2">
        <br><br>
        <h4>{{ stay.name }}</h4>
      </div>
      <div class="tipark">
        <p>{{ stay.text_box }}</p>
        <p>สถานที่ : {{ stay.Location }}</p>
        <p>เบอร์ติดต่อ : {{ stay.phone }}</p>
        <p>Facebook : <a :href="stay.link">{{ stay.Facebook }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stayy=ref([
{name:'ลานกางเต็นท์ป่าสน' , 
  img: "https://f.ptcdn.info/741/066/000/q0hgae2297BO3P1K7cV2-o.png",
  img2:"https://fastly.4sqi.net/img/general/600x600/18973455_51l8Jd9CXr-lSgc8trN_4oHJrwNmmIKIIY9VPiMGorQ.jpg",
  text_box:' ลานกางเต็นท์ป่าสน จะตั้งอยู่ก่อนถึงสถานีเกษตรหลวงอ่างขาง เป็นจุดที่ได้รับความนิยมจากนักท่องเที่ยวมากที่สุด เพราะบริเวณนี้สามารถมองเห็นวิวของทะเลหมอกได้อย่างสวยงาม อีกทั้งยังมีร่มสนให้ความร่มเย็น และมีร้านค้า ร้านอาหาร รวมทั้งห้องน้ำอยู่ในบริเวณนี้ '  ,
  Location:'V372+8MJ, Tambon Mae Sun, Fang District, Chiang Mai 50320',
  phone:'-',
  link: 'https://maps.app.goo.gl/cz5qGoUNrwJnqjoQ6',
  Facebook:'-',
},
{name:'จุดกางเต็นท์ฐานปฏิบัติการบ้านนอแล' , 
  img: "https://4.bp.blogspot.com/-GgUNToVgXh4/WggUuQuCybI/AAAAAAAANAM/9Hf4AEqP39kq6HVXqHw80ugjQLU4MwqDACKgBGAs/s1600/Angkhang_0570.jpg",
  img2:"https://www.topchiangmai.com/wp-content/uploads/2016/02/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%AD%E0%B9%81%E0%B8%A5-%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%94%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-%E0%B8%9E%E0%B8%A1%E0%B9%88%E0%B8%B2-3.jpg",
  text_box:'  พื้นที่ในส่วนนี้จะเป็นลานกว้าง ๆ และเป็นพื้นที่ของทหาร แต่ขอบอกว่าวิวสวยแจ่มไม่แพ้จุดกางเต็นท์อื่น ๆ เช่นกัน และยังสามารถมองเห็นวิวของภูเขาฝั่งเมียนมา ยามเช้าอากาศที่นี่จะหนาวเย็นมาก นักท่องเที่ยวสามารถเดินเที่ยวชมรอบ ๆ ฐานปฏิบัติการบ้านนอแลและบริเวณแปลงผัก แปลงสตรอว์เบอร์รีของชาวบ้านได้อีกด้วย '  ,
  Location:'W2RR+4JF, Unnamed Road Tambon Mon Pin Amphoe Fang Chang Wat Chiang Mai, Mong Hsai, Myanmar (Burma)',
  phone:'-',
  link: 'https://maps.app.goo.gl/CyTzdsVY55UUrXqc8',
  Facebook:'ฐานปฏิบัติการบ้านนอแล ',
},
{name:'ลานกางเต็นท์หน่วยจัดการต้นน้ำแม่เผอะ' , 
  img: "http://www.thongthailand.com/private_folder/forest/maepu1.jpg",
  img2:"http://www.thongthailand.com/private_folder/forest/maepu5.jpg",
  text_box:' หน่วยจัดการต้นน้ำแม่เผอะ อยู่ก่อนถึงทางเข้าสถานีเกษตรหลวงอ่างขางไม่ไกลค่ะ ตั้งอยู่ในหุบเขา วิวอาจจะไม่ได้สวยมากนัก แต่รับรองว่าบรรยากาศเงียบสงบสุด ๆ นักท่องเที่ยวไม่วุ่นวาย สามารถพักผ่อนได้อย่างเต็มที่ ใครที่ชอบนอนเงียบ ๆ ยามค่ำคืน ไม่ต้องแย่งห้องน้ำกับนักท่องเที่ยวคนอื่น ๆ ที่นี่ก็ถือว่าเป็นตัวเลือกที่ดีทีเดียว'  ,
  Location:'ตำบลแม่สูน อำเภอ ฝาง เชียงใหม่ 50320',
  phone:'-',
  link: ' https://maps.app.goo.gl/GGZTpyjSdVXTGaSo9',
  Facebook:' - ',
},
{name:'จุดกางเต็นท์ฐานปฏิบัติการอ่างขาง' , 
  img: "https://img.kapook.com/u/2016/pattra/patoct16/angkhang01.jpg",
  img2:"https://i.ytimg.com/vi/qqs3uhQj_KM/maxresdefault.jpg",
  text_box:'  จุดกางเต็นท์ฐานปฏิบัติการอ่างขาง จะอยู่ใกล้กับจุดชมวิวม่อนสน ในจุดนี้จะเป็นลานกว้าง มีลานจอดเฮลิคอปเตอร์ อยู่ไกลจากสถานีเกษตรหลวงอ่างขางเล็กน้อย แต่มีจุดชมวิวที่สวยงาม สะดวกในเรื่องห้องน้ำ บรรยากาศเงียบสงบ ไม่วุ่นวายเท่ากับจุดชมวิวอื่น ๆ ที่อยู่ใกล้กับสถานีเกษตรฯ และยังมีความปลอดภัย เพราะอยู่ในพื้นที่ทหาร'  ,
  Location:'V373+G2W ตำบล แม่สูน อำเภอ ฝาง เชียงใหม่ 50320',
  phone:' 053- 969-492',
  link: 'https://maps.app.goo.gl/q5XWXxTNmwg7SMSe9',
  Facebook:'-',
},
])

</script>

<style>

.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 30%;
text-align: center
}

</style>
