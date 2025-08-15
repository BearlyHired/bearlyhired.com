export const components = {
  button: {
    submit: 'Enviar',
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    edit: 'Editar',
    loading: 'Cargando...',
  },
  input: {
    required: 'Este campo es obligatorio',
    invalid: 'Por favor ingrese un valor válido',
    placeholder: 'Ingrese texto...',
  },
  navigation: {
    home: 'Inicio',
    about: 'Acerca de',
    contact: 'Contacto',
    login: 'Iniciar Sesión',
    logout: 'Cerrar Sesión',
  },
  header: {
    logo: 'Bearly Hired',
    joinWaitlist: 'Unirse a Lista de Espera',
  },
  hero: {
    title: 'Profesional.',
    subtitle: 'Apenas.',
    description: 'Una red profesional para humanos reales, no "líderes de pensamiento." Sin falsedad corporativa. Sin energía de influencer. Solo personas compartiendo lo que están haciendo, creando, o con lo que luchan.',
    joinWaitlist: 'Unirse a Lista de Espera',
    learnMore: 'Saber Más',
  },
  features: {
    title: 'Networking para los emocionalmente empleados',
    cards: {
      corporate: {
        title: 'Sin Falsedad Corporativa',
        description: 'Sé tu yo auténtico sin necesidad de jerga corporativa o actuación.',
      },
      lunch: {
        title: 'Solo Tratando de Llegar al Almuerzo',
        description: 'Una comunidad que entiende la lucha diaria y celebra las pequeñas victorias.',
      },
      public: {
        title: 'Construido en Público',
        description: 'Verdaderamente código abierto y construido en vivo en Twitch con total transparencia.',
      },
    },
  },
  emailSignup: {
    title: 'Recibe notificaciones cuando lancemos',
    subtitle: 'Sé el primero en unirte a una red profesional que no se toma demasiado en serio.',
    emailPlaceholder: 'Ingresa tu email',
    joinWaitlist: 'Unirse a Lista de Espera',
  },
  footer: {
    launchDate: 'Lanzamiento en Otoño 2023',
    copyright: '© 2023 Bearly Hired. Todos los derechos reservados.',
  },
} as const;