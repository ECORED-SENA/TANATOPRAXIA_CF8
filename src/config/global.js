export default {
  global: {
    componenteFormativo: 'Tanatoestética',
    descripcionCurso:
      'El presente componente de formación surge ante pensar en la estética del cuerpo sin vida. Una actividad que está inmersa en el embalsamamiento de un cadáver.<br><br>La estética de un cuerpo sin vida es una sensación planeada para el ritual final de este y será la imagen que quedará en la memoria de los deudos. En este sentido, la experiencia de aprendizaje que surge en este momento le ayudará a desarrollar conocimientos, habilidades y actitudes relacionadas con la presentación de la imagen natural del cuerpo de acuerdo con su estado y características.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tanatoestética',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Adecuación del cadáver para la tanatoestética',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cosmetología funeraria',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Braunstein, M. (2017). Todo sobre la técnica del color.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_elibro_books_ELB123958',
    },
    {
      referencia:
        'Mayer, R. G. y Johnson, E. (2012). Embalsamamiento: Historia, teoría y práctica. (quinta edición). Mc Graw Hill.',
    },
    {
      referencia:
        'Mego, G. (2016). Tanatopraxia y tanatoestética. Todo un arte de conservar y embellecer al cadáver. Morfolia – Vol. 8 - No. 2 – 2016.',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/67117/60112-305939-1-PB.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Pope, N. (2011). Cuidado del cabello y peinados: creaciones, técnicas, material.  ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000067531',
    },
    {
      referencia: 'Sierra Acosta, M. (2014). Maquillaje.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/maquillaje?location=4',
    },
  ],
  glosario: [
    {
      termino: 'Agente blanqueador',
      significado: 'Producto químico para aclarar una decoloración de la piel.',
    },
    {
      termino: 'Amarillento ',
      significado: 'De color amarillo, color enfermizo del cutis.',
    },
    { termino: 'Base', significado: 'Producto cosmético. ' },
    {
      termino: 'Cera',
      significado:
        'Material de moldeado o renovador de superficies restaurativo compuesto de cera de abeja, parafina, almidón etc., y un pigmento colorante que se ablandara con la temperatura corporal y refleja la luz de forma similar a la piel normal.',
    },
    {
      termino: 'Laceración',
      significado: 'Herida caracterizada por el rasgado irregular del tejido.',
    },
    { termino: 'Perfil ', significado: 'Vista lateral del rostro. ' },
    {
      termino: 'Polvo',
      significado: 'Producto cosmético de diferentes tonalidades. ',
    },
  ],
  complementario: [
    {
      texto: 'Sierra Acosta, M. (2014). Maquillaje.',
      tipo: 'Libro digital, biblioteca SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_alfaomega230629',
    },
    {
      texto: 'Braunstein, M. (2017). Todo sobre la técnica del color.',
      tipo: 'Libro digital, biblioteca SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_elibro_books_ELB123958',
    },
    {
      texto:
        'Pope, N. (2011). Cuidado del cabello y peinados: creaciones, técnicas, material.',
      tipo: 'Libro, biblioteca SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000067531',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luz María Uribe Lotero',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder Desarrollo Curricular Servicios Personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante Cataño',
        cargo: 'Profesional de Diseño y Producción Curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Diseño Y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jesús Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },*/
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
