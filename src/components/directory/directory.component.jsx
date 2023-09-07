import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'KAFTANS',
        imageUrl: 'https://i.pinimg.com/originals/67/f7/bc/67f7bcc5017b64e784b72c448e38262f.jpg',
        id: 1,
        linkUrl: 'KAFTANS'
      },
      {
        title: 'BABBAN RIGA',
        imageUrl: 'https://i.pinimg.com/originals/01/fe/b0/01feb0bd74a682658b0b00bbec555e86.jpg',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'CAP',
        imageUrl: 'https://cdn.filestackcontent.com/resize=width:430,height:430,fit:crop,align:center/rQJloa23RwK9ZdFeoT7j',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'ADULTS',
        imageUrl: 'https://www.nairaland.com/attachments/3828596_buharimalta_jpegb360150910f0ef7c95c34177ce66500d/', 
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'CHILDREN',
        imageUrl: 'https://eucarlwears.com/wp-content/uploads/2022/04/ezgif.com-gif-maker-2-1-768x960.webp', 
        size: 'large',
        id: 5,
        linkUrl: ''
      }
    ]
     
   };
}


 render() {
    return (
     <div className='directory-menu'> 
       {
         this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
         ))
       }
     </div>
    );
 }
}
export default Directory;