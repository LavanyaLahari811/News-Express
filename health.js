const section=document.getElementById("news");

function get_news(){
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0e9110d855bd4fd7a75e857313e3ef98')
    .then(e=>e.json())
    .then(res=>{
        
        for(var i=0;i<res.articles.length;i++){
            if(res.articles[i].urlToImage){
                const div_card=document.createElement('div');
                div_card.setAttribute('class','img');

                const image=document.createElement('img');
                image.setAttribute('id','image-2');

                const info=document.createElement('div');
                info.setAttribute('class','info');

                const a_tag=document.createElement('a');
                const heading=document.createElement('h1');
                const source_name=document.createElement('p');
                const desc=document.createElement('p');
                
                image.src=res.articles[i].urlToImage;
                a_tag.href=res.articles[i].url;
                heading.innerHTML=`${res.articles[i].title}`;
                source_name.innerHTML=`${res.articles[i].source.name}`;
                desc.innerHTML=`${res.articles[i].description}`;
                
                a_tag.appendChild(heading);
                info.appendChild(a_tag);
                info.appendChild(source_name);
                info.appendChild(desc);
                div_card.appendChild(image);
                div_card.appendChild(info);
                section.appendChild(div_card);
                }
        }
    })
}
get_news();