export const features = {
  welcome: {
    header: {
      logo: 'Bearly Hired',
      joinWaitlist: 'Unirse a Lista de Espera',
    },
    hero: {
      title: 'Profesional.',
      subtitle: 'Bearly.',
      description: 'Una red profesional para humanos reales, no "líderes de pensamiento." Sin falsedad corporativa. Sin energía de influencer. Solo personas compartiendo lo que están haciendo, creando o luchando.',
      joinWaitlist: 'Únete a la Lista de Espera',
      learnMore: 'Saber Más',
    },
    features: {
      title: 'Redes para los emocionalmente empleados',
      cards: {
        corporate: {
          title: 'Sin Falsedad Corporativa',
          description: 'Ser auténtico sin necesidad de jerga corporativa o actuación.',
        },
        lunch: {
          title: 'Solo Tratando de Llegar al Almuerzo',
          description: 'Una comunidad que entiende la lucha diaria y celebra las pequeñas victorias.',
        },
        public: {
          title: 'Construido en Público',
          description: 'Verdaderamente de código abierto y construido en vivo en Twitch con completa transparencia.',
        },
      },
    },
    signup: {
      title: 'Recibe notificaciones cuando lancemos',
      subtitle: 'Sé el primero en unirte a una red profesional que no se toma demasiado en serio.',
      emailPlaceholder: 'Ingresa tu correo',
      joinWaitlist: 'Unirse a Lista de Espera',
    },
    footer: {
      launchDate: 'Lanzamiento en Otoño 2023',
      copyright: '© 2023 Bearly Hired. Todos los derechos reservados.',
    },
  },
  auth: {
    login: {
      title: 'Bienvenido de Vuelta',
      subtitle: 'Por favor inicie sesión en su cuenta',
      emailLabel: 'Correo Electrónico',
      passwordLabel: 'Contraseña',
      forgotPassword: '¿Olvidó su contraseña?',
      noAccount: '¿No tiene una cuenta?',
      signUp: 'Registrarse',
    },
    register: {
      title: 'Crear Cuenta',
      subtitle: 'Únete a nosotros hoy',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Correo Electrónico',
      passwordLabel: 'Contraseña',
      confirmPasswordLabel: 'Confirmar Contraseña',
      hasAccount: '¿Ya tiene una cuenta?',
      signIn: 'Iniciar sesión',
    },
  },
  profile: {
    title: 'Configuración del Perfil',
    personalInfo: 'Información Personal',
    preferences: 'Preferencias',
    security: 'Seguridad',
  },
} as const;