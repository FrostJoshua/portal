
let fullCode1 = "#2a2a2a#ffffff#18f8f0#00c0ff#9a9a9a#8b8b8b#acacac#ffffff#ffffff#646162#2acdaf#50ebdb#ffffff#ffffff#ffffff#ffffffcdeejbjebgeejbdcdaaeegjeegjeeegdebaefjejggfefejjeeageebjaaaafeejfgagjjgabbbbabjffaaadeabccccdagfgbedcaabccccdaejeeggbabcaccadaaejjfeaabcaccaddabggfeabccccccdddaejfgabaaccccaadaffebaaccaaaaddaajfgeeacacccdadaegfgjgaaaddddaaagdbefejaaddddaagdcdgfjgeaaaaaafdc";
let fullCode2 = "#990030#ed1c24#000000#ffffff#acacac#9a9a9a#8b8b8b#646162#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffffbagggegfggfgeeabaecfgfhfeghgfefafcfcghgheffhfhhgggfcgegefhegeffefecgghgggefgegffecgeggefgccegghffcccbfgecbachegfhgfbaeecbbaacgefeeffggcbbbaaacgegffffcbbcbacaacghhegcbabcbacabacfeggcbbbababaaacegghcbbabbaaabacfghhgcacaaaacacfaeghgfccaaaaccgabaegffgeccccehab";
let fullCode3 = "#a90df7#49018b#a42ad5#10041a#352450#acacac#9a9a9a#8b8b8b#ffffff#646162#ffffff#ffffff#ffffff#ffffff#ffffff#ffffffcbfggjhjgfgghfbcbhdhhgfbdbdbfgfbgdgdhhbdcdcdbghhfffdhhdbdhdbdffgjfdghfcdfhjdchgjfjgdghffhjdbdjhhfdfdbhgffdbdfhfhgfdbchgfdcdgfhhjffhhffjfbdbgggfffgjfgfhhdcdhghhghhfgjghfbdbghfgfffffhfhfhgfhhjjhgfjfhfjhbdbhfjhhfjfgjggjdcdghhjfbhffhfghbdbjhgfbcbffhjfjghhhjhbc";
let fullCode4 = "#8a3294#70e9e2#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffffababababababababb0000000000ii00aa0abab0000baii0bb0ba0ab00babaiiaa0ab00a0bai0ba0bb0ba0abiabi0000aa0abab00babi000bb0bai0i0ibabii0aa0ab00000ibabiibb0ba000000ibabiaa0ab0000iiiibaibb00a0000abiiab0aa0a000000abab00bb00a000000ab0i0aa00000000000000bbabababababababa";
let fullCode = "#8a3294#70e9e2#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffff#ffffffababababababababb0000000000ii00aa0abab0000baii0bb0ba0ab00babaiiaa0ab00a0bai0ba0bb0ba0abiabi0000aa0abab00babi000bb0bai0i0ibabii0aa0ab00000ibabiibb0ba000000ibabiaa0ab0000iiiibaibb00a0000abiiab0aa0a000000abab00bb00a000000ab0i0aa00000000000000bbabababababababa";

let gR = 0;




var toAdd = document.createDocumentFragment();







for(var c=0; c < 205; c++){

if (c==0){fullCode = fullCode1;}
if (c==1){fullCode = fullCode2;}
if (c==2){fullCode = fullCode3;}
if (c>2){fullCode = fullCode4;}

const pArray = fullCode.split("");
var prevcolor1 = pArray.slice(0, 7).join("");
var prevcolor2 = pArray.slice(7, 14).join("");
var prevcolor3 = pArray.slice(14, 21).join("");
var prevcolor4 = pArray.slice(21, 28).join("");
var prevcolor5 = pArray.slice(28, 35).join("");
var prevcolor6 = pArray.slice(35, 42).join("");
var prevcolor7 = pArray.slice(42, 49).join("");
var prevcolor8 = pArray.slice(49, 56).join("");
var prevcolor9 = pArray.slice(56, 63).join("");
var prevcolor10 = pArray.slice(63, 70).join("");
var prevcolor11 = pArray.slice(70, 77).join("");
var prevcolor12 = pArray.slice(77, 84).join("");
var prevcolor13 = pArray.slice(84, 91).join("");
var prevcolor14 = pArray.slice(91, 98).join("");
var prevcolor15 = pArray.slice(98, 105).join("");
var prevcolor16 = pArray.slice(105, 112).join("");

for(var i=0; i < 256; i++){
   var newDiv = document.createElement('div');
   cid = i+112;
  // alert(cid);
   scid = fullCode.charAt(cid)
  // alert(scid);
   if (scid == "a"){pixcolor = prevcolor1;}
      if (scid == "b"){pixcolor = prevcolor2;}
         if (scid == "c"){pixcolor = prevcolor3;}
            if (scid == "d"){pixcolor = prevcolor4;}
               if (scid == "e"){pixcolor = prevcolor5;}
         if (scid == "f"){pixcolor = prevcolor6;}
            if (scid == "g"){pixcolor = prevcolor7;}
   if (scid == "h"){pixcolor = prevcolor8;}
      if (scid == "i"){pixcolor = prevcolor9;}
      if (scid == "j"){pixcolor = prevcolor10;}
      if (scid == "k"){pixcolor = prevcolor11;}
      if (scid == "l"){pixcolor = prevcolor12;}
      if (scid == "m"){pixcolor = prevcolor13;}
      if (scid == "n"){pixcolor = prevcolor14;}
      if (scid == "o"){pixcolor = prevcolor15;}
      if (scid == "p"){pixcolor = prevcolor16;}
            if (scid == "0"){pixcolor = "#ffffff";}

   newDiv.id = gR+'p'+i;
   newDiv.className = 'square';
   newDiv.style.background = pixcolor;
   toAdd.appendChild(newDiv);

  newPic = "smallcontainer"+gR;

document.getElementById(newPic).appendChild(toAdd);
}
gR = gR+1;
//alert(gR);
}
