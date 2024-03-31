const questions = [
    {
        id: 1,
        title: "Position属性",
        desc: "以下httml+css代码对应下列哪张图",
        attachment: `<div class="selected-div">  
        这是一个被选中的div  
    </div>  
    <style>  
        .selected-div::before {  
            content: "";  
            display: inline-block;  
            width: 10px;  
            height: 10px;  
            margin-right: 5px;  
            background-color: green;  
            border-radius: 50%;  
        }  
    </style> `,
        attachmentType: "code",
        answer: "D",
        singleAnswer: true,
        options: {
            A: "1.jpg",
            B: "2.jpg",
            C: "3.jpg",
            D: '4.jpg'
        },
        option_type: "image"
    },
    {
        id: 2,
        title: "BoxSize属性",
        desc: "以下哪段代码可以实现这张效果",
        attachment: "1.jpg",
        attachmentType: "image",
        answer: "D",
        singleAnswer: true,
        options: {
            A: `<div class="selected-div">  
            这是一个被选中的div  
        </div>  
        <style>  
            .selected-div::before {  
                content: "";  
                display: inline-block;  
                width: 10px;  
                height: 10px;  
                margin-right: 5px;  
                background-color: green;  
                border-radius: 50%;  
            }  
        </style> `,
            B: `<div class="selected-div">  
           这是一个被选中的div  
       </div>  
       <style>  
           .selected-div::before {  
               content: "";  
               display: inline-block;  
               width: 10px;  
               height: 10px;  
               margin-right: 5px;  
               background-color: green;  
               border-radius: 50%;  
           }  
       </style> `,
            C: `<div class="selected-div">  
           这是一个被选中的div  
       </div>  
       <style>  
           .selected-div::before {  
               content: "";  
               display: inline-block;  
               width: 10px;  
               height: 10px;  
               margin-right: 5px;  
               background-color: green;  
               border-radius: 50%;  
           }  
       </style> `,
            D: `<div class="selected-div">  
           这是一个被选中的div  
       </div>  
       <style>  
           .selected-div::before {  
               content: "";  
               display: inline-block;  
               width: 10px;  
               height: 10px;  
               margin-right: 5px;  
               background-color: green;  
               border-radius: 50%;  
           }  
       </style> `
        },
        option_type: "code"
    },
    {
        id: 3,
        title: "BoxSize属性",
        desc: "以下哪段代码可以实现这张效果",
        answer: "D",
        singleAnswer: true,
        options: {
            A: `选项A`,
            B: `选项B`,
            C: `选项C`,
            D: `选项D`,
        },
        option_type: "txt"
    },


];