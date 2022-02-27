//Inventory array
let inventory = [];

window.alert("Welcome to Red Dead Retardation.");
var start = window.prompt("Type start to continue.");

//Game start
if(start == "start") {
  document.write("Choose a Starter Caliber<br>");
  document.write("1. 9mm<br>");
  document.write("2. .45ACP<br>");

  //Caliber choice button
  var starterButton = document.createElement('button');
  starterButton.innerText = 'Done'
  starterButton.id = 'starterButton'
  
  starterButton.addEventListener('click', () => {
    var starterInput = window.prompt("Type your choice below:");

    //9mm choices
    if(starterInput == 1) {
      document.write("Choose a Weapon<br>");
      document.write("9mm weapons deal less, damage, but can be fired faster.<br>");
      document.write("1. Glock 17<br>");
      document.write("2. Beretta M9<br>");
      document.write("3. Walther PPQ M1<br>");
      
      //9mm choice button
      var starterButton2 = document.createElement('button');
      starterButton2.innerText = 'Done'
      starterButton.id = 'starterButton2'

      starterButton2.addEventListener('click', () => {
        var starterInput2 = window.prompt("Enter your choice below:");

        //9mm choice 1
        if(starterInput2 == 1) {
          document.write("Inventory:<br>");
          starterButton2.disabled = true
          inventory.push('Glock 17');
          document.write(inventory);
          document.write("<br>");
        }

        //9mm choice 2
        if(starterInput2 == 2) {
          document.write("Inventory:<br>");
          starterButton2.disabled = true
          inventory.push('Beretta M9');
          document.write(inventory);
          document.write("<br>");
        }

        //9mm choice 3
        if(starterInput2 == 3) {
          document.write("Inventory:<br>");
          starterButton2.disabled = true
          inventory.push('Walther PPQ M1');
          document.write(inventory);
          document.write("<br>");
        }

        //9mm knife choices
        document.write("Now that you've picked your gun, go ahead and pick out a blade.<br>");
        document.write("1. KA-BAR Military Combat Knife (takes the longest to draw, but deals most damage)<br>");
        document.write("2. COAST DX342 1919 Reserve (easy to conceal)<br>");
        document.write("3. Basic Stiletto Switchblade (has good stabbing abilities)<br>");

        //Knife choice button
        var starterKnife = document.createElement('button');
      starterKnife.innerText = 'Done'
      starterKnife.id = 'starterKnife'

      starterKnife.addEventListener('click', () => {
        var starterKnifeInput = window.prompt("Enter your choice below:");

        //Knife choice 1
        if(starterKnifeInput == 1) {
          document.write("Inventory:<br>");
          starterKnife.disabled = true
          inventory.push('KA-BAR Military Combat Knife');
          document.write(inventory);
          document.write("<br>");
        }

        //Knife choice 2
        if(starterKnifeInput == 2) {
          document.write("Inventory:<br>");
          starterKnife.disabled = true
          inventory.push('COAST DX342');
          document.write(inventory);
          document.write("<br>");
        }

        //Knife choice 3
        if(starterKnifeInput == 3) {
          document.write("Inventory:<br>");
          starterKnife.disabled = true
          inventory.push('Basic Stiletto Switchblade');
          document.write(inventory);
          document.write("<br>");
        }
        })

        document.body.appendChild(starterKnife);
        document.write("<br>");
        
      })
    } else {
      //45ACP choices
      document.write("Choose a Weapon<br>");
      document.write(".45ACP weapons deal more damage, but can't be fired as fast.<br>");
      document.write("1. Colt 1911<br>");
      document.write("2. HK45<br>");
      document.write("3. Walther PPQ45 M2<br>");
      
      //45ACP choice button
      var starterButton3 = document.createElement('button');
      starterButton3.innerText = 'Done'
      starterButton3.id = 'starterButton3'

      starterButton3.addEventListener('click', () => {
        var starterInput3 = window.prompt("Enter your choice below:");

        //45 choice 1
        if(starterInput3 == 1) {
          document.write("Inventory:<br>");
          starterButton3.disabled = true
          inventory.push('Colt 1911');
          document.write(inventory);
          document.write("<br>");
        }

        //45 choice 2
        if(starterInput3 == 2) {
          document.write("Inventory:<br>");
          starterButton3.disabled = true
          inventory.push('HK45');
          document.write(inventory);
          document.write("<br>");
        }

        //45 choice 3
        if(starterInput3 == 3) {
          document.write("Inventory:<br>");
          starterButton3.disabled = true
          inventory.push('Walther PPQ45 M2');
          document.write(inventory);
          document.write("<br>");
        }

        //45 knife choices
        document.write("Now that you've picked your gun, go ahead and pick out a blade.<br>");
        document.write("1. KA-BAR Military Combat Knife (takes the longest to draw, but deals most damage)<br>");
        document.write("2. COAST DX342 1919 Reserve (easy to conceal)<br>");
        document.write("3. Basic Stiletto Switchblade (has good stabbing abilities)<br>");

        //Knife choice button
        var starterKnife2 = document.createElement('button');
      starterKnife2.innerText = 'Done'
      starterKnife2.id = 'starterKnife2'

      starterKnife2.addEventListener('click', () => {
        var starterKnifeInput2 = window.prompt("Enter your choice below:");

        //Knife choice 1
        if(starterKnifeInput2 == 1) {
          document.write("Inventory:<br>");
          starterKnife2.disabled = true
          inventory.push('KA-BAR Military Combat Knife');
          document.write(inventory);
          document.write("<br>");
        }

        //Knife choice 2
        if(starterKnifeInput2 == 2) {
          document.write("Inventory:<br>");
          starterKnife2.disabled = true
          inventory.push('COAST DX342');
          document.write(inventory);
          document.write("<br>");
        }

        //Knife choice 3
        if(starterKnifeInput2 == 3) {
          document.write("Inventory:<br>");
          starterKnife2.disabled = true
          inventory.push('Basic Stiletto Switchblade');
          document.write(inventory);
          document.write("<br>");
        }
        })

        document.body.appendChild(starterKnife2);
        document.write("<br>");
        
      })
      
      document.body.appendChild(starterButton3);
      document.write("<br>");
      
    }
    
    document.body.appendChild(starterButton2);
    document.write("<br>");

})
  
  document.body.appendChild(starterButton);
  
}
