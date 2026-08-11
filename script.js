/* =====================================================
   EL RANXO
   SCRIPT.JS
   ===================================================== */


/* =====================================================
   DESPLAZAMIENTO SUAVE
   ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   ANIMACIÓN DE LAS SECCIONES
   ===================================================== */

const secciones = document.querySelectorAll(".menu-section");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                sectionObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


secciones.forEach(seccion => {

    sectionObserver.observe(seccion);

});


/* =====================================================
   ANIMACIÓN DE LOS PLATOS
   ===================================================== */

const menuItems = document.querySelectorAll(".menu-item");

const itemObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                itemObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


menuItems.forEach(item => {

    itemObserver.observe(item);

});