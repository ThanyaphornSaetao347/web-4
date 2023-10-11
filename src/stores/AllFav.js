import { ref } from 'vue';
import { defineStore } from 'pinia'

export const doiStore = defineStore('BonDoi', () => {

    const DoiList=ref([
        {name: 'ดอยหลวง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-luang-chiang-dao-1536x1024.jpg", quantity: 0 ,
          text_box:'///'
          }, 
          
        {name:'ดอยแม่โถ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-mae-tho-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
        
        {name:'ดอยอ่างขาง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-ang-khang-1536x1024.png", quantity: 0 ,
          text_box:' '
          },
      
        {name:'ดอยอินทนนท์', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-inthanon-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
        {name:'ดอยค้ำฟ้า', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-kamfha-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
        {name:'สันป่าเกี๊ยะ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/sanpakae-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
        {name:'ป่าปงเปียง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/Pa-Pong-Piang.png", quantity: 0 ,
          text_box:' '
          },
          
          {name:'ดอยม่อนแจ่ม', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-mon-cham-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
          {name:'ดอยม่อนจอง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monjong-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
          {name:'ดอยม่อนล้าน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monlan-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
          {name:'ดอยม่อนเงาะ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monngo.jpg", quantity: 0 ,
          text_box:' '
          },
      
          {name:'ดอยผ้าห่มปก', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-phahompok-1536x1024.jpg", quantity: 0 ,
          text_box:''
          },
      
          {name:'ดอยปุย', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-pui-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
          {name:'ดอยสุเทพ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-suthep-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
      
          {name:'ขุนช่างเคี่ยน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/khun-chang-kian-1536x1024.jpg", quantity: 0 ,
          text_box:' '
          },
          {name:'ดอยไม่มีชื่อ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-noname-1536x1027.jpg", quantity: 0 ,
          text_box:' '
          },
          
      ])

return { DoiList }
})