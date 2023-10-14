import Elem from "./Elem.js";
class Jatekter{
    /*Annyi a dolga,hogy előállítja a játékot*/
    constructor(){
        for(let index =0;index<9;index++){
            new Elem($(".jatekterBelso"));
        }
    
        let lepes=0;
        let ertek="";
        $(window).on("elemKivalaszt",(event)=>{
            console.log(event.detail)
            lepes++;
            if(lepes%2==0){
                ertek="X";
            }else{
                ertek="O";
            }
            event.detail.setErtek(ertek);
})};
}
export default Jatekter;