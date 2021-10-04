<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.introBG1.afterCP1.p-5.mb-5
      .col-lg-4
      .col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/if1.svg' alt='Símbolo de atención').w85px
      .col-lg-6
        p.bordeLnegro.mb-0 <b><span class="cp">Apreciado aprendiz</span></b> le damos la bienvenida a esta <b>experiencia de aprendizaje diseñada para desarrollar conocimientos, habilidades y actitudes en relación con la presentación de la imagen natural del cuerpo de un fallecido</b>, para empezar, se le invita a revisar el siguiente recurso educativo.
    
    p Como aprendiz se hace necesario pensar en la <b><span class="cp">tanatoestética</span> como actividad articulada dentro del embalsamamiento y que se ejecuta después de la desinfección y preservación química del cadáver.</b> Estos momentos anteriores siempre deben pensar que generar las <b>condiciones físicas y químicas para los <span class="cp">procedimientos cosmetológicos.</span></b> 
    
    .row.align-items-center.mb-5
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 <b><span class="cp">La estética de un cuerpo sin vida</span></b> es una sensación planeada para el ritual final de este. <b>A veces quienes asisten a esta ceremonia fijan su mirada en los detalles de los aspectos físicos del fallecido, y esta acción será una imagen que quedará en la memoria de los deudos.</b>
        p En el presente <b>componente de formación se ha estructurado</b> en torno a <b>temáticas como  la estética de un cuerpo fallecido, las adecuaciones del cuerpo para la <span class="cp">tanatoestética y la cosmetología funeraria.</span></b>  Cabe mencionar que <b>la estética del fallecido se realiza a partir de técnicas de maquillaje</b> en las que se busca la <b><span class="cp">naturalidad del del fallecido</span></b>, asemejándose a sus naturales y su tipo de pie. En ocasiones, <b>las técnicas de estética contribuyen a enmendar daños visibles en el rostro causados por una enfermedad, accidentes o traumatismo, entre otros.</b>

      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/if2.svg' alt='Tanatoestética y cosmetología funeraria')

    p Al considerar la <b><span class="cp">tanatoestética</span></b> como los detalles de la imagen del cadáver <b>como aprendiz y  tanatopractor debe comprender la ruta y experiencia de aprendizaje que se ha diseñado en este componente de formación para que <span class="cp">desarrolle conocimientos, habilidades y actitudes para presentar la imagen natural del cuerpo</span></b> de acuerdo con su estado y características.
    .row.align-items-center
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/if3.svg' alt='Traslado inicial en el que se recoge el falledido')
      .col-lg-7
        p Cuando se realiza el <b>traslado inicial, en el que se recoge el fallecido, es importante escuchar los requerimientos  de la familia</b> o solicitantes del servicio funerario para que usted <b><span class="cp">proceda con los lineamientos estéticos,</span> la ropa o pertenencias que entregan.</b>
        .cajon.color-secundario.p-4
          p.mb-0 Con lo mencionado hasta aquí, <b><span class="cp">le damos la bienvenida a esta ambiente de aprendizaje</span></b> que lo llevará a conectar su experiencia con información y interacciones diseñadas desde videos, lecturas, interacciones con sus compañeros a través de la tecnología. Bienvenido.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
