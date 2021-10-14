window.onload = () => {
    //write your code here
    getFrase();
  };


    const getFrase  = () =>{
        let who = ["The dog", "My grandma", "His turtle", "My bird"];
        let action = ["ate", "peed", "crushed", "broke"];
        let what = ["my homework", "the keys", "the car"];
        let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];
    
        
    
        let quien = Math.floor(Math.random() * who.length);
        let accion = Math.floor(Math.random() * action.length);
        let que = Math.floor(Math.random() * what.length);
        let cuando = Math.floor(Math.random() * when.length);
    
        let frase =
        who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando];
    
        console.log(frase);
        document.getElementById("excuse").innerHTML = frase;
    }

    let boton = document.querySelector("#button");

    boton.addEventListener('click', () =>{
        getFrase();
    });