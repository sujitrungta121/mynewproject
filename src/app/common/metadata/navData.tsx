

const navData=[
    {
        id:1,
        title:"BlockChain Training",
       sideArrow:false,
       page:"/blockChain-training"
      

    },
    {
        id:2,
        title:"Coorporate Training",
        sideArrow:false,
        page:"/coorporate-train"
       

    },
    {
        id:3,
        title:"Request Demo",
        sideArrow:false,
      
    },
    {
        id:4,
        title:"Companies Zone",
        sideArrow:false,
        page:"/for-companies"
    

    },
    {
        id:5,
        title:"Institution Zone",
        sideArrow:false,
        page:"/institution-zone"
        

    },
    {
        id:6,
        title:"Freshers Zone",
        sideArrow:false,
        page:"/freshers"
        

    },
    {
        id:7,
        title:"All Courses",
        sideArrow:true,
        content:[
            {
                id:1,
                title:"job Seeker Training",
                sideArrow:true,
                content:[
                    {
                        id:1,
                        title:"Python with MongoDB",
                        page:"/"
                       
                    },
                    {
                        id:2,
                        title:"MEAN stack Training",
                        page:"/"
                    },
                ],
            },
            {
                id:2,
                title:"Coorporate Training",
                sideArrow:true,
                content:[
                    {
                        id:1,
                        title:"Programming Languages",
                        page:"/"
                    },
                    {
                        id:2,
                        title:"Big Data Management",
                        page:"/"
                    },
                    {
                        id:3,
                        title:"Search Engine Optimization",
                        page:"/"
                    },
                ],
            },

            {
                id:3,
                title:"Summer Training",
                sideArrow:true,
                content:[
                    {
                        id:1,
                        title:"M.tech & B.tech Major and Minor Projects",
                        page:"/"
                    },
                    {
                        id:2,
                        title:"MCA & MSCIT projects",
                        page:"/"
                    },
                    {
                        id:3,
                        title:"BCA & BSCIT projects",
                        page:"/"
                    },
                ],
            },
          

        ]
        

    },
  
]
export default navData;