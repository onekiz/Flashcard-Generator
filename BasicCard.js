


//Constructor function two properties back of the card and front of the card
     var Basic = function(front, back) {

          this.front = front;
          this.back  = back;

     };

//Constructor function three properties partial, tfullext and cloze, and a method to delete cloze from full text
     function Cloze(text, cloze){

          this.cloze = cloze;
          this.fullText = text;
          var array = new Array;
          var str = new String;

          this.delete = function (){
              var textArray = (this.fullText).split(" ");
              var clozeArray = (this.cloze).split(" ");
              var exist = false;
              textArray.forEach(function(element, index){
                    clozeArray.forEach(function(elem, ind){
                        if (elem===element){
                          array.push(index);
                          exist = true;
                        }
                    });
              });
              if (exist){
                  array.forEach(function(index){
                    textArray[index] = "..........";
                  });
                 textArray.forEach(function(elemt){
                    str += elemt + " ";
                  });
                  return str;
              }
              else{
                  return "OOPS DOESNT MATCH!!!";
              }
            };
          this.index = array;
          this.partial = this.delete();
     }

//exporting constructors
 module.exports = {Basic, Cloze};
