//Escribe tu código aquí
function HTMLConstructor(){
    this.elementConstructor = (text, type) =>{
        let html;
        if (type === "h1"){
            html = new HeaderHTML(text);
        } else if (type === "h2"){
            html = new SubtitleHTML(text);
        }
        html.type = type;
        return html;
    }
}

const HeaderHTML = function(text){
    this.text = text;
}

const SubtitleHTML = function(text){
    this.text = text;
}

const site = new HTMLConstructor()
const head = site.elementConstructor("Welcome", "h1");
const subtitle = site.elementConstructor("My subtitle", "h2");
console.log(head);
console.log(subtitle);