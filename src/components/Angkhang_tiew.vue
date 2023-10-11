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
        <p>เวลา : {{ near.time }}</p>
        <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const neartravel=ref([
{name:'ดอกซากุระแท้ บานในสถานีเกษตรหลวงฯ' , 
  img: "https://th.bing.com/th/id/R.912e4d8241f1a413ac5de0fbd68d2c70?rik=6njn%2bXrIbmha9g&pid=ImgRaw&r=0",
  text_box:' จุดเที่ยวชมในสถานีเกษตรฯ ยังไม่หมดเพียงเท่านี้ อีกหนึ่งไฮไลท์ก็มีดอกซากุระแท้ๆ ที่ไม่ใช่ซากุระเมืองไทยเหมือนที่อื่น โดยจะเริ่มบานในช่วงเดือนมกราคม ซึ่งซากุระแท้จะมีให้ชมอยู่ 3 จุดด้วยกันคือ ระหว่างทางภายในสถานีฯ สวน 80 และ สวนกุหลาบอังกฤษ'  ,
  Location:'W22R+C2F ตำบล ม่อนปิ่น อำเภอ ฝาง เชียงใหม่ 50320',
  phone:'0815688750 , 053 969 477',
  link: 'https://www.facebook.com/AngkhangRoyalAgriculturalStation/',
  Facebook:'สถานีเกษตรหลวงอ่างขาง',
  place:'https://www.google.com/maps/place/%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%B2%E0%B8%87/@19.9010555,99.0019471,14z/data=!4m6!3m5!1s0x30d0cfd9ad99a48f:0xca080867829d1968!8m2!3d19.9010555!4d99.0400559!16s%2Fg%2F11cjk42wtv?entry=ttu',
  time:' '
},
{name:'ไร่ชา2000' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/06/15/grbvubvsv9bq.jpg",
  text_box:'ไร่ชา 2000 ดอยอ่างขาง (Tea Plantation 2000 Doi Ang Khang) ตั้งอยู่บน ทิวเขาแดนลาว ตำบลแม่งอน อำเภอฝาง จังหวัดเชียงใหม่ จัดตั้งขึ้นเมื่อปี พ.ศ. 2512 ตามแนวพระราชดำริในพระบาทสมเด็จพระเจ้าอยู่หัว จุดน่าสนใจ ของแปลงชา 2000 มีหลายจุด 2 จุดหลักๆ คือ ด้านบนตรงบริเวณกังหันลมแคนนอน และ ตรงแปลงชาด้านล่าง โดยทั้ง 2 จุดมีร้านชาให้นักท่องเที่ยวดื่มด่ำไปกับบรรยากาศเย็นๆของที่นั่น บรรยากาศไร่ชาสุดสดชื่น หรือจะแวะชิมชาร้อนได้อีกด้วย'  ,
  Location:' อำเภอ ฝาง เชียงใหม่ 50110 ประเทศไทย',
  phone:' 0 5345 0107-9',
  link: 'http://www.royalprojectangkhang.com/',
  Facebook:' ',
  place:'https://maps.app.goo.gl/DQ24xHMmfmmJq2Pt7',
  time:'ทุกวัน	08.00-16.30 น',
},
{name:'ไร่สตรอเบอร์รีบ้านนอแล' , 
  img: "https://พาเที่ยวไทย.com/wp-content/uploads/2023/03/dFQROr7oWzulq5FZXlf5jcn3Io4IAI85USkHtkSo6dlGamLSU7PGIEregwevJNzFQE6.jpg",
  text_box:' บ้านนอแล เป็นอีกหนึ่งหมู่บ้านที่มีการปลูกไร่สตรอเบอร์รี่อยู่มาก เมื่อขับผ่านเช้าๆ เราจะเห็นชาวบ้านกำลังเก็บสตรอเบอร์รี่ที่ปลูกอยู่เป็นทิวแถว',
  Location:'269 หมู่ที่ 1 ตำบลสะเมิงใต้ อำเภอสะเมิง จังหวัดเชียงใหม่',
  phone:'093-1377719 / 084-3642639',
  link: 'https://namphapsiza.com/',
  Facebook:' ',
  place:'https://goo.gl/maps/aWWHabsCsfkWCocy5',
  time:'7:00–17:00 น.',
},
{name:'ชมทะเลหมอก ฐานปฎิบัติการดอยอ่างขาง' , 
  img: "https://mpics.mgronline.com/pics/Images/565000007301504.JPEG",
  text_box:' ฐานปฏิบัติการดอยอ่างขาง เป็นอีกจุดชมวิวทะเลหมอกและพระอาทิตย์ขึ้นที่สวยงามและอากาศดีมาก โดยจะอยู่ทางขึ้นก่อนถึงสถานีเกษตรฯ ประมาณ 1 กิโลเมตร',
  Location:' Mae Sun, Fang District, Chiang Mai 50320',
  phone:'053 453 517 ',
  link: '-',
  Facebook:'-',
  place:' https://maps.app.goo.gl/KTEvean5vrCPntCBA',
  time:'-',
},
{name:'จุดชมวิวม่อนสน' , 
  img: "https://s.isanook.com/tr/0/ud/283/1416613/hy6uj.jpg",
  text_box:' จุดนี้มีต้นสนเต็มไปหมด จึงได้ชื่อว่าเป็นจุดชมวิวม่อนสน ที่นี่เหมาะแก่การกางเต็นท์พักแรมแล้วตื่นเช้ามาชมวิวทะเลหมอก รวมไปถึงวิวทิวทัศน์ของต้นสนที่สวยงามกับไอหมอกจางๆ ระหว่างทิวสน ให้บรรยากาศดีราวกับอยู่ต่างประเทศ',
  Location:' Mae Sun, Fang District, Chiang Mai 50320',
  phone:'053 453 517 ',
  link: '-',
  Facebook:'-',
  place:'https://maps.app.goo.gl/FTJRcNk3mnCvMA6WA',
  time:'-',
},
{name:'จุดชมวิวซุ่ยถัง' , 
  img: "https://mpics.mgronline.com/pics/Images/565000007301501.JPEG",
  text_box:' จุดชมวิวซุ่ยถึง หรือ จุดชมวิวฐานปฏิบัติการซุ่ยถัง อยู่ห่างจากสถานีเกษตรฯ ไปทางหมู่บ้านอรุโณทัย ได้ชื่อว่าเป็นลำธารแห่งสายหมอก เพราะเราจะเห็นทะเลหมอกระหว่างแนวเขาทอดตัวยาวราวกับลำธาร โดยที่นี่มีลานกางเต็นท์และห้องน้ำสำหรับใครที่อยากนอนค้างคืนก็สามารถพักได้',
  Location:' 1340, Mae Ngon, Chai Prakan District, Chiang Mai 50320',
  phone:'0932943313 ',
  link: '',
  Facebook:' ',
  place:' https://maps.app.goo.gl/XqS5xtSNhYT88ErN8',
  time:' 8 AM–4 PM',
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
