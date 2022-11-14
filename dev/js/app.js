
window.onload = () => { 
    let content  = ''; 
    let original = document.getElementById(`original`);
    let flipped = document.getElementById(`flipped`);
    let counter = 1; 
///////////////////INVALID INPUT PROMPT//////
    let input = parseInt(window.prompt(`Grid Size #`));
    while (input < 2) {
        alert (`invalid input`); 
    }
        console.log(typeof input);
        let originalgrid = new Array(input);
        content = new Array(originalgrid.length); 
        let grid = new Array(originalgrid.length); 

content = `<table>`; 

/////////////////////////////////////////////    
for (let  i = 0; i < originalgrid.length; i++) { 
    content += `<tr>`; 
    grid[i] = new Array(originalgrid.length); 
    }
    for (let j = 0; j < originalgrid.length; j++){ 
        grid[i][j] = j + (i*originalgrid.length);
        content += `<td>${grid[i][j]}}</td>`; 
        
    }
    content += `</tr>`;   

    }

    content += `</table>`; 

   
    initial.innerHTML = content; 

    let middle = parseInt(originalgrid.length/ 2); 

    content = `<table>`; 

    for (let j = 0; j < originalgrid.length; j++) { 

        let pickz = grid[i][j]; 
        let cnum = i * originalgrid.length + j; 
      
        if (((originalgrid.length + ((originalgrid.length - 1) * i))== (cnum + 1))) {
            if ((cnum < middle)) {
            
            }
        }

    }
