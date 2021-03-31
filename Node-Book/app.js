const addButton=document.querySelector("#heardAddpage");


addButton.addEventListener('click',()=>{
    try{
    const callings=(text = "")=>{
    const addElements=`
    <div class="node_box">
        <div class="nodeIcons">
            <span id="node_i_1"><i class="fas fa-edit"></i></span>
            <span id="node_1_2"><i class="fas fa-trash"></i></span>
        </div>
        <div id="mmn" class"${text ? "":"hidden"}"></div>
        <textarea name="" id="textareadd" class="${text ? "hidden":""}" cols="30" rows="10" placeholder="Add Your Happy Node"></textarea>
    </div>`;
 const dd=document.querySelector('#main_node_div');
 
 dd.insertAdjacentHTML("beforeend",addElements);

 const savaButton=document.querySelector('#node_i_1');
 const deleteButton=document.querySelector('#node_1_2');
 const mainDiv=document.querySelectorAll('.node_box');
 const textAreaget=document.querySelector('#textareadd');


 //deleting part
    const deletingfns=()=>{
        mainDiv.forEach((vlu)=>{
            const vlubtn=vlu.querySelector("#node_1_2");
            vlubtn.addEventListener('click',()=>vlu.remove());

            //toglae part */
        const editbtn=vlu.querySelector("#node_i_1");
        const maindd=vlu.querySelector("#mmn");
        const hhhh=vlu.querySelector("#mmn");
        const textarr=vlu.querySelector("#textareadd");
        const fsdfs=vlu.querySelector("#textareadd");
        const held=fsdfs.value;
        hhhh.innerHTML=held;
        editbtn.addEventListener('click',()=>{
            maindd.classList.toggle('hidden');
            textarr.classList.toggle('hidden');
        })
        fsdfs.addEventListener('change',(event)=>{
            var value=event.target.value;
            hhhh.innerHTML=value;
        })

        })
    }
    deletingfns()
//deleting part end



}
callings();



}catch(err){
    console.log(err);
}


})