AFRAME.registerComponent("tour",{
    init:function(){
        this.placesContainer=this.el
        this.createCards()
    },
    createCards:function(){
        const thumbnailsRef=[
            {id:"taj-mahal",
             title:"Taj Mahal",
             url:"../assets/thumbnails/taj_mahal.png"},
            {id:"budapest",
             title:"Budapest",
             url:"../assets/thumbnails/budapest.jpg"},
            {id:"eiffel-tower",
             title:"Eiffel Tower",
             url:"../assets/thumbnails/eiffel_tower.jpg"},
            {id:"newyork-city",
             title:"New York City",
             url:"../assets/thumbnails/new_york_city.png"}
        ]
        var previousXposition=-60
        for (var item of thumbnailsRef){
            const posx=previousXposition+25
            const posy=10
            const posz=-40
            const position={x:posx,y:posy,z:posz}
            previousXposition=posx
            const borderEl=this.createBorder(position,item.id)
            const thumbnailEl=this.createThumbnail(item)
            borderEl.appendChild(thumbnailEl)
            const titleEl=this.createTitle(position,item)
            borderEl.appendChild(titleEl)
            this.placesContainer.appendChild(borderEl)
        }   
    },
    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{color:"#0077CC",opacity:1})
        entityEl.setAttribute("cursor-listener",{})
        return entityEl
    },
    createThumbnail:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{primitive:"circle",radius:9})
        entityEl.setAttribute("material",{src:item.url})
        return entityEl
    },
    createTitle:function(position,item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("text",{font:"exo2bold",align:"center",width:60,color:"#E65100",value:item.title})
        const elPosition=position
        elPosition.y=-20
        entityEl.setAttribute("position",elPosition)
        entityEl.setAttribute("visible",true)
        return entityEl
    }
})