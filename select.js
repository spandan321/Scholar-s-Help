document.querySelector('#OBC').addEventListener('click',function() {
     document.querySelector('#less').addEventListener('click',function() {
       document.querySelector('#less').setAttribute('href','obc.html');
     });
     document.querySelector('#more').addEventListener('click',function() {
       document.querySelector('#more').setAttribute('href','obc1.html');
     });

       document.querySelector('#less1').style.display='none';

       document.querySelector('#more1').style.display='none';

});

document.querySelector('#SEBC').addEventListener('click',function() {
     document.querySelector('#less').addEventListener('click',function() {
       document.querySelector('#less').setAttribute('href','sebc.html');
     });
     document.querySelector('#more').addEventListener('click',function() {
       document.querySelector('#more').setAttribute('href','sebc1.html');
     });

       document.querySelector('#less1').style.display='none';

       document.querySelector('#more1').style.display='none';

});

document.querySelector('#VJNT').addEventListener('click',function() {
     document.querySelector('#less').addEventListener('click',function() {
       document.querySelector('#less').setAttribute('href','vj.html');
     });
     document.querySelector('#more').addEventListener('click',function() {
       document.querySelector('#more').setAttribute('href','vj1.html');
     });

       document.querySelector('#less1').style.display='none';

       document.querySelector('#more1').style.display='none';

});

document.querySelector('#SC').addEventListener('click',function() {
  document.querySelector('#less').style.display='none';
  document.querySelector('#more').style.display='none';
  document.querySelector('#less1').style.display='block';
  document.querySelector('#more1').style.display='block';

     document.querySelector('#less1').addEventListener('click',function() {
       document.querySelector('#less1').setAttribute('href','sc.html');
     });
     document.querySelector('#more1').addEventListener('click',function() {
       document.querySelector('#more1').setAttribute('href','sc1.html');
     });
});

document.querySelector('#ST').addEventListener('click',function() {
     document.querySelector('#less1').addEventListener('click',function() {
       document.querySelector('#less1').setAttribute('href','st.html');
     });

       document.querySelector('#less').style.display='none';

       document.querySelector('#more1').style.display='none';

       document.querySelector('#more').style.display='none';


});
