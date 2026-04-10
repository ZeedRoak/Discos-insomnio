//filtro
const botones = document.querySelectorAll(".filtro-btn");
const productos = document.querySelectorAll(".producto");

botones.forEach(boton => {

  boton.addEventListener("click", () => {

    const categoria = boton.dataset.filter;

    botones.forEach(btn => btn.classList.remove("active"));
    boton.classList.add("active");

    productos.forEach(producto => {

      if(categoria === "all"){
        producto.style.display = "block";
      } 
      else if(producto.dataset.category === categoria){
        producto.style.display = "block";
      } 
      else{
        producto.style.display = "none";
      }

    });

  });

});

// MODAL
function abrirModal(src){
  const modal = document.getElementById("modalProducto");
  const img = document.getElementById("imgModal");

  img.src = src;
  modal.style.display = "flex";
}

function cerrarModal(){
  document.getElementById("modalProducto").style.display = "none";
}

//HERO
const backgrounds = document.querySelectorAll(".hero-bg");

if (backgrounds.length >0){
  let index = 0;

  setInterval(() => {
    backgrounds[index].classList.remove("active");
    index = (index + 1) % backgrounds.length;
    backgrounds[index].classList.add("active");
  }, 4000);
  console.log(backgrounds);
  
}

//FORM

(function(){
  emailjs.init("dM55GP0PJyb0RHOLg");
})();

document.getElementById("form-contacto").addEventListener("submit", function(e){
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if(!nombre || !email || !mensaje){
    alert("Completá todos los campos");
    return;
  }

  emailjs.send("service_e5vjz92", "template_en3wvzk", {
    from_name: nombre,
    from_email: email,
    message: mensaje
  })
  .then(function(){
    alert("Mensaje enviado 🔥");
  }, function(){
    alert("Error al enviar 😢");
  });
});
