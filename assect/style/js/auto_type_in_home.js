var typed=new Typed(".auto_type4",{
    strings:["Full Stack Developer","UI/UX Designer","Web Developer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true,
});

var text = document.getElementById('text');
var newDom = '';
var animationDelay = 1;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}


/*var typed=new Typed(".auto_type4",{
    strings:["Software Developer","UI/UX Desingner","Web Developer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true,
});
var text = document.getElementById('text');
var newDom = '';
var animationDelay = 1;*/
