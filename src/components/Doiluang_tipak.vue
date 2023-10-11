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
        <p>ราคา :{{ stay.Price }}</p>
        <p>Facebook : <a :href="stay.link">{{ stay.Facebook }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stayy=ref([
{name:'บ้านต้นไม้ แม่แมะ เชียงดาว โฮมสเตย์' , 
  img: "https://treehousehomestay.com/wp-content/uploads/2020/07/treehouseterracelogo1-800x450.jpg",
  img2:"https://treehousehomestay.com/wp-content/uploads/2020/07/chomjan7terrace2logo-800x450.jpg",
  text_box:'บ้านพักแนบอิงธรรมชาติสีเขียว บรรยากาศเงียบสงบ รับลมเย็นๆ เหมาะแก่การหนีความวุ่นวายในเมือง แล้วมาปล่อยตัวไปกับธรรมชาติ ที่นี่เหมาะแก่การมาพักผ่อนสุดๆ'  ,
  Location:' บ้านต้นไม้แม่แมะ ต.แม่นะ อ.เชียงดาว จ.เชียงใหม่',
  phone:'081 958 5601',
  Price:'ราคา ที่พัก+อาหาร 2 มื้อ 750 บาท',
  link: 'https://www.facebook.com/TreeHouseHideaway',
  Facebook:'บ้านต้นไม้แม่แมะ Tree House Hideaway ',
},
{name:'บ้านสายหมอก โฮมสเตย์ เชียงดาว' , 
  img: "https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/3-DSC08168.jpg",
  img2:"https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/16-DSC08202.jpg",
  text_box:'อีกหนึ่งที่พักวิวทะเลหมอก รับลมหนาวมาเย็นสบายๆ เป็นที่พักที่ตั้งอยู่บนเนินเขามีธรรมชาติสีเขียวล้อมรอบ ให้คุณได้สัมผัสบรรยากาศสุดฟิน แบบที่ไม่เคยพบเจอที่ไหนกันมาก่อน'  ,
  Location:'ต.เชียงดาว อ.เชียงดาว จ.เชียงใหม่',
  phone:'090-760-8819',
  Price:' ห้องพัก ราคา 500 บาท',
  link: ' https://www.facebook.com/BansaimokHomestay/',
  Facebook:'บ้านสายหมอก โฮมสเตย์ เชียงดาว',
},
{name:'บ้านวิวหลวง เชียงดาว' , 
  img: "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Toon/Trip%20Chiangmai4d3n/Doi_Luang-7.jpg",
  img2:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/A_Toon%202016/JAN/5%20Homestay%20Chiangdao_Chiangmai%202016/Doi-Luang-1.jpg",
  text_box:'บ้านพักสไตล์โฮมสเตย์ราคาไม่แพง สร้างขึ้นด้วยจากวัสดุจากธรรมชาติ เพื่อให้นักท่องเที่ยวที่มาพักกันได้สัมผัสธรรมชาติแบบใกล้ชิด ซีมซับอากาศสุดแสนบริสุทธิ์ไปกับที่พักหลักร้อยกับวิวหลักล้านที่ใครๆ ก็ยกนิ้วให้'  ,
  Location:'บ้านนาเลา อ.เชียงดาว จ.เชียงใหม่',
  phone:'0895598272, 0872087086',
  Price:'ห้องพัก ราคา 500 บาท',
  link: 'https://www.facebook.com/pages/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%94%E0%B8%B2%E0%B8%A7/637218686321101',
  Facebook:'บ้านวิวดอยหลวง เชียงดาว',
},
{name:'บ้านระเบียงดาว' , 
  img: "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Toon/5%20Cafe%20Chantaburi%20Chic/Doi_Luang-9.jpg",
  img2:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Toon/Trip%20Chiangmai4d3n/Doi_Luang-4.jpg",
  text_box:'เป็นที่พักเล็กๆ แต่วิวไม่เล็ก ด้วยบรรยากาศที่เงียบสงบ กับรอบข้างที่รายล้อมไปด้วยภูเขาน้อย ภูเขาใหญ่ เรียงรายสลับกันไปมา หากใครกำลังต้องการตัดขาดจากโลกภายนอกเพื่อมาพักผ่อนกันให้เต็มที่ ต้องมาที่นี่กันเลย'  ,
  Location:' บ้านนาเลา อ.เชียงดาว จ.เชียงใหม่',
  phone:'089 998 0712, 089 903 0083',
  Price:' สอบถามกับทางที่พัก',
  link: 'https://www.facebook.com/rabiangdaohomestay',
  Facebook:'บ้านระเบียงดาว',
},
{name:'บ้านหมอกตะวัน เชียงดาว' , 
  img: "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/ben_study_2016/sep/wood_dinner/baanmok/1.jpg",
  img2:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/ben_study_2016/sep/wood_dinner/baanmok/4.jpg",
  text_box:'อีกหนึ่งที่พักที่มีวิวสวยสุดๆ สามารถรับชมวิวดอยหลวงเชียงดาวได้แบบใกล้ชิด สัมผัสสายหมอกสีขาว กับลมหนาวในยามเช้าให้คุณได้รู้สึกผ่อนคลายไปกับบรรยากาศที่เงียบสงบ ฟินไปกับวิวหลักล้านได้อีกด้วย'  ,
  Location:'บ้านนาเลา อ.เชียงดาว จ.เชียงใหม่',
  phone:'096 959 9683',
  Price:'ห้องพัก ราคา 500 บาท',
  link: 'https://www.facebook.com/profile.php?id=100066889585683',
  Facebook:'บ้านหมอกตะวัน',
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
