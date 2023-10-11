<template>
    <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ near.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ near.text_box }}</p>
        <p>สถานที่ : {{ near.Location }}</p>
        <p>เบอร์ติดต่อ : {{ near.phone }}</p>
        <p>ราคา :{{ near.Price }}</p>
        <p>เวลา : {{ near.time }}</p>
        <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const neartravel=ref([
{ name: 'สวนดอกไม้และสวนส้มป้างฮวา' , 
  img: "https://www.paiduaykan.com/travel/wp-content/uploads/2021/11/6-SON09575.jpg",
  text_box:'ถ่ายรูปเช็กอินบรรยากาศสุดโรแมนติก ท่ามกลางดอกมากาเร็ตสีชมพูม่วง และเก็บส้มสด ๆ จากต้น ในสวนส้มสายพันธุ์ฟรีมองค์ เพียงกิโลกรัมละ 80 บาท ที่สวนดอกไม้และสวนส้มป้างฮวา ค่าเข้าผู้ใหญ่ 70 บาท และเด็ก 40 บาท มีพร็อพถ่ายรูปให้เพียบ ทั้งรองเท้าบู๊ท ตะกร้าดอกไม้ และตะกร้าสะพายหลัง' ,
  Location:'82 ม.11 ต.แม่แรม อ.แม่ริม จ.เชียงใหม่' ,
  place:'https://goo.gl/maps/yZaqa1rQABp145cc9',
  Price:'ราคา: ค่าเข้าชม ผู้ใหญ่ 50 บาท, เด็ก 30 บาท',
  time:'ปิดทุกวัน ตั้งแต่ 07.00-18.00 น.',
  phone:'065 447 2902',
},
{ name: '.โป่งแยงจังเกิ้ล โคสเตอร์และซิปไลน์ (Pongyang Jungle Coaster & Zipline)' , 
  img: "https://gangtravel.com/upload/2021/11/1-3_800x534.jpg.webp",
  text_box:'โป่งแยงจังเกิ้ล โคสเตอร์และซิปไลน์ (Pongyang Jungle Coaster & Zipline) ที่เที่ยวม่อนแจ่ม โป่งแยงจังเกิ้ล โคสเตอร์และซิปไลน์ ที่เที่ยวสุดมันส์ใครที่รักความตื่นเต้น ต้องไปเล่นเครื่องเล่นสุดท้าทาย ยกตัวอย่างความันส์เช่น Jungle Bike , Giant Swing , Jungle Coaster เป็นต้น และยังมีกิจกรรมทั้ง Zipline 36 สถานี, Quick Jump, Slider และ Easy Jumper ให้ได้เล่นกันอีกด้วย ใครชอบแอดเวนเจอร์ต้องห้ามพลาด' ,
  Location:'ต.โป่งแยง อ.แม่ริม จ.เชียงใหม่ (ก่อนถึงม่อนแจ่ม 2 กิโลเมตร)' ,
  place:' facebook.com/Pongyang Jungle Coaster Zipline Camp&Resort',
  Price:'-',
  time:' ทุกวัน วันจันทร์ – ศุกร์ เวลา 09.00-17.00 น./ วันเสาร์ – อาทิตย์ เวลา 08.30 – 17.30 น.',
  phone:' 053 106 327',
},
{ name: 'Skywalk ม่อนแจ่ม' , 
img: "https://www.paiduaykan.com/travel/wp-content/uploads/2019/11/33-SON03551-800x533.jpg",
  text_box:'สกายวอล์คม่อนเจ่มตั้งอยู่ติดกับไร่สตรอเบอรี่ปลายฟ้า โดยเสียค่าเข้าชมคนละ 10 บาท  เป็นทางเดินไม้ไผ่แบบสั้นๆ ระหว่างทางเดินประดับด้ยดอกไม้เมืองหนาวสีสันสดใส สามารถยืนชมวิว ถ่ายภาพ วิวทิวทัศน์ของภูเขาที่เรียงรายสลับซับซ้อนที่สามารถหยุดยืนชมได้ทุกจุด นอกจากนี้บริเวณด้านหน้ายังมีบริการเช่าชุดแบบชนเผ่าแบบม้ง ให้เช่าใส่ถ่ายภาพด้วย' ,
  Location:' พิกัด  4051 ตำบล แม่แรม อำเภอแม่ริม เชียงใหม่ 50180' ,
  place:'',
  Price:'',
  time:' ',
  phone:'',
},
{ name: 'ภูวินคาเฟ่ โฮมสเตย์ ม่อนแจ่ม' , 
  img: "https://www.paiduaykan.com/travel/wp-content/uploads/2019/11/SON03314.jpg",
  text_box:'กิน เที่ยว พัก จบครบในที่เดียวกับ ภูวินคาเฟ่ โฮมสเตย์ ม่อนแจ่ม พาร่างกายไปปะทะสายหมอกที่เมืองเหนือ ชมวิวความงามของม่อนแจ่ม ค้างคืนในโดมกระโจมท่ามกลางป่าเขา จัดปาร์ตี้หมูกระทะซดน้ำซุปร้อน ๆ ท่ามกลางอากาศหนามเย็นได้ที่นี่' ,
  Location:' พิกัด 92/1 หมู่11 แม่แรม อำเภอแม่ริม เชียงใหม่ 50180' ,
  place:'https://reservation.roomscope.com/1491/th?fbclid=IwAR03ydookCEpUgi9l7nI2SERMJ8u-2EKFqhtje-SdFFVD3S8AuxoHzwQyEE',
  Price:'',
  time:' เปิดทำการทุกวัน เวลา 6:00–20:00 น.',
  phone:'064 105 2041',
},
{ name: 'JINJU the orange farm – สวนส้มจินจู' , 
  img: "https://i0.wp.com/inzpy.com/wp-content/uploads/2022/03/jinju-the-orange-farm-cover.jpg?w=1200&ssl=1",
  text_box:' สวนส้มสไตล์เกาหลีแสนน่ารัก มากับบรรยากาศสดชื่น สัมผัสอากาศเย็นสบาย ชมวิวสวยเหมือนไปเที่ยวอยู่บนเกาะเจจู ด้วยการทำสวนที่ใช้รูปแบบขั้นบันไดในการปลูกต้นส้ม ทำให้เราสามารถเดินเล่นแบบชิล ๆ เพลิดเพลินไปกับการถ่ายรูปเช็คอินได้อย่างสบาย อีกหนึ่งความน่ารักของสวนส้มแห่งนี้คือมีการจัดมุมถ่ายรูป ทั้งมุมแคมป์ปิ้งและปิกนิคเข้ากับบรรยากาศโดยรอบมาก ๆ นอกจากนี้เรายังเก็บผลส้มสดกลับไปเป็นของฝากได้อีกด้วย ก่อนกลับแวะทานน้ำส้มคั้นสดจากสวนรับรองจะติดใจแน่นอน' ,
  Location:'https://goo.gl/maps/8UUWzaUkW3Pqh93k8' ,
  place:'https://goo.gl/maps/8UUWzaUkW3Pqh93k8',
  Price:'',
  time:' เปิดทุกวัน 08.00 – 18.00 น.',
  phone:'096 949 4503',
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
